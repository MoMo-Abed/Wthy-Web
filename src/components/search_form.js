import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getweather} from '../Actions/weather_actions';
import plus from '../icons/plus.svg';
import deleteicon from '../icons/deleteicon.svg';
import city from '../icons/city.png';
import usaform from '../icons/usaform.png';
import classnames from 'classnames';

 class SearchForm extends Component {
     constructor(props){
         super(props);
         this.state={
           city: '',
           showSearchForm: false,
           hidecardelements: true,
           removeform: false
        
        }
         this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

     }
     

     onChange(event){
         this.setState({city: event.target.value});

     }
     onSubmit(event){
         event.preventDefault();
         this.props.getweather(this.state.city);
         this.setState({city: ''});
        
         
     }
  render() {
    const {showSearchForm} = this.state;
    const {hidecardelements}=this.state;
    return (
      <div className={classnames({"cardDesign":this.props.changeStyle},{"cardDesignnew":!this.props.changeStyle}) }>
      {showSearchForm? (
          <form className="formdesign" onSubmit={this.onSubmit}>
            <img onClick={()=>this.setState({
          showSearchForm: !this.state.showSearchForm,
          hidecardelements: !this.state.hidecardelements,
          

        })}     className="closetheicon" src={deleteicon} alt="deleteicon"/>
            <img className='usaflag' src={usaform} alt="usaform" width={120} height={60}/>
          <input className="inputshape" type="text"
          value={this.state.city}
          onChange={this.onChange}
          placeholder="Enter Your City"

          
          />
          

             <button className="formbtn"type='click' >See Today Weather</button>
           
         
         </form>
        ):null}
         
          {hidecardelements? (
            <div>
              <h5>ADD CITY</h5>
              <img onClick={()=>this.setState({
               showSearchForm: !this.state.showSearchForm,
               hidecardelements: !this.state.hidecardelements
             })}    className='plusicon' src={plus} alt="plus"/>
     
             <img src={city} alt="city"
             className='cityicon'/>
             </div>
          ):null}
          
          

        
      </div>
    )
  }
}
const mapStateToProps = state => ({
  
  changeStyle: state.weather.changeStyle
})

export default connect (mapStateToProps,{getweather}) (SearchForm);
