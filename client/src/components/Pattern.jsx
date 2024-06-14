import React, { useState } from 'react';
import "../styles/pattern.css"
//import './App.css'; // Import your CSS file for styling

function Pattern() {
  // State to manage the color selection
  const [color1, setColor1] = useState('red'); // Default color for even divisions
  const [color2, setColor2] = useState('white'); // Default color for odd divisions

  // Function to toggle color for even divisions
  const toggleColor1 = () => {
    const newColor = color1 === '#ff0000' ? '#0000ff' : '#ff0000';
    setColor1(newColor);
  };

  // Function to toggle color for odd divisions
  const toggleColor2 = () => {
    const newColor = color2 === '#00ff00' ? '#ffff00' : '#00ff00';
    setColor2(newColor);
  };

  // Generate array of 20 divisions
  const divisions = [1,2,3,4,5,6,7,8,9,10];//Array.from({ length: 20 }, (_, index) => index + 1);
  console.log(divisions)

  return (
    <div class="rectangle-area">
      {divisions.map((index) => (
        <div
          className="division"
          style={{ backgroundColor: index % 2 === 0 ? color1 : color2 }}
        >
          {"."}
        </div>
      ))}
      <div>
        <button className="toggle-btn1" onClick={toggleColor1}>Toggle Color 1</button>
        <br/>
        <button className="toggle-btn2" onClick={toggleColor2}>Toggle Color 2</button>
      </div>
    </div>
  );
}

export default Pattern;