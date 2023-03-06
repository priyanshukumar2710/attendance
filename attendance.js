import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    // fetch data from API or localStorage and set students state
  }, []);

  const addStudent = () => {
    const student = { rollNo, name, checkIn, checkOut };
    setStudents([...students, student]);
    setRollNo('');
    setName('');
    setCheckIn('');
    setCheckOut('');
  };

  const presentStudents = students.filter((student) => student.checkOut === '');

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-2">Student Attendance System</h1>
      <form className="flex flex-col mb-4">
        <label htmlFor="rollNo" className="mb-2 font-bold">
          Roll Number
        </label>
        <input
          type="text"
          id="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="border py-2 px-3 mb-3"
        />
        <label htmlFor="name" className="mb-2 font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border py-2 px-3 mb-3"
        />
        <label htmlFor="checkIn" className="mb-2 font-bold">
          Check In Time
        </label>
        <input
          type="text"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border py-2 px-3 mb-3"
        />
        <label htmlFor="checkOut" className="mb-2 font-bold">
          Check Out Time
        </label>
        <input
          type="text"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border py-2 px-3 mb-3"
        />
        <button type="button" onClick={addStudent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Student
        </button>
      </form>
      <p className="mb-2 font-bold">Number of Students Present: {presentStudents.length}</p>
      <ul>
        {students.map((student) => (
          <li key={student.rollNo}>
            <span className="font-bold">{student.rollNo}</span> - {student.name} ({student.checkIn} - {student.checkOut})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
