import logo from './logo.svg';
import './App.css';
import image from "./b.jpg";
import "./style.css";

function App() {
  return (
  <div className={"container"}>
  
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} >

       <h1 className={"title red"}>Fatma Ben Aissa</h1>
      <div className="div1">

        <img src="/a.jpg" className="im1"></img>


        <img src={image} className="im1"></img> 
  
      </div>
    </div>



<video style={{width:"320", height:"240" }} controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>

</div>

  );
}

export default App;
