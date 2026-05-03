import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { useState } from 'react';

// Admin Imports
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import StudentsAdmin from './pages/admin/Students';
import TeachersAdmin from './pages/admin/Teachers';
import StaffAdmin from './pages/admin/Staff';
import ParentsAdmin from './pages/admin/Parents';
import MediaAdmin from './pages/admin/Media';
import QueriesAdmin from './pages/admin/Queries';
import EventsAdmin from './pages/admin/Events';
import TeacherDashboard from './pages/teacher/Dashboard';
import LeaveRequestsAdmin from './pages/admin/LeaveRequests';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="students" element={<StudentsAdmin />} />
          <Route path="teachers" element={<TeachersAdmin />} />
          <Route path="staff" element={<StaffAdmin />} />
          <Route path="parents" element={<ParentsAdmin />} />
          <Route path="leave-requests" element={<LeaveRequestsAdmin />} />
          <Route path="fees" element={<div className="admin-card"><div className="card-header"><h3 className="card-title">Fees & Payments Module Coming Soon</h3></div></div>} />
          <Route path="exams" element={<div className="admin-card"><div className="card-header"><h3 className="card-title">Exams & Results Module Coming Soon</h3></div></div>} />
          <Route path="events" element={<EventsAdmin />} />
          <Route path="transport" element={<div className="admin-card"><div className="card-header"><h3 className="card-title">Transport Module Coming Soon</h3></div></div>} />
          <Route path="media" element={<MediaAdmin />} />
          <Route path="queries" element={<QueriesAdmin />} />
        </Route>

        {/* Teacher Routes */}
        <Route 
          path="/teacher" 
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeacherDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
