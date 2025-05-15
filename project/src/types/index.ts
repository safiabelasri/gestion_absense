export interface Student {
  id: string;
  name: string;
  department: string;
  age: number;
  contact: string;
  address: string;
  status: 'Present' | 'Absent';
  attendancePercentage?: number;
  totalHours?: string;
  totalAttendance?: number;
}

export interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent';
  checkInTime: string;
  checkOutTime: string;
}

export interface DashboardStats {
  present: {
    count: number;
    percentage: number;
  };
  absent: {
    count: number;
    percentage: number;
  };
  total: {
    count: number;
    percentage: number;
  };
}

export interface Department {
  name: string;
  count: number;
}

export interface User {
  username: string;
  isLoggedIn: boolean;
}