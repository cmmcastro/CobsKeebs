import NavBarSignInUp from "./NavBar/NavBarSignInUp";
import NavBarHome from "./NavBar/NavBarHome";
import "../App.css";

/* bootstrap icons imports */
import { IconContext } from "react-icons";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";

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
                <div className="potato">
                        <div className="home-container-contents">
                            <div className="home-container-contents-images">
                            <div className="Lubing"><img src="Lubing.jpg" alt="Lubing" width="350" height="350"></img></div>
                            <div className="Case-Foam"><img src="Case Foam.jpg" alt="Case Foam" width="350" height="350"></img></div>
                                
                                
                            <div className="Stabilizer Tuning"><img src="Stabilizer Tuning.jpg" alt="Stabilizer Tuning" width="350" height="350"></img></div>
                            <div className="Tape Mod"><img src="Tape Mod.jpg" alt="Tape Mod" width="350" height="350"></img></div>
                                
                                
                            <div className="PE-Foam"><img src="pe foam.jpg" alt="PE Foam" width="350" height="350"></img></div>
                            <div className="Films"><img src="films.jpg" alt="Films" width="350" height="350"></img></div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;