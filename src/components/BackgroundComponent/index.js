import React from 'react'
import './styles.css'

function Background(props) {
    const items = props.children || [];
    
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
            {items.map((content, index) => {
                return <div key={index} className="container">{content}</div>
            })}
        </main>
    ); 
}

export default Background