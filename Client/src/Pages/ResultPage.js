import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar.js"
import Copmitem from './Copmitem';
import MyMap from './MyMap';
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



  var logements = []

  if(typeof props.location.state !== 'undefined'){
    logements = props.location.state.res.res
  }
  console.log(logements)

  var Markers = [];
  
  logements.forEach(element => {
    Markers.push({ lat: parseFloat(element.latitude_loc), lng: parseFloat(element.longitude_loc) })
  });

  

    
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
                <MyMap markers={Markers}/>   
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

                {logements.map((item, index) => (
                    <Copmitem key={index} data = {item}></Copmitem>
                ))}

               </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
export default ResultPage;