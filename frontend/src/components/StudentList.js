import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h4>Student List:</h4>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map(student => (
          <div key={student._id}>
            <p>{student.name} - {student.age} - {student.grade}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;
