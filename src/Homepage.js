import React from 'react';
import Header from './Header';
import Moving from './Moving';
import Whychooseplaypie from './whychooseplaypie';
import News from './News';
import Footer from './Footer';
import signup from './images/Signupicon.png';
import deposit from './images/depositwallet.png';
import discover from './images/discovericonrbg.png';
import mix from './images/music.png';
import agent from './images/callagent3 (1).png';
import mockup from "./images/iphonex.png";
import picture from "./images/iphone.png";
import pexels from './images/pexels1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="heroSection">
        <div className="hero">
          <div className="lftHero">
            <h1>
              The New Music <br /> Economy
            </h1>
            <p>
              Playpie is a token exchange that allows artists to  derive
              more benefits from the music they create,
              while empowering music fans to earn.
            </p>
            <br />
            <a href="www.playpie.co" className="btn">
              Get Started
            </a>
          </div>
          <div className="rytHero">
            <img  src={mockup} alt="" />
          </div>
          <div className="rytMockup">
            <img src={picture} alt=""/>
          </div>
        </div>
      </section>
      
      <section>
        <div classname="howItWorks">
            <h2>How It Works</h2>
            <div className="circle">
              <div className="circleDiv">
              <div className="circleOne">
                <img alt="illustration" src={signup} />
              </div>
              <div className="text">
              <h4>SignUp</h4>
              <p>Simple signup and verification process gets you in no time.</p>
              </div>
              </div>
              <div className="mixLine"><img alt="illustration" src={mix} /></div>
              <div>
              <div className="circleDiv">
              <div className="circleTwo">
              <img alt="illustration" src={deposit} />
              </div>
              <div className="text">
              <h4>Deposit</h4>
              <p>Choose your preferred payment method to add money to your Playpie wallet.</p>
              </div>
              </div>
              </div>
              <div className="mixLine"><img alt="illustration" src={mix} /></div> 
              <div>
              <div className="circleDiv">
              <div className="circleThree">
              <img alt="illustration" src={discover} /> 
              </div>
              <div className="text">
              <h4>Discover</h4>
              <p>Now you can explore,buy sell and exchange pies of your favourite musician.</p>
              </div>
              </div>
            </div>
            </div>
        </div>
        </section>
        <table id="about">
          <tr className="row1">
          <div>
            <h3>Playpie <span>Lifestyle</span></h3>
          <p>Showcase the value of music industry to give music lovers the avenue to earn by investing in what they are passionate about,the music.</p>
          <br/>
          <br/>
          <a href="***"className="learnMore">Learn More</a>
          </div>
          </tr>
          <tr className="row2"> 
          <div>
          <img alt="illustration" src={pexels} />
          <div className="centered">
            <div>Artists</div>
            <div>Fan-vestors</div>
          </div>
          
          </div>
          </tr>
        </table>
      <Moving />
      <Whychooseplaypie />
      <News />
      <section id="faq">
          <div className="faqText">
            <h1>Do you still have questions? </h1>
            <p>Take a look at our <span><a href="/faqs">FAQs</a></span> page for answers to all your 
            questions regarding our product and services. For further assistance, kindly reach out
            to us for inquires. Call us on: <span>08161642234</span> or email: <span><a href="www.gmail.com">info@playie.co</a></span></p>
          </div>
          <div><img alt="illustration" src={agent}/></div>

        </section>
      <Footer/>
    </div>
  );
}

export default App;
