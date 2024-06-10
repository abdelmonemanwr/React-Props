import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StudentTable } from './components/StudentTable';
import { StudentForm } from './components/StudentForm';
import { useSnackbar } from './components/SnackBarProvider';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, studentName: 'Men3m', studentAge: 20, studentCourse: 'React' },
    { id: 2, studentName: 'Ahmed', studentAge: 25, studentCourse: 'Angular' },
    { id: 3, studentName: 'Ali', studentAge: 30, studentCourse: 'PHP' },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const { showSnackbar } = useSnackbar();

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
    showSnackbar('Student deleted successfully!', 'success');
  };

  return (
    <div>
      <StudentForm addStudent={addStudent} />
      <StudentTable students={students} deleteStudent={deleteStudent} />
    </div>
  );
}
