<label htmlFor="material-switch">
            <span >Light{' '}</span>
            <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#EE2E7C"
            onHandleColor="#FFFF"
            offColor='#757575'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            className="HeaderToggle"
            id="material-switch"
                />
            <span>Dark{' '}</span>

            </label>


<img className="headerMenuIcon" src={menu}  alt='mnuicon'/>






<button  className="btnclicktoid">
     
    
<h5 className="cityName">{cityName}</h5>
      <div className="weathericoncard" >{switchCode(weathericon)}</div>
      <div className="tempo" >
      <h3 className="maintempcard" >{temp}</h3>
      <p className='weathercarddescription'>{weatherDescription}</p></div>
      <div className="maxtempdiv" >
        <img src={max} alt="maxicon" />
        <h5 className="maxtempcard" >{maxtemp}</h5>
        <p className='maxpred'>Max</p>
      </div>
      <div className="mintempdiv"  >
      <img src={min} alt="minicon"/>
        <h5 className="mintempcard">{mintemp}</h5>
        <p className='minpgreen' >Min</p>

      </div>

 </button>









<Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
      RICK
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      ROCKS
    </BackSide>
  </Flippy>






background-image: linear-gradient(to top, #355c7d, #58618d, #7e6494, #a36790, #c06c84);  margin-top: 60px;






display: grid;
  grid-template-columns: repeat(2,15rem);
  grid-gap: 1.5rem;
  grid-auto-flow: column;

  background: red;







  <Flippy 
  flipOnHover={true} 
  flipOnClick={false} 
  flipDirection="horizontal"
  >


  <FrontSide style={{ width: '300px', height: '500px',position:'center'
  ,
  background: "linear-gradient(to top, #355c7d, #58618d, #7e6494, #a36790, #c06c84)",  borderRadius: '15px',

}}   >

    <div className="frontsidecarddiv">
    <Jump count={3} spy={() =>
            this.setState({
              hoveranim: !this.state.hoveranim
            })}>
      <h3 className="citynamefrontsidecard">{cityName}</h3>
      </Jump>
      <p className="frontcardptag">Hover to see Todays Weather in {cityName}</p>
    </div>
  </FrontSide>
  <div>
  <BackSide
   style={{ width: '300px', height: '500px',position:'center'
   ,
   background: "linear-gradient(to top, #355c7d, #58618d, #7e6494, #a36790, #c06c84)",  borderRadius: '15px',

 }}    >
    
    <h5 className="cityName">{cityName}</h5>
    <div className="weathericoncard" >{switchCode(weathericon)}</div>
    <div className="tempo" >
    <h3 className="maintempcard" >{temp}</h3>
    <p className='weathercarddescription'>{weatherDescription}</p></div>
    <div className="maxtempdiv" >
      <img src={max} alt="maxicon" />
      <h5 className="maxtempcard" >{maxtemp}</h5>
      <p className='maxpred'>Max</p>
    </div>
    <div className="mintempdiv"  >
    <img src={min} alt="minicon"/>
      <h5 className="mintempcard">{mintemp}</h5>
      <p className='minpgreen' >Min</p>

    </div>
    
  </BackSide>
  </div>


 
  

</Flippy>



background-image: linear-gradient(to bottom, #247ba0, #298da8, #3b9fad, #54b0b1, #70c1b3);  grid-area: f;

{classnames({"weatherlist":this.props.changeStyle}) }


let cityName = weather.city.name;
    let cityID = weather.city.id;
    let temp= weather.list[0].main.temp.toFixed();
    let maxtemp = weather.list[0].main.temp_max.toFixed();
    let mintemp = weather.list[0].main.temp_min.toFixed();
    let weathericon = weather.list[0].weather[0].id;
    let weatherDescription = weather.list[0].weather[0].description;
    if (this.props.changeStyle || this.props.changeStyle || this.props.changeStyle.length === 0) {
      return <h3>hello</h3>
   }else{
      return <h1>fuck</h1>
   }
 return(
   <div>
     <Link to={`/weather/${weather.city.id}`}>
     <button className="btnclicktoid">
     <h5 className="cityName">{weather.city.name}</h5>
      <div className="weathericoncard" >{switchCode(weather.list[0].weather[0].id)}</div>
      <div className="tempo" >
      <h3 className="maintempcard" >{weather.list[0].main.temp.toFixed()}</h3>
      <p className='weathercarddescription'>{weather.list[0].weather[0].description}</p></div>
      <div className="maxtempdiv" >
        <img src={max} alt="maxicon" />
        <h5 className="maxtempcard" >{weather.list[0].main.temp_max.toFixed()}</h5>
        <p className='maxpred'>Max</p>
      </div>
      <div className="mintempdiv"  >
      <img src={min} alt="minicon"/>
        <h5 className="mintempcard">{weather.list[0].main.temp_min.toFixed()}</h5>
        <p className='minpgreen' >Min</p>

      </div>
      
    
    
  
  
   
    
  
  
  </button>
  </Link> 
  
  </div>




<div className="menuicondiv">

<img src={menu} alt="menu"className="menuiconimg"/>
     

   </div>
  

  /////////////////////////////////////////////////////////////
  const {weather} = this.props;
  if(weather){
    return (
      <div>
        {weather.map((weather =>(
          <div>{weather.city.name}</div>
        )))}
      </div>
    )
  }
