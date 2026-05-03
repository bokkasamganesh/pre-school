const INITIAL_DATA = {
  students: [
    { id: 'ST1001', name: 'Aarav Sharma', class: 'Nursery', parent: 'Rajesh Sharma', status: 'Active', email: 'aarav@example.com', mobile: '9876543210', emergency: '' },
    { id: 'ST1002', name: 'Priya Patel', class: 'Junior KG', parent: 'Suresh Patel', status: 'Active', email: 'priya@example.com', mobile: '9876543211', emergency: '9876543212' },
  ],
  teachers: [
    { id: 'TR2001', name: 'Ms. Sunita', subject: 'English & Rhymes', experience: '5 Years', contact: '+91 9876543210', email: 'sunita@example.com', password: 'password123' },
    { id: 'TR2002', name: 'Mr. Verma', subject: 'Mathematics', experience: '8 Years', contact: '+91 9876543211', email: 'verma@example.com', password: 'password123' },
  ],
  staff: [
    { id: 'SF3001', name: 'John Doe', role: 'Security', contact: '+91 9876543212' },
    { id: 'SF3002', name: 'Jane Smith', role: 'Front Desk', contact: '+91 9876543213' },
  ],
  parents: [
    { id: 'PR4001', name: 'Rajesh Sharma', student: 'Aarav Sharma', contact: '+91 9876543214', email: 'rajesh@example.com' },
  ],
  queries: [
    { id: 1, name: 'Amit Kumar', email: 'amit@example.com', subject: 'Admission Fee', message: 'What is the fee structure for Nursery?', status: 'Pending', date: '2024-05-01' },
  ],
  media: [
    { id: 1, type: 'image', url: '/images/gallery/1.jpg', title: 'Annual Day' },
    { id: 2, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'School Tour' },
  ],
  events: [
    { id: 'EV1001', title: 'Annual Sports Day', date: '2024-06-15', category: 'Sports', type: 'image', url: '/images/events/sports.jpg', description: 'Join us for a day of fun and games!' },
    { id: 'EV1002', title: 'Science Exhibition', date: '2024-07-10', category: 'Academic', type: 'image', url: '/images/events/science.jpg', description: 'Explore the wonders of science with our little scientists.' },
  ],
  teacher_attendance: [],
  leave_requests: []
};

const getDB = () => {
  const data = localStorage.getItem('school_db');
  if (!data) {
    localStorage.setItem('school_db', JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  return JSON.parse(data);
};

const saveDB = (data) => {
  localStorage.setItem('school_db', JSON.stringify(data));
};

export const db = {
  get: (collection) => getDB()[collection] || [],
  
  add: (collection, item) => {
    const data = getDB();
    if (!data[collection]) data[collection] = [];
    const newItem = { ...item, id: item.id || Date.now().toString() };
    data[collection].push(newItem);
    saveDB(data);
    return newItem;
  },

  update: (collection, id, updates) => {
    const data = getDB();
    const index = data[collection].findIndex(item => item.id === id);
    if (index !== -1) {
      data[collection][index] = { ...data[collection][index], ...updates };
      saveDB(data);
      return data[collection][index];
    }
    return null;
  },

  delete: (collection, id) => {
    const data = getDB();
    data[collection] = data[collection].filter(item => item.id !== id);
    saveDB(data);
  },

  reset: () => {
    localStorage.setItem('school_db', JSON.stringify(INITIAL_DATA));
  }
};
