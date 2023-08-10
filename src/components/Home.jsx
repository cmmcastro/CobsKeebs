import React, { useState } from "react";
import NavBarSignInUp from "./NavBar/NavBarSignInUp";
import NavBarHome from "./NavBar/NavBarHome";
import "../App.css";

/* bootstrap icons imports */
import { IconContext } from "react-icons";
import { BsFillPersonFill, BsFillCartFill, BsFillPlusCircleFill } from "react-icons/bs";

const products = [
    { id: 1, name: "Switch Lubing", price: 8 },
    { id: 2, name: "Case Foam", price: 50 },
    { id: 3, name: "Stabilizer Tuning", price: 50 },
    { id: 4, name: "Tape Mod", price: 50 },
    { id: 5, name: "PE Foam Mod", price: 50 },
    { id: 6, name: "Film", price: 50 },
  ]

function Home() {
    const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const toggleCartVisibility = () => {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  };
  
  const handleAddToCart = (itemName) => {
    const product = products.find((product) => product.name === itemName);
    if (product) {
      const confirmed = window.confirm(`Add "${itemName}" to the cart?`);
      if (confirmed) {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
      }
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const confirmed = window.confirm("Remove this item from the cart?");
    if (confirmed) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== itemId)
      );
    }
  };
  
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;};

    const handleCheckout = () => {
      const confirmed = window.confirm("Proceed to checkout?");
      if (confirmed) {
          alert("Checkout successful!");
      }
    };

    return (
        <>
            <div className="home-container">
                <div className="cart-profile-icons">
                    <IconContext.Provider value={{ size: '35px' }}>
                        <BsFillCartFill onClick={toggleCartVisibility} />
                    </IconContext.Provider>
                </div>
                
                <div className="home-container-contents">
                    <div className="home-container-contents-images">
                        <div className="Lubing"><img src="Lubing.jpg" alt="Lubing" width="330" height="330" />
                            <div className="Lubing-contents">
                                <p>Switch Lubing</p>
                            </div>
                            <p>Done to lubricate the keyboard switches 
                                <br></br>making the keys minimize friction when 
                                <br></br>rubbed against together, making typing 
                                <br></br>much smoother with a more refined sound.</p>
                            <h4 onClick={() => handleAddToCart("Switch Lubing")}>PHP 8/Switch</h4>
                        </div>
                        <div className="Case-Foam"><img src="Case Foam.jpg" alt="Case Foam" width="330" height="330" />
                            <p>Case Foam</p>
                            <p> Makes keyboard sounds deeper and fuller.</p>
                            <h4 onClick={() => handleAddToCart("Case Foam")}>PHP 50</h4>
                        </div>     
                        <div className="Stabilizer-Tuning"><img src="Stabilizer Tuning.jpg" alt="Stabilizer Tuning" width="330" height="330" />
                            <p>Stabilizer Tuning</p>
                            <p>Uses stabs to help the keyboard’s larger 
                                <br></br>keys (Enter Key, Backspace and Spacebar)
                                <br></br>from wobbling when pressed and help bind 
                                <br></br>the keycap to the keyboard switches.</p>
                            <h4 onClick={() => handleAddToCart("Stabilizer Tuning")}>PHP 50/Stabilizer</h4>
                        </div>
                        <div className="Tape-Mod"><img src="Tape Mod.jpg" alt="Tape Mod" width="330" height="330" />
                            <p>Tape Mod</p>
                            <p>Helps the keyboard sound profile deeper 
                                <br></br>and louder by making the sound bounce 
                                <br></br>back instead of absorbing it.</p>
                            <h4 onClick={() => handleAddToCart("Tape Mod")}>PHP 10/Layer</h4>
                        </div>     
                        <div className="PE-Foam"><img src="pe foam.jpg" alt="PE Foam" width="330" height="330" />
                            <p>PE Foam Mod</p>
                            <p>Flattens the sound signature and limits the 
                                <br></br>frequency ranges you hear when typing.</p>
                            <h4 onClick={() => handleAddToCart("PE Foam Mod")}>PHP 50</h4>
                        </div>
                        <div className="Films"><img src="films.jpg" alt="Films" width="330" height="330" />
                            <p>Filming</p>
                            <p>Filming</p>
                            <p>improves the sound of the switches by 
                                <br></br>decreasing the scratchiness and rattle 
                                <br></br>which also improves the feel making it have 
                                <br></br>a therapeutic process.</p>
                            <h4 onClick={() => handleAddToCart("Film")}>PHP 6/Layer</h4>
                        </div>   
                    </div>
                </div>  
            </div>
            {isCartVisible && (
                <div className="cart-overlay">
                    <div className="cart-items">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                Items added to cart:
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.name} (PHP {item.price})
                                        <button onClick={() => handleRemoveFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                                <p>Total Price: PHP {calculateTotalPrice()}</p>
                                <button onClick={handleCheckout}>Checkout</button>
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;