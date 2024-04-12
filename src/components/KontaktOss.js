import React from 'react';
import sewingImage from './sewing.jpg'; // Import the image file

function KontaktOss() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Kontakt informasjon</h1>
          <p className="lead">tlf: 409972373.</p>
          <p>epost: test@gmail.com</p>
          <p>fra mandag til fredag kl 8:00 - 16:00 på telefon</p>
        </div>
        <div className="col-md-6">
        <img src={sewingImage} class="img-fluid" alt="Repair services"></img>
        </div>
      </div>
    </div>
  );
}

export default KontaktOss;
