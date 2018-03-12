import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    CHECK_PHONE_VALID, CHECK_SUM_VALID, POPUP_WAS_CLOSED, POPUP_WAS_OPENED
} from "../../../constants/actionTypes";
import agent from "../../../api/agent";
import './Page.css';

const mapStateToFormPageProps = (state) => ({
    operatorId: state.operator.operatorId,
    isValidForm: state.userActions.isValidForm,
});

const mapDispatchToFormPageProps = (dispatch) => ({
    onPopupOpen(popupTitle,
                popupClose) {
        dispatch({type: POPUP_WAS_OPENED, popupOpen: true, popupTitle, popupClose});
    },
    onPopupClose() {
        dispatch({type: POPUP_WAS_CLOSED, popupOpen: false});
    },
    onPhoneChanged(payload) {
        dispatch({type: CHECK_PHONE_VALID, payload});
    },
    onSumChanged(payload) {
        dispatch({type: CHECK_SUM_VALID, payload});
    },
});

class FormPage extends Component {
    componentDidMount() {
    }

    form = {
        isPhoneValid: false,
        msgPhoneValid: '',
        isSumValid: false,
        msgSumValid: '',
    };

    render() {
        return (
            <form className="form-scope"
                  onSubmit={this.onSubmitPost}>

                <div className="form__operator-label">
                    Current Operator: {this.props.operatorId}
                </div>

                <div className="field-block">
                    <label className="phone-label"
                           htmlFor="phoneInput">
                        Phone:
                    </label>
                    <input className="phone-input"
                           onChange={this.onPhoneChange}
                           type="text"
                           id="phoneInput"/>
                    {!this.form.isPhoneValid
                        ? <div>{this.form.msgPhoneValid}</div>
                        : ''
                    }
                </div>

                <div className="field-block">
                    <label className="phone-label"
                           htmlFor="sumInput">
                        Sum (RUR):
                    </label>
                    <input className="phone-input"
                           onChange={this.onSumChange}
                           type="text"
                           id="sumInput"/>
                    {!this.form.isSumValid
                        ? <div>{this.form.msgSumValid}</div>
                        : ''
                    }
                </div>

                <button disabled={!this.props.isValidForm}
                        className="btn"
                        type="submit">
                    OK
                </button>
                <button className="btn"
                        onClick={this.OnBackClick}>
                    Back
                </button>
            </form>
        )
    }

    onPhoneChange = (e) => {
        const phone = e && e.currentTarget && e.currentTarget.value;
        const phoneRegexp = new RegExp(/^\+7\(\d{3}\)\d{3}\s\d{4}$/, 'g');

        if (phoneRegexp.test(phone)) {
            this.form.isPhoneValid = true;
            this.form.msgPhoneValid = '';
            this.props.onPhoneChanged(true);
        } else {
            this.form.isPhoneValid = false;
            this.form.msgPhoneValid = 'Incorrect phone number, please check (ex.: +7(900)123 1234)';
            this.props.onPhoneChanged(false);
        }

    };

    onSumChange = (e) => {
        const value = e && e.currentTarget && e.currentTarget.value;
        const sumRegexp = new RegExp(/^\d{1,4}$/, 'g');

        if (
            sumRegexp.test(value)
            && (+value <= 1000)
            && (+value >= 1)
        ) {
            this.form.isSumValid = true;
            this.form.msgSumValid = '';
            this.props.onSumChanged(true);
        } else {
            this.form.isSumValid = false;
            this.form.msgSumValid = 'Incorrect sum, please check (ex.: min-1, max-1000)';
            this.props.onSumChanged(false);

        }
    };

    onSubmitPost = async (e) => {
        e && e.preventDefault();

        try {
            const res = await agent.Payment.validate();

            if (res) {
                this.props.onPopupOpen('Success', this.props.onPopupClose);
            } else {
                this.props.onPopupOpen('Error', this.props.onPopupClose);
            }
        } catch (err) {
            this.props.onPopupOpen('Error', this.props.onPopupClose);
        }
    };

    OnBackClick = () => {
        this.props.history.push(`/`);
    };

}

export default connect(
    mapStateToFormPageProps,
    mapDispatchToFormPageProps,
)(FormPage);