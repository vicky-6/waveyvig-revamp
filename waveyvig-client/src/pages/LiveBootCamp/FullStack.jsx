import React from 'react';

const Fullstack = () => {
  return (
    <div className='pt-10' style={{
      display: 'flex',
      padding: '50px',
      paddingTop : '100px',
      backgroundColor: '#0b1d57',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Left Content */}
      <div style={{ flex: 1, paddingRight: '20px', paddingLeft:'50px', color:'white' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
          Become a <span style={{ backgroundColor: 'white', padding: '0 10px', color:'black'  }}>Full Stack</span> Web Developer in 3 Months + 2 Month Internship!
        </h1>
        <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
          Mentorship from industry experts at <strong>Zoho, Accenture, Infosys</strong> & more!
        </p>
        <p style={{ fontSize: '1em', marginBottom: '30px' }}>
          Learn from top industry educators, work on hands-on projects, and gain <strong>job-ready skills</strong> to launch your career in Full Stack Web Development.
        </p>
        <button style={{
          backgroundColor: '#fcb040',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em',
        }}>
          Program Overview
        </button>
      </div>

      {/* Right Form */}
      <div style={{
        width: '350px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}>
        <h3 style={{ marginBottom: '15px' }}>I'm Interested</h3>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>* Name</label>
            <input type="text" placeholder="Enter the Name" style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>* Email</label>
            <input type="email" placeholder="Enter the Email" style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>* Phone (or) Whatsapp Number</label>
            <div style={{ display: 'flex' }}>
              <select style={{
                padding: '10px',
                borderRadius: '5px 0 0 5px',
                border: '1px solid #ccc',
                borderRight: 'none',
                backgroundColor: '#eee',
              }}>
                <option>+91</option>
                {/* Add more country codes if needed */}
              </select>
              <input type="text" placeholder="8220612345" style={{
                flex: 1,
                padding: '10px',
                borderRadius: '0 5px 5px 0',
                border: '1px solid #ccc',
                borderLeft: 'none',
              }} />
            </div>
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#fcb040',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1em',
            cursor: 'pointer',
          }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fullstack;