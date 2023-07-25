import "./Name.css";

function Name() {
    return (
        <div className="name-logo-container">
            <img src="logo.jpg" alt="cobs-keebs-logo" width="75px" height="75px" className="logo" />
            <div className="name-container">
                <div className="cobs-keebs">
                    <h1>Cobs Keebs</h1>
                </div>
                <div className="subtitle">
                    <p>Mechanical Keyboard Building and Modding Service</p>
                </div>
            </div>
        </div>
    )
}

export default Name;