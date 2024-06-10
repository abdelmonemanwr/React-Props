import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export function StudentTable({ students, deleteStudent }) {
  return (
    <div className='container p-5 my-5'>
      <h1 className='text-center text-warning bg-dark p-3 mb-4'>Student Data</h1>
      <div className='table-responsive'>
        <table className='table table-bordered table-hover text-center'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Course</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.studentAge}</td>
                <td>{student.studentCourse}</td>
                <td className='text-center'>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete <i className='fa fa-trash ms-2'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
