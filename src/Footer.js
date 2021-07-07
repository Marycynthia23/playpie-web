import './App.css';
import logo from './images/playpielogo.png';
function footer() {
  return (
    <div className="App">
      <section id="mainFooter">
          <div className="rowContainer">
                <div className="row">
                      {/* Column 1 */}
                    <div className="row">
                    <ul className="list-unstlyed">
                            <img src={logo} alt="illustration" />
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="row">
                        <ul className="list-unstyled">
                          <h4>Company</h4>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="row">
                        <ul className="list-unstyled">
                            <h4>Resources</h4>
                            <li>Terms and Conditions</li>
                            <li>Privacy and Policy</li>
                            <li>FAQs</li>
                        </ul>

                    </div>
                    {/* Column 4 */}
                    <div className="row">
                        <ul className="list-unstyled">
                            <h4>Contact</h4>
                            <li>50 Ebitu Ukiwu Street Jabi,<br/> Abuja,Nigeria.</li>
                            
                        </ul>
                    </div>
                    </div>

                </div>
                <hr />
                <div className="roww">
                  <p className="col-sm-p">DISCLAIMER: Playpie is a technology platform, not a registered broker-dealer or investment adviser.
                     Neither Playpie LTD, nor any of its affiliates provide any investment advice or make any investment 
                     recommendations to any persons, ever, and no communication through this website or in any other medium 
                     should be construed as such. Please note, investing involves risk and investments may lose value leading 
                     to total loss of capital. Past performance does not guarantee future results. By accessing this site and any
                     pages thereof, you agree to be bound by the Terms of Service and Privacy Policy.</p>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Playpie Limited | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>

            </section>

    </div>
  );
}

export default footer;