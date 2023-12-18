import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [clickColor, setClickColor] = useState("yellow")
	
	return ( 
<>
<div className= "stick"></div>
<div className="Contenedor"> 																						
		<div className="traffic-light">
		<div onClick = {() => setClickColor("red")} className={"red "+((clickColor === "red") ? "glow" : "")}></div>
		<div onClick = {() => setClickColor("yellow")} className={"yellow "+((clickColor === "yellow") ? "glow" : "")}></div>
		<div onClick = {() => setClickColor("green")} className={"green "+((clickColor === "green") ? "glow" : "")}></div >
		
		</div >
		</div >
		</>
	);
}

export default Home;
