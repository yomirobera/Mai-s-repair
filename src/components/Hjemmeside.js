import React from 'react';
import sewingImage from './sewing.jpg'; // Import the image file
import sewingImage2 from './sewing2.jpg'; // Import the image file

function Hjemmeside() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Mai's Repair</h1>
          <p className="lead">Vi tilbyr førsteklasses reparasjon av klærne dine!</p>
          <p>Vi har deg dekket på alt du trenger</p>
          <p>Kontakt oss i dag for å avtale en tjeneste!</p>
        </div>
        <div className="col-md-6">
          <img src={sewingImage} class="img-fluid" alt="Repair services"></img>
        </div>

        <div className="col-md-6">
          <img src={sewingImage2} class="img-fluid" alt="Repair services"></img>
        </div>

        <div className="col-md-6">
          <p className="lead">Her er bilder fra våre glade og stolte kunder</p>
          <p>Er du vår neste kunde?</p>
        </div>
        
        
      </div>
    </div>
  );
}

export default Hjemmeside;
