import React from 'react';
import sewingImage from './sewing.jpg'; // Import the image file

function Prisliste() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Prisliste</h1>
          <p className="lead">100Kr</p>
          <p>200Kr.</p>
          <p>300Kr</p>
        </div>
        <div className="col-md-6">
        <img src={sewingImage} class="img-fluid" alt="Repair services"></img>
        </div>
      </div>
    </div>
  );
}

export default Prisliste;
