import React from 'react';
import StudentList from './components/StudentList';
import FacultyList from './components/FacultyList';

function App() {
  return (
    <div>
      <h1>Student Management System</h1>
      <StudentList />
      <h1>Faculty Management System</h1>
      <FacultyList />
    </div>
  );
}

export default App;
