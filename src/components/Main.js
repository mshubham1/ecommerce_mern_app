import { Component } from 'react';
import AddItem from './AddItem';
import Home from './Home';
import Cart from './Cart';
import Orders from './Order';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/home"> <Home/> </Route>
                    <Route path="/addItems"> <AddItem/> </Route>
                    <Route path="/cart"> <Cart/> </Route>
                    <Route path="/orders">  <Orders/> </Route>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));