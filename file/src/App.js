import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/inputdata/', inputs);
      alert('Inputs submitted successfully!');
    } catch (error) {
      console.error('Error submitting inputs:', error);
    }
  };

  return (
    <div>
      <h1>React App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input1" value={inputs.input1} onChange={handleChange} placeholder="Input 1" /><br />
        <input type="text" name="input2" value={inputs.input2} onChange={handleChange} placeholder="Input 2" /><br />
        <input type="text" name="input3" value={inputs.input3} onChange={handleChange} placeholder="Input 3" /><br />
        <input type="text" name="input4" value={inputs.input4} onChange={handleChange} placeholder="Input 4" /><br />
        <input type="text" name="input5" value={inputs.input5} onChange={handleChange} placeholder="Input 5" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
