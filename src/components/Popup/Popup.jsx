import React, {Component} from 'react';
import './Popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1 className="popup__title">{this.props.text}</h1>
                    <button className="btn popup__button"
                            onClick={this.props.closePopup}>Close
                    </button>
                </div>
            </div>
        );
    }
}

export default Popup;