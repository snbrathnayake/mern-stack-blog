import React from 'react';
import { connect } from 'react-redux';
// import * as actions from 'redux/actions/authAction';

class HomeScreen extends React.Component {

    componentDidMount() {
        // const { token } = this.props.user.userInfo;
    }

    render() {
        return <h1>Welcome</h1>;
    }
}

const mapStateToProps = (state) => {
    // console.log(state.userSignin.userInfo)
    return {
        user: state.userSignin,
    }
}

export default connect(mapStateToProps, null)(HomeScreen);