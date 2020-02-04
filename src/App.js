import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faDumbbell, faInfo, faRunning } from '@fortawesome/free-solid-svg-icons'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Background from './components/BackgroundComponent';

import './global.css'

function App() {
  library.add(fab, faUser, faDumbbell, faInfo, faRunning);

  return (
    <>
      <Header login={false}/>
      <Background/>
      <Footer/>
    </>
  );
}

export default App;
