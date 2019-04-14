import React, { Component } from 'react'
import WeatherList from './weather_list';
import SearchForm from './search_form';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class app extends Component {
  render() {
    return (
<React.Fragment>

 
<div className="searchformcontainer" >

        <SearchForm/>
        </div>
        <div className="weatherListContainer" >

          <WeatherList/>
          </div>
          </React.Fragment>

     
 );
    
     }
}
