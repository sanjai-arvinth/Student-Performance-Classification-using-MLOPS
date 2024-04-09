import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    prediction: null,
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value1, value2, value3, value4, value5 } = this.state;

    axios.post("http://127.0.0.1:8000", {
        v1: value1,
        v2: value2,
        v3: value3,
        v4: value4,
        v5: value5
      })
      .then((response) => {
        this.setState({ prediction: response.data.prediction, error: null });
      })
      
  };

  render() {
    const { value1, value2, value3, value4, value5, prediction, error } = this.state;

    return (
      <div>
        <h1 style={{ paddingLeft: '10px', color:'wheat' }}>Student Performance Evaluation</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px'}}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>Hours Studied:</label>
            <input type="text" name="value1" value={value1} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>Previous Scores:</label>
            <input type="text" name="value2" value={value2} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>Extracurricular Activities:</label>
            <input type="text" name="value3" value={value3} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>Sleep Hours:</label>
            <input type="text" name="value4" value={value4} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>Sample Question Paper Practised:</label>
            <input type="text" name="value5" value={value5} onChange={this.handleChange} />
          </div>
          <div style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat'}}>
          <button type="submit">Submit</button>
          </div>
        </form>
        {prediction !== null && (
          <div>
            <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat'}}>Prediction:</h2>
            <p style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat'}}>{prediction}</p>
          </div>
        )}
        {error && <div>Error: {error}</div>}
      </div>
    );
  }
}

export default App;
