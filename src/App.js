import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hjemmeside from './components/Hjemmeside';
import Tjeneste from './components/Tjeneste';
import Prisliste from './components/Prisliste';
import OmOss from './components/OmOss';
import KontaktOss from './components/KontaktOss';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mai's Repair</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-between">
              <li className="nav-item">
                <Link className="nav-link" to="/tjeneste">Tjeneste</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prisliste">Prisliste</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/om-oss">Om oss</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontakt-oss">Kontakt oss</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Hjemmeside />} />
        <Route path="/tjeneste" element={<Tjeneste />} />
        <Route path="/prisliste" element={<Prisliste />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt-oss" element={<KontaktOss />} />
      </Routes>
    </Router>
  );
}

export default App;
