import NavBarSignInUp from "./NavBar/NavBarSignInUp";
import NavBarHome from "./NavBar/NavBarHome";
import "../App.css";

/* bootstrap icons imports */
import { IconContext } from "react-icons";
import { BsFillPersonFill, BsFillCartFill, BsFillPlusCircleFill } from "react-icons/bs";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="cart-profile-icons">
                    <IconContext.Provider value={{ size: '35px' }}>
                        <BsFillCartFill />
                        <BsFillPersonFill />
                    </IconContext.Provider>
                </div>
                
                <div className="home-container-contents">
                    <div className="home-container-contents-images">
                        <div className="Lubing"><img src="Lubing.jpg" alt="Lubing" width="330" height="330" />
                            <div className="Lubing-contents">
                                <p>Switch Lubing</p>
                                <div className="Lubing-icons">
                                    <IconContext.Provider value={{ size: '20px', stroke: "black" }}>
                                        <BsFillPlusCircleFill />
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <h4>PHP 8/Switch</h4>
                        </div>
                        <div className="Case-Foam"><img src="Case Foam.jpg" alt="Case Foam" width="330" height="330" />
                            <p>Case Foam</p>
                            <h4>PHP 50</h4>
                        </div>     
                        <div className="Stabilizer-Tuning"><img src="Stabilizer Tuning.jpg" alt="Stabilizer Tuning" width="330" height="330" />
                            <p>Stabilizer Tuning</p>
                            <h4>PHP 50/Stabilizer</h4>
                        </div>
                        <div className="Tape-Mod"><img src="Tape Mod.jpg" alt="Tape Mod" width="330" height="330" />
                            <p>Tape Mod</p>
                            <h4>PHP 10/Layer</h4>
                        </div>     
                        <div className="PE-Foam"><img src="pe foam.jpg" alt="PE Foam" width="330" height="330" />
                            <p>PE Foam Mod</p>
                            <h4>PHP 50</h4>
                        </div>
                        <div className="Films"><img src="films.jpg" alt="Films" width="330" height="330" />
                            <p>Filming</p>
                            <h4>PHP 6/Switch</h4>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;