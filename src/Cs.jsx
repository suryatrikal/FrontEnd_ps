import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const mystyle={
 
    width: "80%",
    height:"5rem",
   
    textAlign:"center",
    marginTop:"6rem",
    border:"solid 1px black"

}
function myButton(props){
    return(
        
            <div className="col-lg-3 col-md-4 col-sm6">
            <button type="button" className="btn btn-light mx-4 my-8" style={mystyle
            } >Semester {props.semName}</button>
            </div>

    )
}
const sem= ()=>{
    var elements=[];
    for(var i=1;i<=8;i++){
      elements.push(myButton({semName:i}));
}
return elements;
}
function SemPage() {
    return(
    <div style={{ backgroundColor:" #fff5d7"}}>

        <Navbar></Navbar>
        <div className="contaniner-fluid" style={{marginBottom:"5rem"}}>
            <div className="row">
            {
              sem() 
            }
            </div>
        </div>
        <Footer/>
    </div>)
    
}
export default SemPage;