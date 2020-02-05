import React from 'react'
import './styles.css'

function Tabs(props) {
    let buttons = props.buttons;
    let changeTab = props.changeTab;
    let activeTab = props.activeTab;
    
    return(
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button key={button} className={button === activeTab? 'active': ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )

}

export default Tabs;
