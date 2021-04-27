import React from "react";
import SearchBar from "./SearchBar.js"


function ResultPage() {
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
        <div className="container-fluid">
          <div id="main-res" className="row ">
            <div id="fixed-map" className="col-xl-6 col-lg-5">
              <div className="half-map-full">
                <div className="map-canvas h-100vh">
                   
                </div>
              </div>
            </div>
            <div  id="ditems" className="col-xl-6 col-lg-7">
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
                <div className="listing-item listing-list mt-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/01.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-coffee-cup"></i> Cafe</a>
                          <a className="popup popup-single" href="images/listing/grid/01.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">Espresso macchiato</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.2</span> 12 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +666 658 447</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/01.png"/>
                            <p className="mb-0">So how do we get clarity? Simply by asking ourselves lots of questions: What do I really want? What does success look like</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> Piper Drive Zion</a>
                          <span className="listing-open">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list mt-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/02.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-megaphone"></i> Nightlife</a>
                          <a className="popup popup-single" href="images/listing/grid/02.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">Fantastic Fridaze</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.6</span> 10 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +444 656 326</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/02.png"/>
                            <p className="mb-0">Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor.</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> 472 Carpenter Rd</a>
                          <span className="listing-open">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list mt-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/03.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-guitar"></i> Sound & music</a>
                          <a className="popup popup-single" href="images/listing/grid/03.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">Bike Tours Hollywood</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.1</span> 06 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +888 235 956</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/03.png"/>
                            <p className="mb-0">Once you have a clear understanding of what you want, it is critical that you engage in goal setting – specifically setting.</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> Lincolnton, NC 28092</a>
                          <span className="listing-close">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list mt-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/04.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-customer"></i> Art & Museums</a>
                          <a className="popup popup-single" href="images/listing/grid/04.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">The Vatican Museums</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.9</span> 03 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +222 356 457</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/04.png"/>
                            <p className="mb-0">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet.</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> West Division Street</a>
                          <span className="listing-close">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list mt-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/05.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-wine"></i> Nightclub</a>
                          <a className="popup popup-single" href="images/listing/grid/05.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">Liberty Club</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.6</span> 15 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +333 659 856</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/05.png"/>
                            <p className="mb-0">So, how can we stay on course with all the distractions in our lives? Willpower is a good start, but it’s very difficult.</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> Fort Wayne, IN 46804</a>
                          <span className="listing-open">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list mt-4 mb-4">
                  <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                      <div className="listing-image bg-overlay-half-bottom">
                        <img className="img-fluid" src="images/listing/grid/06.jpg"/>
                        <div className="listing-quick-box">
                          <a className="category" href="#"> <i className="flaticon-food-serving"></i> Restaurant</a>
                          <a className="popup popup-single" href="images/listing/grid/06.jpg" data-toggle="tooltip" data-placement="top" title="Zoom"> <i className="fas fa-search-plus"></i> </a>
                          <a className="like" href="#" data-toggle="tooltip" data-placement="top" title="Like"> <i className="far fa-heart"></i> </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                      <div className="listing-details h-100">
                        <div className="listing-details-inner">
                          <div className="listing-title">
                            <h6><a href="#">Honey Restaurant</a></h6>
                            <span className="listing-price">$$$</span>
                          </div>
                          <div className="listing-rating-call">
                            <a className="listing-rating" href="#"><span>4.2</span> 08 Rating</a>
                            <a className="listing-call" href="#"><i className="fas fa-phone-volume"></i> +999 784 578</a>
                          </div>
                          <div className="listing-info">
                            <img className="img-fluid" src="images/listing-brand/06.png"/>
                            <p className="mb-0">The best way is to develop and follow a plan. Start with your goals in mind and then work backward to develop the plan.</p>
                          </div>
                        </div>
                        <div className="listing-bottom">
                          <a className="listing-loaction" href="#"> <i className="fas fa-map-marker-alt"></i> 442 Glenholme Street</a>
                          <span className="listing-open">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
export default ResultPage;