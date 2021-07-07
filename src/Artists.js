import './App.css';
import logo from "./images/playpielogo.png";
import headset from "./images/pexels5.jpg";

function Artists() {
  return (
    <div className="App">
      <div className="artists-container">
        <div className="Artist-form">
            <img src={logo}/>
          <h3>Access Request Form</h3>
          <form>
          {/* <label for="fname">First name</label> */}
    <input type="text" id="fname" name="firstname" placeholder="First name" />
      <br/>
    {/* <label for="lname">Last name</label> */}
    <input type="text" id="lname" name="lastname" placeholder="Last name" />
    <br/>
    {/* <label for="lname">Email</label> */}
    <input type="text" id="email" name="lastname" placeholder="Email" />
    
    {/* <label for="lname">Phone number</label> */}
    <input type="text" id="phone" name="lastname" placeholder="Phone number" />
    <br/>
    {/* <label for="lname">Artist name</label> */}
    <input type="text" id="Artist" name="lastname" placeholder="Artist name" />
    <br/>
    {/* <label for="lname">Apple music link</label> */}
    <input type="text" id="lname" name="lastname" placeholder="Apple music link" />
    <br/>
    {/* <label for="lname">Spotify music link</label> */}
    <input type="text" id="lname" name="lastname" placeholder="Spotify music link" />
    <br/>
    {/* <label for="lname">No. of monthly listeners</label> */}
    <input type="text" id="lname" name="lastname" placeholder="No. of monthly listeners" />
    <br/>
    {/* <label for="lname">Instagram handle</label> */}
    <input type="text" id="lname" name="lastname" placeholder="Instagram handle" />
    <input type="submit" value="Submit"/>
          </form>
  </div>
        <div className="Artist-bg">
          <img src={headset}/>
        </div>
      </div>
    </div>
  );
}

export default Artists;