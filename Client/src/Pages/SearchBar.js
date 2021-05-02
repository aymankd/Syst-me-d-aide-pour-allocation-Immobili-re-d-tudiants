import React from "react";
import Axious from 'axios';
import { useHistory } from "react-router-dom";

function SearchBar({props}) {
  let hr = useHistory();
  const supL = React.createRef()
  const supU = React.createRef()
  const prL = React.createRef()
  const prU = React.createRef()

  const searchinp = React.createRef()
  const categoryinp = React.createRef()
  const modeinp = React.createRef()
  
  const Submit = () => {
    Axious.post('http://localhost:3001/Search', {
        search:searchinp.current.value,
        mode:modeinp.current.value,
        Catg:categoryinp.current.value,
        supL: parseInt(supL.current.innerHTML),
        supU: parseInt(supU.current.innerHTML),
        prL: parseInt(prL.current.innerHTML),
        prU: parseInt(prU.current.innerHTML)
      }).then((result) => {
       
      hr.push({
        pathname : '/ResultPage',
        state : { res : result.data  }
      })
      })
      
      
    }

  return (
    <div className="bg-gray">
      <section id="aa-advance-search">
            <div className="container">
                <div className="aa-advance-search-area">
                    <div className="form">
                        <div className="aa-advance-search-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="aa-single-advance-search">
                                        <input type="text" ref={searchinp}
                                            placeholder="Type Your Location" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="aa-single-advance-search">
                                        <select defaultValue="all" ref={modeinp}>
                                            <option value="all">Mode</option>
                                            <option value="Location">Location</option>
                                            <option value="Colocation">Colocation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="aa-single-advance-search">
                                        <select defaultValue="all" ref={categoryinp}>
                                            <option value="all">Category</option>
                                            <option value="Studio">Studio</option>
                                            <option value="Appartement">Appartement</option>
                                            <option value="Residences">Résidences étudiantes</option>
                                            <option value="Cite">Cité universitaire</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="aa-single-advance-search">
                                        <input className="aa-search-btn" onClick={Submit} type="submit" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aa-advance-search-bottom">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>AREA (SQ)</span> <span>FROM</span> <span
                                            id="skip-value-lower" ref={supL} className="example-val">0.00</span> <span>TO</span> <span
                                            id="skip-value-upper" ref={supU}  className="example-val">100.00</span>
                                        <div id="aa-sqrfeet-range"
                                            className="noUi-target noUi-ltr noUi-horizontal noUi-background"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>PRICE ($)</span> <span>FROM</span> <span
                                            id="skip-value-lower2" ref={prL} className="example-val">30.00</span> <span>TO</span>
                                        <span id="skip-value-upper2" ref={prU} className="example-val">100.00</span>
                                        <div id="aa-price-range"
                                            className="noUi-target noUi-ltr noUi-horizontal noUi-background"></div>
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
export default SearchBar;