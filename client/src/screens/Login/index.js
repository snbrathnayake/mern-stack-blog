import AlertBox from 'components/AlertBox';
import LoadingBox from 'components/LoadingBox';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from 'redux/actions/authAction';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidUpdate(prevProps) {
        const redirect = this.props.location.search ?  this.props.location.search.split('=')[1] : '/';
        if(this.props.user.userInfo && this.props.user.userInfo.token) {
            this.props.history.push(redirect)
        }
    }

    submitLogin = (e) => {
        e.preventDefault();
        
        const { email, password } = this.state;
        this.props.signin({ email, password })
    }

    onChangeHander = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state;
        const { loading, error } = this.props.user;
        const redirect = this.props.location.search ?  this.props.location.search.split('=')[1] : '/';

        return (
            <div className="container">

                <form className="form" onSubmit={this.submitLogin}>
                    <h2>Login</h2>
                    {loading && <LoadingBox />}
                    {error && <AlertBox variant="danger">{error}</AlertBox>}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            autoComplete="off"
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            autoComplete="off"
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group" style={{marginTop:'1.75em'}}>
                        <button type="submit" className="btn primary">Login </button>
                    </div>
                    <div className="">
                    <label>
                        New Customer? {' '}
                        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                    </label>
                </div>
                </form>
            </div>
        );
    }
};

const mapStateToProps = (state) => {

    return {
        user: state.userSignin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (cred) => dispatch(actions.signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);