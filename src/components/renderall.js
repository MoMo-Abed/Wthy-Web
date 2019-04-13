import React, { Component } from 'react';
import renderweathercard from '../components/SecondPage/renderweathercard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import app from './app';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Renderall extends Component {
  render() {
    return (
       
        <Router>
      <div className="App">
        <div className="container">
        <Header  />
        <div className={classnames({"containertwo":this.props.changeStyle},{"containertwonew":!this.props.changeStyle}) }>

        <Switch>
          <Route exact path='/' component={app} />
          <Route  exact path='/weather/:id' component={renderweathercard} />

         
        </Switch>
        
        </div>



        </div>
      </div>
      </Router>
      
    );
  }
}
const mapStateToProps = state => ({
  changeStyle: state.weather.changeStyle
})

export default connect (mapStateToProps)(Renderall);
