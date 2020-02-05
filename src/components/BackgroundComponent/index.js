import React from 'react'
import './styles.css'

import Main from '../MainComponent';

function Background() {
    return (
        <main>
            <div className="background-image">
                <img 
                    className="main-image"
                    src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                    alt=""
                >
                </img>
            </div>
            <Main/>
            <div className="info">
                <h3>
                    Um Titulo
                </h3>
                <p>
                    Xabalabala deregui jhonson skibidi relampalejendo tinarossauro aligenigena vridu tauba e sei que la e eh isso msm 
                </p>
            </div>
        </main>
    ); 
}

export default Background