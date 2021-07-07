import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aboutbg from './images/pexels2.jpg';



function About() {
  return (
    <div className="App">
      <Header />
      <div className="about-bg">
        <img src={Aboutbg} alt=""/>
        </div>
        <div className="about-content">
            <h3>Playpie <span>Lifestyle</span></h3>
          <p>Showcase the value of music industry to give music lovers the avenue to earn by investing in what they are passionate about,the music.</p>
          <br/>
          <br/>
          </div>
        
      <Footer />
    </div>
  );
}

export default About;