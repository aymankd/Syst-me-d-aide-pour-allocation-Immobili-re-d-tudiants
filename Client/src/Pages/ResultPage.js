import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar.js"
import Copmitem from './Copmitem';
var body=null;


function ResultPage(props) { 

  window.addEventListener('scroll', (event) =>{
    if(window.pageYOffset>520){
      body.current.classList.add("fixedmap")
    }
    else{
      body.current.classList.remove("fixedmap")
    }
  }) 
  
  const [logements, setlogements]= useState({})

console.log(props.location.state.res.res);


  body=useRef()
  return (
  <div id="res-comp">
      <section id="aa-slider">
          <div className="aa-slider-area">
              <div className="aa-top-slider">
                  <div className="aa-top-slider-single">
                      <div id="img-hero">
                        <div id="msb-res">
                          <SearchBar></SearchBar>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-white half-map">
        
        <div className="container-fluid" >
          <div id="main-res" className="row ">
            <div id="fixed-map" className="col-xl-6 col-lg-5"   ref={body}>
              <div className="half-map-full">
                <br></br>
                <div className="map-canvas h-100vh" >
                   
                </div>
              </div>
            </div>
            <div  id="ditems" className="col-xl-6 col-lg-7" >
              <div id="sort-lst">
                <h1>Logements</h1>
                <h3>Tirer par</h3>
                  <select>
                      <option value="pris">Prix</option>
                      <option value="superficie">Superficie</option>
                      <option value="distance">Distanve Ecole</option>
                  </select> 
              </div>
              <div className="scrollbar scroll_dark h-100vh">
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
                 <Copmitem></Copmitem>
               </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
export default ResultPage;