import React, {Component} from 'react';
import {connect} from "react-redux";
import {OPERATOR_LIST_WAS_LOADED, OPERATOR_WAS_SELECTED} from "../../../constants/actionTypes";
import OperatorList from "./Operator/List";
import agent from "../../../api/agent";

const mapStateToMainPageProps = (state) => ({
    operatorList: state.operator.operatorList,
});

const mapDispatchToMainPageProps = (dispatch) => ({
    onFilterSelect (payload) {
        dispatch({type: OPERATOR_WAS_SELECTED, payload});
    },
    onOperatorsLoaded (payload) {
        dispatch({type: OPERATOR_LIST_WAS_LOADED, payload});
    },
});

class MainPage extends Component {
    componentDidMount() {
        agent.Operator.all()
            .then(res => {
                this.props.onOperatorsLoaded(res.operators)
            });
    }

    render() {
        return <OperatorList list={this.props.operatorList}
                             onItemClick={this.onItemClick}/>
    }

    onItemClick = (e) => {
        if (
            e
            && e.currentTarget
            && e.currentTarget.innerText
        ) {
            this.props.onFilterSelect(e.currentTarget.innerText);
            this.props.history.push(`/form/${e.currentTarget.innerText}`);
        }
    }
}

export default connect(
    mapStateToMainPageProps,
    mapDispatchToMainPageProps,
)(MainPage);