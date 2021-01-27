import  { useEffect, useState } from "react";
import { motion } from "framer-motion"

import {NavigationAnimation} from "components/lib/Motion/NavigationAnimation";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <nav className='navigation_main'>
                <div className="container">
                    <div className="logo"/>
                    <div className="hamburger_container">
                        <div className="nav_links">
                            <motion.ul  
                            initial="display:none"
                            animate={isOpen ? NavigationAnimation.show : NavigationAnimation.hidden}
                            variants={NavigationAnimation}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="nav_links_container f-size-p4 f-weight-l">
                                <li className="nav_items">
                                    <a href="#">მთვარი</a>
                                </li>
                                <li className="nav_items">
                                    <a href="#">ჩვენს შესახებ</a>
                                </li>
                                <li className="nav_items">
                                    <a href="#">ოფისები</a>
                                </li>
                                <li className="nav_items">
                                    <a href="#">სერვისები</a>
                                </li>
                                <li className="nav_items">
                                    <a href="#">სიახლეები</a>
                                </li>
                                <li className="nav_items">
                                    <a href="#">კონტაქტი</a>
                                </li>
                            </motion.ul>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="hamburger"></div>
                    </div>

                </div>
            </nav>




            <style jsx>{`
                .navigation_main{
                    width: 100%;
                    position: fixed;
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                }

                .navigation_main .container {
                    width:100%;
                    padding:var(--primary-padding);
                    height: calc(2vw + 12.5rem);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    
                }


                .logo {
                    width: calc(15rem + 10vw); 
                    padding:4rem;
                    background-image: url('/svg/logo.svg');
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    cursor:pointer;
                }
                
                .hamburger {
                    width: calc(3.8rem + 1.7vw); 
                    padding:2rem;
                    background-image: url('/svg/humburger.svg');
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    cursor:pointer;
                }

                .hamburger_container {
                    height: 100%;
                    display:flex;
                    justify-content:space-beetween;
                    align-items:center;
                }
                
                .nav_items {
                    margin-right: calc(1rem + 1.5vw) !important;
                }

                a {
                    text-decoration:none;
                    color:var(--primary-black);
                }    
                a:hover {
                    color:#353535;
                } 

            
            `}</style>
        </>
    )
}

export default Navigation
