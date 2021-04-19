import React from 'react'
import Axious from 'axios'
export default class SearchBar extends React.Component{
  constructor (props){
    super(props);
    this.items = [
      'Rabat',
      'Salé',
      'Kenitra',
      'Ecole superieure de technologie salé',
      'Ecole National de commerce',
      'Faculte des scienses rabat',
    ];
    this.state = {
      //first time the component created empty sugestions
      suggestions: [],
      text:'',
      mode:'all',
      cat:'all'
    };
    this.supL = React.createRef()
    this.supU = React.createRef()
    this.prL = React.createRef()
    this.prU = React.createRef()
  }



  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0){
      const regx = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regx.test(v));
    }
    this.setState(() => ({
      ...this.state,
      suggestions,
      text:value
      }));
  }
  onModChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      ...this.state,
      mode:value,
      }));
  }
  onCatChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      ...this.state,
      cat:value,
      }));
  }
  Submit = (e) => {
  Axious.post('http://localhost:3001/Search', {
      search:this.state.text,
      mode:this.state.mode,
      Catg:this.state.cat,
      supL: parseInt(this.supL.current.innerHTML),
      supU: parseInt(this.supU.current.innerHTML),
      prL: parseInt(this.prL.current.innerHTML),
      prU: parseInt(this.prU.current.innerHTML)
    }).then((result) => {
      console.log(result.data)
    })
  }


  //Function on suggestion selected:
  suggestionSelected(value){
     this.setState(() => ({
       ...this.state,
       text: value,
       suggestions: [],
     }))
  }

 
  renderSuggestions (){
    const {suggestions} = this.state;
    //if the suggestions are empty return null:
    if(suggestions.length === 0){
      return null;
    }
    //if not return render suggestions
    return (
      <ul>
        {suggestions.map((item, index) => <li key={index} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  render(){
    //extract text value from the state
    const { text } = this.state;

  return (
    <div>
        <section id="aa-advance-search">
            <div className="container">
                <div className="aa-advance-search-area">
                    <div className="form">
                        <div className="aa-advance-search-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="aa-single-advance-search">
                                        <input value={text} onChange={this.onTextChanged} type="text"
                                            placeholder="Type Your Location" />
                                        <ul>
                                            {this.renderSuggestions()}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="aa-single-advance-search">
                                        <select defaultValue="all" onChange={this.onModChange} >
                                            <option value="all">Mode</option>
                                            <option value="Location">Location</option>
                                            <option value="Colocation">Colocation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="aa-single-advance-search">
                                        <select defaultValue="all" onChange={this.onCatChange}>
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
                                        <input onClick={this.Submit} className="aa-search-btn" type="submit" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aa-advance-search-bottom">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>AREA (SQ)</span> <span>FROM</span> <span
                                            id="skip-value-lower" ref={this.supL} className="example-val">0.00</span> <span>TO</span> <span
                                            id="skip-value-upper" ref={this.supU} className="example-val">100.00</span>
                                        <div id="aa-sqrfeet-range"
                                            className="noUi-target noUi-ltr noUi-horizontal noUi-background"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>PRICE ($)</span> <span>FROM</span> <span
                                            id="skip-value-lower2" ref={this.prL} className="example-val">30.00</span> <span>TO</span>
                                        <span id="skip-value-upper2" ref={this.prU} className="example-val">100.00</span>
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

}