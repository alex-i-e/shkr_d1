import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import ContentArea from "./ContentArea/ContentArea";

import Popup from "./Popup/Popup";
import {connect} from "react-redux";

const mapStateToAppProps = (state) => ({
    popupOpen: state.popup.popupOpen,
    popupTitle: state.popup.popupTitle,
    popupClose: state.popup.popupClose,
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <ContentArea />
                {this.props.popupOpen ?
                    <Popup
                        text={this.props.popupTitle}
                        closePopup={this.props.popupClose}
                    />
                    : null}
            </div>
        );
    }
}

export default connect(mapStateToAppProps)(App);
