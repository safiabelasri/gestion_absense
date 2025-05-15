import { Student, AttendanceRecord, DashboardStats, Department } from '../types';

// Mock Students
export const students: Student[] = [
  { id: '1426392730', name: 'Nada Belachqer', department: 'Informatique', age: 20, contact: '+212 6 37 26 23 47', address: 'Blk 6 Lt 7 Japan St.', status: 'Present', attendancePercentage: 80, totalHours: '64:40:40', totalAttendance: 100 },
  { id: '1426392731', name: 'Fatima Benharouse', department: 'Science', age: 21, contact: '+212 6 22 33 44 55', address: 'Apt 12, Main St.', status: 'Present', attendancePercentage: 75, totalHours: '60:20:15', totalAttendance: 95 },
  { id: '1426392732', name: 'Akram Oudghiri', department: 'Mathematics', age: 22, contact: '+212 6 11 22 33 44', address: '123 College Ave.', status: 'Absent', attendancePercentage: 65, totalHours: '52:10:30', totalAttendance: 82 },
  { id: '1426392733', name: 'Safia Safia', department: 'Physics', age: 20, contact: '+212 6 99 88 77 66', address: '45 University Blvd.', status: 'Present', attendancePercentage: 90, totalHours: '72:45:10', totalAttendance: 110 },
  { id: '1426392734', name: 'Anas Aliky', department: 'Chemistry', age: 19, contact: '+212 6 55 44 33 22', address: '78 Lab Lane', status: 'Present', attendancePercentage: 85, totalHours: '68:30:45', totalAttendance: 105 },
  { id: '1426392735', name: 'Hiba allaoui', department: 'Biology', age: 21, contact: '+212 6 33 22 11 00', address: '90 Science Park', status: 'Absent', attendancePercentage: 60, totalHours: '48:20:15', totalAttendance: 75 },
  { id: '1426392736', name: 'Amal Amal', department: 'Economics', age: 22, contact: '+212 6 44 55 66 77', address: '34 Market St.', status: 'Absent', attendancePercentage: 70, totalHours: '56:40:30', totalAttendance: 87 },
  { id: '1426392737', name: 'Derbich', department: 'Business', age: 20, contact: '+212 6 77 88 99 00', address: '56 Commerce Ave.', status: 'Present', attendancePercentage: 95, totalHours: '76:15:00', totalAttendance: 115 },
];

// Mock Attendance Records
export const attendanceRecords: Record<string, AttendanceRecord[]> = {
  '1426392730': [
    { date: 'Wed, Jan 31, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '---' },
    { date: 'Tue, Jan 30, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Mon, Jan 29, 2023', status: 'Absent', checkInTime: '---', checkOutTime: '---' },
    { date: 'Sat, Jan 27, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Fri, Jan 26, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Thurs, Jan 25, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Wed, Jan 24, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Tue, Jan 23, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Mon, Jan 22, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '---' },
  ]
};

// Dashboard Stats
export const dashboardStats: DashboardStats = {
  present: {
    count: 145,
    percentage: 78,
  },
  absent: {
    count: 41,
    percentage: 22,
  },
  total: {
    count: 186,
    percentage: 95,
  }
};

// Departments
export const departments: Department[] = [
  { name: 'General', count: 1800 },
  { name: 'Science', count: 1200 },
  { name: 'Maths', count: 800 },
  { name: 'Activity', count: 1000 },
];