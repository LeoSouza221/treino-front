import React from 'react'
import './styles.css'

import Register from '../RegisterComponent';
import Login from '../LoginComponent';
import Tabs from '../TabsComponent';
import TabContent from '../TabContentComponent';


function Main() {
    return (
        <div className="form-content">
            <section>
                <Tabs>
                    <TabContent label="Login" className="tab-content">
                        <div id="login-form" className="form-layout">
                            <Login/>  
                        </div>
                    </TabContent>
                    <TabContent label="Registro" className="tab-content">
                        <div id="register-form" className="form-layout">
                            <Register/>  
                        </div>
                    </TabContent>
                </Tabs>
            </section>
        </div>   
    );
}

export default Main;
