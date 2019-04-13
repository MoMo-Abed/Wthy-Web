import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchCode } from './SecondPage/switch_weather_codes';
import min from '../icons/min.png';
import max from '../icons/max.png';
import classnames from 'classnames';


 class WeatherList extends Component {
  
  render() {
    const {weather} = this.props;
  if(weather){
    
    return (
        <React.Fragment>
           
        {weather.map((weather =>(
         <Link to={`/weather/${weather.city.id}`}>
         
         <button className={classnames({"btnclicktoid":this.props.changeStyle},{"btnclicktoidnew":!this.props.changeStyle}) }>
         <h5 className={classnames({"cityName":this.props.changeStyle},{"cityNamenew":!this.props.changeStyle}) } >{weather.city.name}</h5>
          <div className="weathericoncard" >{switchCode(weather.list[0].weather[0].id)}</div>
          <div className="tempo" >
          <h3 className={classnames({"maintempcard":this.props.changeStyle},{"maintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp.toFixed()}°</h3>
          <p className={classnames({"weathercarddescription":this.props.changeStyle},{"weathercarddescriptionnew":!this.props.changeStyle}) }>{weather.list[0].weather[0].description}</p></div>
          <div className="maxtempdiv" >
            <img src={max} alt="maxicon" />
            <h5 className={classnames({"maxtempcardtext":this.props.changeStyle},{"maxtempcardtextnew":!this.props.changeStyle}) } >{weather.list[0].main.temp_max.toFixed()}</h5>
            <p className='maxpred'>Max</p>
          </div>
          <div className="mintempdiv"  >
          <img src={min} alt="minicon"/>
            <h5 className={classnames({"mintempcard":this.props.changeStyle},{"mintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp_min.toFixed()}</h5>
            <p className='minpgreen' >Min</p>
    
          </div>
          
        
        
      
      
       
        
      
      
      </button>
      </Link> 
      
      
        )))}
      </React.Fragment>

    )
  }
   
    
}}

const mapStateToProps = state => ({
    weather: state.weather.weather,
    changeStyle: state.weather.changeStyle
})


export default connect (mapStateToProps)(WeatherList);