import React from 'react';
import sewingImage from './sewing.jpg'; // Import the image file

function OmOss() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Om oss</h1>
          <p className="lead">Vi er ....</p>
          <p>Mai's Repair</p>
          <p>test</p>
        </div>
        <div className="col-md-6">
        <img src={sewingImage} class="img-fluid" alt="Repair services"></img>
        </div>
      </div>
    </div>
  );
}

export default OmOss;
