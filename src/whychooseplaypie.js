import './App.css';
import liquidity from './images/liquidity.png';
import security from './images/securepink.jpg';
import kyc from './images/kyc.png';
import simplicity from './images/simplicity.png';

function whychooseplaypie() {
  return (
    <div className="App">
      <section id="wcp">
          <div className="wcpText"><h1>Why Choose Playpie?</h1></div>
          <div className="col">
          <div className="col1">
            <div className="icon"><img alt="" src={simplicity} /></div>
            <h3 >Simplicity</h3>
            <p>People love our easy-to-use product.
            </p>
          </div>
          <div className="col2">
          <div className="icon"><img alt="" src={security} /></div> 
            <h3>Security</h3>
            <p>Your money and personal data is safe. 
            </p>
          </div>
          <div className="col3">
          <div className="icon"><img alt="" src={liquidity} /></div>
            <h3>Liquidity</h3>
            <p>Digital assets offer a format to enable greater 
              liquidity than its previously available.
            </p>
          </div>
          <div className="col4">
          <div className="icon"><img alt="" src={kyc} /></div>
            <h3>Transparency</h3>
            <p>Our platform dramatically cuts the time and complexity
            </p>
          </div>
          </div>
        </section>
    </div>
  );
}

export default whychooseplaypie;