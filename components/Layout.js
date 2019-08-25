import React from "react";
import Nav from "./Nav";

const Layout = (props) => (
    <div>
        <header>
            <Nav/>
        </header>
        {props.children}
        <style global jsx>{`
            body {
                margin:0;
            }
            
            .bar-margin {
                margin-top: 50px;
            }
            
            @media (min-width: 600px) {
               .container {
                   padding: 0 4em!important;
               }
            }
            
            @media (min-width: 800px) {
                .container {
                    padding: 0 8em!important;
                }
            }
            
            @media (min-width: 1300px) {
                .container {
                    padding: 0 14em!important;
                }
            }
            
            @media (min-width: 1200px) {
                .l-6 {
                    width: 50%!important;
                }
            }
        `}</style>
    </div>
);

export default Layout;
