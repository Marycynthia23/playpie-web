import './App.css';
import headset from './images/headset.jpg';

function Moving() {
  return (
    <div className="App">
      <table id="news">
        <tr className="newsTest">
          <div>
            <h1>Gain alternative income from your fans</h1>
          <p>Showcase and share the value of music industry</p>
          <a href="www.playpie.co" className="newsInText">Sign Up for free</a>
          </div>
          </tr>
        <tr className="newsImg">
          <div>
          <img alt="" src={headset} />
          </div>
          </tr>
          
        </table>
    </div>
  );
}

export default Moving;