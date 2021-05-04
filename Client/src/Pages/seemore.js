import React from "react";

function seemore(props) {
console.log(props);
  return (
<div>


 



  <section id="aa-property-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-property-header-inner">
            <h2>Properties Details</h2>
            <ol className="breadcrumb">
            <li><a href="#">HOME</a></li>            
            <li className="active">APPARTMENT TITLE</li>
          </ol>
          </div>
        </div>
      </div>
    </div>
  </section> 

  <section id="aa-properties">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="aa-properties-content"> 

            <div className="aa-properties-details">
             <div className="aa-properties-details-img">
               <img src="img/slider/1.jpg" alt="img"/>
               <img src="img/slider/2.jpg" alt="img"/>
               <img src="img/slider/3.jpg" alt="img"/>
             </div>
             <div className="aa-properties-info">
               <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, alias!</h2>
               <span className="aa-price">$65000</span>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus veniam non voluptate, ipsa eius magni aliquid ratione sit, odio reprehenderit in quis repudiandae dolor.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur, veritatis, ducimus in aliquam magnam voluptatibus ullam libero fugiat temporibus at, aliquid explicabo placeat eligendi, assumenda magni saepe eius consequuntur.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dicta aliquid, autem, cum, impedit nostrum, rem molestias quisquam ab iure enim totam? Itaque esse ut adipisci officiis nulla repellendus ratione dolore, iste ex doloribus tenetur eos provident quam quasi maxime.</p>
               <h4>Propery Features</h4>
               <ul>
                 <li>4 Bedroom</li>
                 <li>3 Baths</li>
                 <li>Kitchen</li>
                 <li>Air Condition</li>
                 <li>Belcony</li>
                 <li>Gym</li>
                 <li>Garden</li>
                 <li>CCTV</li>
                 <li>Children Play Ground</li>
                 <li>Comunity Center</li>
                 <li>Security System</li>
               </ul>
               <h4>Property Video</h4>
               <iframe width="100%" height="480" src="https://www.youtube.com/embed/CegXQps0In4" frameborder="0" allowfullscreen></iframe>
               <h4>Property Map</h4>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6851.201919469417!2d-86.11773906635584!3d33.47324776828677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888bdb60cc49c571%3A0x40451ca6baf275c7!2s36008+AL-77%2C+Talladega%2C+AL+35160%2C+USA!5e0!3m2!1sbn!2sbd!4v1460452919256" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
             </div>

             <div className="aa-properties-social">
               <ul>
                 <li>Share</li>
                 <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                 <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                 <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                 <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
               </ul>
             </div>

             <div className="aa-nearby-properties">
               <div className="aa-title">
                 <h2>Nearby Properties</h2>
                 <span></span>
               </div>
               <div className="aa-nearby-properties-area">
                 <div className="row">
                   <div className="col-md-6">
                     <article className="aa-properties-item">
                        <a className="aa-properties-item-img" href="#">
                          <img alt="img" src="img/item/1.jpg"/>
                        </a>
                        <div className="aa-tag for-sale">
                          For Sale
                        </div>
                        <div className="aa-properties-item-content">
                          <div className="aa-properties-info">
                            <span>5 Rooms</span>
                            <span>2 Beds</span>
                            <span>3 Baths</span>
                            <span>1100 SQ FT</span>
                          </div>
                          <div className="aa-properties-about">
                            <h3><a href="#">Appartment Title</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                          </div>
                          <div className="aa-properties-detial">
                            <span className="aa-price">
                              $35000
                            </span>
                            <a className="aa-secondary-btn" href="#">View Details</a>
                          </div>
                        </div>
                      </article>
                   </div>
                   <div className="col-md-6">
                     <article className="aa-properties-item">
                      <a className="aa-properties-item-img" href="#">
                        <img alt="img" src="img/item/2.jpg"/>
                      </a>
                      <div className="aa-tag for-sale">
                        For Sale
                      </div>
                      <div className="aa-properties-item-content">
                        <div className="aa-properties-info">
                          <span>5 Rooms</span>
                          <span>2 Beds</span>
                          <span>3 Baths</span>
                          <span>1100 SQ FT</span>
                        </div>
                        <div className="aa-properties-about">
                          <h3><a href="#">Appartment Title</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                        </div>
                        <div className="aa-properties-detial">
                          <span className="aa-price">
                            $35000
                          </span>
                          <a className="aa-secondary-btn" href="#">View Details</a>
                        </div>
                      </div>
                    </article>
                   </div>
                 </div>
               </div>

             </div>

            </div>           
          </div>
        </div>

        <div className="col-md-4">
          <aside className="aa-properties-sidebar">

            <div className="aa-properties-single-sidebar">
              <h3>Informations - Candidature</h3>
              <form action="">
              <ul>
                <li>
                <i class="glyphicon glyphicon-user"></i>
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Nom"/>
                  </div>
               
                </li>
                    <li>
                    <i class="glyphicon glyphicon-user"></i>
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Prénom"/>
                </div>
                </li>
                    <li>
                    <i class="glyphicon glyphicon-earphone"></i>
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Telephone"/>
                </div>
                </li>
                    <li> 
                      <i class="glyphicon glyphicon-envelope"></i>
                <div className="aa-single-advance-search">
                  <input type="text" placeholder="Email"/>
                </div>
                </li>
                    <li>
                    <i class="glyphicon glyphicon-time"></i>
                <div className="aa-single-advance-search">
                      <select defaultValue="all">
                        <option value="all" disable selected hidden>Periode</option>
                        <option value="3mois">3 mois</option>
                        <option value="6mois">6 mois </option>
                        <option value="8mois">
                          8 mois
                        </option>
                        <option value="1an">1 an</option>
                      </select>
                    </div>
                    </li>
                    <li>
                      
      
                <div className="aa-single-advance-search">
                  <input type="submit" value="Déposer mon dossier" className="aa-search-btn"/>
                </div>
                </li>
                </ul>
              </form>
            </div> 

            <div className="aa-properties-single-sidebar">
              <h3>Populer Properties</h3>
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href="#">This is Title</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                  <span>$65000</span>
                </div>              
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href="#">This is Title</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                  <span>$65000</span>
                </div>              
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href="#">This is Title</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                  <span>$65000</span>
                </div>              
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>

  <footer id="aa-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="aa-footer-area">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aa-footer-left">
               <p>Designed by <a rel="nofollow" href="http://www.markups.io/">MarkUps.io</a></p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aa-footer-middle">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="aa-footer-right">
                <a href="#">Home</a>
                <a href="#">Support</a>
                <a href="#">License</a>
                <a href="#">FAQ</a>
                <a href="#">Privacy & Term</a>
              </div>
            </div>            
          </div>
        </div>
      </div>
      </div>
    </div>
  </footer>
  
     
    </div> 


  )
}
    export default seemore;