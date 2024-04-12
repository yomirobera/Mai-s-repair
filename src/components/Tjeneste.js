import React from 'react';
import sewingImage from './sewing.jpg'; // Import the image file

function Tjeneste() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Våre tjenester</h1>
          <p className="lead"></p>
          <p>Kjøler</p>
          <p>Dress</p>
        </div>
        <div className="col-md-6">
        <img src={sewingImage} class="img-fluid" alt="Repair services"></img>
        </div>
      </div>
    </div>
  );
}

export default Tjeneste;
