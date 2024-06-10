import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSnackbar } from './SnackBarProvider';

export function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    studentCourse: ''
  });

  const [errors, setErrors] = useState({
    studentName: '',
    studentAge: '',
    studentCourse: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const { showSnackbar } = useSnackbar();
  const validateForm = () => {
    const namePattern = /^.{3,15}$/;
    const agePattern = /^(20|[2-4][0-9]|45)$/;
    const coursePattern = /^.{3,15}$/;

    let isValid = true;
    let errors = { studentName: '', studentAge: '', studentCourse: '' };

    if (!namePattern.test(formData.studentName)) {
      errors.studentName = 'Student Name must be between 3 and 15 characters';
      isValid = false;
    }

    if (!agePattern.test(formData.studentAge)) {
      errors.studentAge = 'Student Age must be between 20 and 45';
      isValid = false;
    }

    if (!coursePattern.test(formData.studentCourse)) {
      errors.studentCourse = 'Student Course must be between 3 and 15 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addStudent({ ...formData, id: new Date().getTime() });
      setFormData({ studentName: '', studentAge: '', studentCourse: '' });
      showSnackbar('Student added successfully!', 'success');
    }
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center text-light bg-dark p-3 mb-5'>Student Form</h1>
      <form className='form form-control p-4' onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='studentName' className='form-label'>Student Name</label>
          <input
            type='text'
            className='form-control'
            id='studentName'
            name='studentName'
            value={formData.studentName}
            onChange={onInputChange}
            placeholder='Enter Student Name'
          />
          {errors.studentName && <small className="text-danger">{errors.studentName}</small>}
        </div>
        <div className='mb-3'>
          <label htmlFor='studentAge' className='form-label'>Student Age</label>
          <input
            type='number'
            className='form-control'
            id='studentAge'
            name='studentAge'
            value={formData.studentAge}
            onChange={onInputChange}
            placeholder='Enter Student Age'
          />
          {errors.studentAge && <small className="text-danger">{errors.studentAge}</small>}
        </div>
        <div className='mb-3'>
          <label htmlFor='studentCourse' className='form-label'>Student Course</label>
          <input
            type='text'
            className='form-control'
            id='studentCourse'
            name='studentCourse'
            value={formData.studentCourse}
            onChange={onInputChange}
            placeholder='Enter Student Course'
          />
          {errors.studentCourse && <small className="text-danger">{errors.studentCourse}</small>}
        </div>
        <button type='submit' className='btn btn-success d-block ms-auto'>Add New Student</button>
      </form>
    </div>
  );
}
