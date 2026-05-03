import { useState, useRef, useEffect } from 'react';
import { db } from '../../utils/db';
import { useNavigate } from 'react-router-dom';

const SCHOOL_COORDS = { lat: 12.913943, lng: 77.605509 }; 
const ALLOWED_RADIUS = 0.2; // 200 meters for better accuracy

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [locationStatus, setLocationStatus] = useState('checking');
  const [coords, setCoords] = useState(null);
  const [isWithinRange, setIsWithinRange] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState('idle'); // idle, loading, success
  const [myLeaveRequests, setMyLeaveRequests] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    checkLocation();
    fetchMyRequests();
  }, []);

  const fetchMyRequests = () => {
    const email = localStorage.getItem('user_email');
    const all = db.get('leave_requests');
    setMyLeaveRequests(all.filter(r => r.teacherEmail === email));
  };

  const checkLocation = () => {
    setLocationStatus('checking');
    if (!navigator.geolocation) {
      setLocationStatus('unsupported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        
        // Simple distance calculation (Haversine approx)
        const dist = calculateDistance(latitude, longitude, SCHOOL_COORDS.lat, SCHOOL_COORDS.lng);
        setIsWithinRange(dist <= ALLOWED_RADIUS);
        setLocationStatus('detected');
      },
      (error) => {
        setLocationStatus('denied');
        console.error(error);
      }
    );
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Please allow camera access to capture your face for attendance.");
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL('image/png');
      setCapturedImage(data);
      
      // Stop stream
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStreaming(false);
    }
  };

  const submitAttendance = (type = 'Check-in') => {
    if (!isWithinRange) {
      alert(`You must be at the school location to mark ${type.toLowerCase()}.`);
      return;
    }
    if (!capturedImage) {
      alert("Please capture your face photo first.");
      return;
    }

    setAttendanceStatus('loading');
    
    setTimeout(() => {
      const attendanceData = {
        teacherEmail: localStorage.getItem('user_email') || 'teacher@gmail.com',
        timestamp: new Date().toISOString(),
        location: coords,
        photo: capturedImage,
        type: type, // 'Check-in' or 'Check-out'
        status: 'Present'
      };

      db.add('teacher_attendance', attendanceData);
      setAttendanceStatus('success');
      setCapturedImage(null);
    }, 2000);
  };

  const submitLeaveRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const leaveData = {
      teacherEmail: formData.get('email'),
      teacherName: formData.get('name'),
      mobile: formData.get('mobile'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      reason: formData.get('problem'),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    db.add('leave_requests', leaveData);
    alert('Leave request submitted to Admin successfully!');
    e.target.reset();
    fetchMyRequests();
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_email');
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '0.2rem' }}>Teacher Portal 👩‍🏫</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="btn-outline-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '12px' }}>📝 Request Leave</button>
             <button onClick={handleLogout} className="btn-outline-red" style={{ padding: '0.6rem 1.2rem', borderRadius: '12px' }}>🚪 Logout</button>
          </div>
        </div>

        {attendanceStatus === 'success' ? (
          <div style={{ background: 'white', borderRadius: '30px', padding: '4rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
            <h2 style={{ color: 'var(--green)', fontSize: '2.2rem', marginBottom: '1rem' }}>Attendance Recorded!</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Your attendance has been successfully recorded with location and face verification. Have a great day!</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => setAttendanceStatus('idle')} className="btn btn-secondary">Done</button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="teacher-grid">
            
            {/* LEFT: LOCATION CHECK */}
            <div style={{ background: 'white', borderRadius: '25px', padding: '2rem', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(52, 152, 219, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem' }}>Location Verification</h3>
              </div>

              <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '15px', marginBottom: '1.5rem', textAlign: 'center' }}>
                {locationStatus === 'checking' && <p>⏳ Detecting your location...</p>}
                {locationStatus === 'detected' && (
                  <>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{isWithinRange ? '✅' : '❌'}</div>
                    <p style={{ fontWeight: 700, color: isWithinRange ? 'var(--green)' : 'var(--red)' }}>
                      {isWithinRange ? 'You are at School' : 'You are outside school range'}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                      Coords: {coords?.latitude.toFixed(4)}, {coords?.longitude.toFixed(4)}
                    </p>
                  </>
                )}
                {locationStatus === 'denied' && (
                  <p style={{ color: 'var(--red)' }}>⚠️ Location access denied. Please enable GPS.</p>
                )}
              </div>
              
              <button onClick={checkLocation} className="btn-outline-primary" style={{ width: '100%', justifyContent: 'center' }}>🔄 Refresh Location</button>
            </div>

            {/* RIGHT: FACE CAPTURE */}
            <div style={{ background: 'white', borderRadius: '25px', padding: '2rem', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(155, 89, 182, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📸</div>
                <h3 style={{ fontSize: '1.3rem' }}>Face Verification</h3>
              </div>

              <div style={{ position: 'relative', background: '#000', borderRadius: '15px', height: '220px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {capturedImage ? (
                  <img src={capturedImage} alt="Captured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <>
                    <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: streaming ? 'block' : 'none' }} />
                    {!streaming && (
                      <div style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Camera is off</p>
                        <button onClick={startCamera} className="btn btn-white" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>🎥 Start Camera</button>
                      </div>
                    )}
                  </>
                )}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
              </div>

              {streaming ? (
                <button onClick={capturePhoto} className="btn btn-purple" style={{ width: '100%', justifyContent: 'center' }}>📸 Capture Photo</button>
              ) : capturedImage ? (
                <button onClick={() => { setCapturedImage(null); startCamera(); }} className="btn-outline-primary" style={{ width: '100%', justifyContent: 'center' }}>🔄 Retake Photo</button>
              ) : null}
            </div>

            {/* BOTTOM: SUBMIT ACTIONS */}
            <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <button 
                onClick={() => submitAttendance('Check-in')} 
                disabled={!isWithinRange || !capturedImage || attendanceStatus === 'loading'}
                className="btn btn-primary" 
                style={{ padding: '1.2rem', fontSize: '1.1rem', justifyContent: 'center', borderRadius: '15px', opacity: (!isWithinRange || !capturedImage) ? 0.5 : 1 }}
              >
                {attendanceStatus === 'loading' ? '⏳ Processing...' : '✅ Check-in Attendance'}
              </button>
              <button 
                onClick={() => submitAttendance('Check-out')} 
                disabled={!isWithinRange || !capturedImage || attendanceStatus === 'loading'}
                className="btn btn-teal" 
                style={{ padding: '1.2rem', fontSize: '1.1rem', justifyContent: 'center', borderRadius: '15px', opacity: (!isWithinRange || !capturedImage) ? 0.5 : 1, background: 'var(--secondary)', color: 'white' }}
              >
                {attendanceStatus === 'loading' ? '⏳ Processing...' : '🚪 Check-out (Leave School)'}
              </button>
              {(!isWithinRange || !capturedImage) && (
                <p style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '0.5rem', color: 'var(--red)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {!isWithinRange ? '⚠️ You must be at school location.' : '⚠️ Please capture your face photo.'}
                </p>
              )}
            </div>

          </div>
        )}

        {/* LEAVE REQUEST SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
          
          <div style={{ background: 'white', borderRadius: '25px', padding: '2.5rem', boxShadow: 'var(--shadow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255, 107, 107, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✉️</div>
              <div>
                <h3 style={{ fontSize: '1.3rem' }}>Request Leave</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Submit a formal leave letter</p>
              </div>
            </div>

            <form onSubmit={submitLeaveRequest} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div className="form-group">
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Your name" required style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input name="email" type="email" placeholder="your@email.com" required defaultValue={localStorage.getItem('user_email') || ''} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input name="mobile" type="tel" placeholder="+91 XXXXX XXXXX" required style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} />
              </div>
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <div>
                   <label>Start</label>
                   <input name="startDate" type="date" required style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} />
                </div>
                <div>
                   <label>End</label>
                   <input name="endDate" type="date" required style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} />
                </div>
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>Problem / Reason for Leave</label>
                <textarea name="problem" rows="3" placeholder="Explain your problem..." required style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>📤 Submit Leave Request</button>
              </div>
            </form>
          </div>

          <div style={{ background: 'white', borderRadius: '25px', padding: '2.5rem', boxShadow: 'var(--shadow)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(39, 174, 96, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📋</div>
              <div>
                <h3 style={{ fontSize: '1.3rem' }}>Leave Status</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Track your leave letters</p>
              </div>
            </div>

            <div style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {myLeaveRequests.length > 0 ? (
                myLeaveRequests.map((req, i) => (
                  <div key={i} style={{ padding: '1rem', borderRadius: '15px', border: '1px solid #eee', marginBottom: '1rem', background: '#fafafa' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>🗓️ {req.startDate} to {req.endDate}</span>
                      <span style={{ 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '10px', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        background: req.status === 'Approved' ? '#d4f8e8' : req.status === 'Rejected' ? '#ffe8e8' : '#fff3cd',
                        color: req.status === 'Approved' ? '#27ae60' : req.status === 'Rejected' ? '#e74c3c' : '#f39c12'
                      }}>
                        {req.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: 0, opacity: 0.8 }}>{req.reason}</p>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', color: 'var(--text-light)', marginTop: '2rem' }}>No requests submitted yet.</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
