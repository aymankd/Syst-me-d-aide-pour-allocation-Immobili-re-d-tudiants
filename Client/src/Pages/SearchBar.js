import React from "react";
import Axious from 'axios';
import { useHistory } from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
    return `${value}°C`;
  }

function SearchBar({props}) {
  let hr = useHistory();
  const supL = React.createRef()
  const supU = React.createRef()
  const prL = React.createRef()
  const prU = React.createRef()

  const searchinp = React.createRef()
  const categoryinp = React.createRef()
  const modeinp = React.createRef()

  const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

  
  const Submit = () => {
    Axious.post('http://localhost:3001/Search', {
        search:searchinp.current.value,
        mode:modeinp.current.value,
        Catg:categoryinp.current.value,
        supL: superf[0],
        supU: superf[1],
        prL: prix[0],
        prU: prix[1]
      }).then((result) => {
       
      hr.push({
        pathname : '/ResultPage',
        state : { res : result.data  }
      })
      })
      
      
    }

    const classes = useStyles();
    const [prix, setprix] = React.useState([1000, 3500]);
    const [superf, setsuper] = React.useState([20, 250]);
  
    const handleprixChange = (event, newValue) => {
        setprix(newValue);
      };
    const handlesuperChange = (event, newValue) => {
        setsuper(newValue);
    };

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
                                    <div className={classes.root}>
                                        <Typography id="range-slider" gutterBottom>
                                            Prix
                                        </Typography>
                                        <Slider
                                            value={prix}
                                            onChange={handleprixChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuetext}
                                            min={0}
                                            max={5000}
                                            step={500}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={classes.root}>
                                        <Typography id="range-slider" gutterBottom>
                                            Superficie
                                        </Typography>
                                        <Slider
                                            value={superf}
                                            onChange={handlesuperChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuetext}
                                            min={0}
                                            max={300}
                                            step={10}
                                        />
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