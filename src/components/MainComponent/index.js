import React from 'react'
import './styles.css'
import '../../global.css'

import Register from '../RegisterComponent';
import Login from '../LoginComponent';
import Tabs from '../TabsComponent';
import TabContent from '../TabContentComponent';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';
import Background from '../BackgroundComponent';

function Main() {
    return (
        <>
            <Header login={false}/>
            <Background>
                <div className="form-content">
                    <section>
                        <Tabs>
                            <TabContent label="Login" className="tab-content">
                                <div id="login-form">
                                    <Login/>  
                                </div>
                            </TabContent>
                            <TabContent label="Registro" className="tab-content">
                                <div id="register-form">
                                    <Register/>  
                                </div>
                            </TabContent>
                        </Tabs>
                    </section>
                </div>   
                <div className="info">
                    <h3>
                        Um Titulo
                    </h3>
                    <p>
                        Xabalabala deregui jhonson skibidi relampalejendo tinarossauro aligenigena vridu tauba e sei que la e eh isso msm 
                    </p>
                </div>
            </Background>
            <Footer/>
        </>
    );
}

export default Main;
