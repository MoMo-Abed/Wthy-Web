import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchCode } from './SecondPage/switch_weather_codes';
import min from '../icons/min.png';
import max from '../icons/max.png';
import classnames from 'classnames';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


 class WeatherList extends Component {

  RenderCards(){
    const {weather} = this.props;
    let i  = 3;
   
  if(weather){
    if((this.props.weather.length %2) ===0 ){

      return(

        <React.Fragment>
          {weather.map((weather =>(
           <Link to={`/weather/${weather.city.id}`}>
           {console.log(this.props.weather.length)}
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

    }else{

      return(

        <React.Fragment>

          {weather.map((weather =>(

           <Link to={`/weather/${weather.city.id}`}>
           {console.log(this.props.weather.length)}
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
    


  }
    
    
  }
  
  render() {
    
    return (
        
    
<React.Fragment>
             
             <CarouselProvider
             naturalSlideWidth={300}
             naturalSlideHeight={125}
             totalSlides={3}
             touchEnabled={true}
             >    
             <Slider>
  {this.RenderCards()}
  </Slider>
  <div className="backbtncoursel"  >
  <ButtonBack><i class="fas fa-chevron-circle-left"></i></ButtonBack>
  </div>
  <div className="nextbtncoursel" >

        <ButtonNext><i class="fas fa-chevron-circle-right"></i></ButtonNext>
        </div>
          </CarouselProvider>
</React.Fragment>

    )
  }
   
    
}

const mapStateToProps = state => ({
    weather: state.weather.weather,
    changeStyle: state.weather.changeStyle
})


export default connect (mapStateToProps)(WeatherList);