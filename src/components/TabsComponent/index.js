import React, { useState, useEffect } from 'react';
import './styles.css'

import Tab from '../TabHeader';

function Tabs(props) {
    const [content, setContent] = useState('');
    const [buttons, setButtons] = useState([]);
    const tabItens = props.children;
    const [state, setState] = useState({ activeTab: props.children[0].props.label });
    
    useEffect(() => {
        async function tabButtons() {
            let array = [];

            await tabItens.forEach((child) => {
                if (child.props.label === state.activeTab) setContent(child.props.children);
                array.push(child.props.label);
            })

            setButtons(array);
        }
        
        tabButtons();
    }, []);

    function changeContent(tab) {
        const pos = tabItens.findIndex(child => child.props.label === tab);
        setContent(tabItens[pos]);
    }
    
    async function changeTab(tab) {
        setState({ activeTab: tab });
        changeContent(tab);
    };

    return (
        <div>
            <Tab 
                activeTab={state.activeTab}
                buttons={buttons} 
                changeTab={changeTab}
            />
            <div className="tab-content">{content}</div>
        </div>
    );
}

export default Tabs;
