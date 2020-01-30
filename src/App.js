import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faDumbbell, faInfo, faRunning } from '@fortawesome/free-solid-svg-icons'
import Header from './components/HeaderComponent';
import Login from './components/LoginComponent';

import './global.css'

function App() {
  library.add(fab, faUser, faDumbbell, faInfo, faRunning);

  return (
    <>
      <Header/>
      <Login/>
    </>
  );
}

export default App;
