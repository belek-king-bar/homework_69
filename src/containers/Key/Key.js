import React, {Component} from "react";
import './Key.css';
import {connect} from 'react-redux'
import Screen from '../../components/Screen/Screen';
import Buttons from '../../components/Buttons/Buttons'

class Key extends Component {
  render() {
      const {check, success, enterNumber, spliceNumber, enterCheck} = this.props;
      console.log(check);
      return (
            <div className="card Key mx-auto mt-3 bg-dark" style={{width: 250}}>
                <Screen check={check.replace(/\d/g, "* ")} success={success}/>
                <Buttons value={enterNumber} splice={spliceNumber} enter={enterCheck}/>
            </div>
        );
    }
}


const mapStateToProps = state => {
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
