// import { useState } from "react";
// function BMI() {
//     const [height, setHeight] = useState(0);
//     const [weight, setWeight] = useState(0);
//     const [bmi, setBmi] = useState(null);
//     const calculateBMI = () =>{
//         const heightInMeters = height /100;
//         const bmiResult = weight / (heightInMeters * heightInMeters);
//         setBmi(bmiResult.toFixed(2));
//     }
//     return(<>
//     <div>
//         <div>
//             Height<input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
//         </div>
//         <div>
//             Weight<input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
//         </div>
//         <button onClick={calculateBMI}>BMI</button>
//         {bmi !== null && <p>BMI is: {bmi}</p>}
//     </div>
//     </>);
// }
// export default BMI;

import React, { useState, useRef } from 'react';
import './Bmi.css';

function Bmi() {
  const weightRef = useRef();
  const heightRef = useRef();
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const weight = weightRef.current.value;
    const height = heightRef.current.value / 100; // แปลงเป็นเมตร
    const bmiValue = weight / (height * height);
    setBmi(bmiValue);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input type="number" ref={weightRef} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" ref={heightRef} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi !== null && (
        <BmiText bmi={bmi} />
      )}
    </div>
  );
}

function BmiText({ bmi }) {
  let bmiText = '';
  if (bmi < 18.5) {
    bmiText = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiText = 'Normal Weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiText = 'Overweight';
  } else {
    bmiText = 'Obese';
  }

  return (
    <div>
      <h2>Your BMI: {bmi.toFixed(2)}</h2>
      <p>You are {bmiText}</p>
    </div>
  );
}

export default Bmi;
