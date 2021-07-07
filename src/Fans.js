import "./App.css";

function Fans() {
  //   let OpenLink = (link) => {
  //     return window.open(link);
  //   };

  return (
    <div className="App">
      <h2>This is the fans page</h2>
      <button
      //   onClick={()=>OpenLink("https://www.facebook.com")}
      >
        <a href="https://www.facebook.com">Facebook</a>
      </button>
    </div> 
  );
}
export default Fans; 
