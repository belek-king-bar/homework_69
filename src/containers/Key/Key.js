import React, {Component} from "react";
import './Key.css';
import {connect} from 'react-redux'
import Screen from '../../components/Screen/Screen';
import Buttons from '../../components/Buttons/Buttons'

class Key extends Component {
  render() {
      const {check, success, enterNumber, spliceNumber, enterCheck} = this.props;
      return (
            <div className="Counter">
                <Screen check={check} success={success}/>
                <Buttons value={enterNumber} splice={spliceNumber} enter={enterCheck}/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        check: state.check,
        success: state.success
    }
};

const mapDispatchToProps = dispatch => {
    return {
        enterNumber: (value) => dispatch({type: 'NUMBER', value}),
        spliceNumber: () => dispatch({type: 'SPLICE'}),
        enterCheck: () => dispatch({type: 'ENTER'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Key);
