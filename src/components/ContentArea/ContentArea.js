import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import FormPage from "./Form/Page";
import MainPage from "./Main/Page";

class ContentArea extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/form" component={FormPage}/>
                </Switch>
            </div>
        )
    }
}

export default ContentArea;