import React from 'react'

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
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0){
      const regx = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regx.test(v));
    }
    this.setState(() => ({suggestions, text:value}));
  }

  //Function on suggestion selected:
  suggestionSelected(value){
     this.setState(() => ({
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
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
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
                                        <select defaultValue="0">
                                            <option value="0">Mode</option>
                                            <option value="1">Location</option>
                                            <option value="2">Colocation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="aa-single-advance-search">
                                        <select defaultValue="0">
                                            <option value="0">Category</option>
                                            <option value="1">Studio</option>
                                            <option value="2">Appartement</option>
                                            <option value="3">Résidences étudiantes</option>
                                            <option value="4">Cité universitaire</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="aa-single-advance-search">
                                        <input className="aa-search-btn" type="submit" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aa-advance-search-bottom">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>AREA (SQ)</span> <span>FROM</span> <span
                                            id="skip-value-lower" className="example-val">30.00</span> <span>TO</span> <span
                                            id="skip-value-upper" className="example-val">100.00</span>
                                        <div id="aa-sqrfeet-range"
                                            className="noUi-target noUi-ltr noUi-horizontal noUi-background"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="aa-single-filter-search"><span>PRICE ($)</span> <span>FROM</span> <span
                                            id="skip-value-lower2" className="example-val">30.00</span> <span>TO</span>
                                        <span id="skip-value-upper2" className="example-val">100.00</span>
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