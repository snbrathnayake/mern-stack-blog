import React from 'react';
import { connect } from 'react-redux';
// import * as actions from 'redux/actions/authAction';

class ProfileScreen extends React.Component {

    componentDidMount() {
        // const { token } = this.props.user.userInfo;
    }

    render() {
        return <h1>ProfileScreen</h1>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userSignin,
    }
}

export default connect(mapStateToProps, null)(ProfileScreen);