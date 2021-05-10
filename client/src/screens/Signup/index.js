import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from 'redux/actions/authAction';
import AlertBox from 'components/AlertBox';
import LoadingBox from 'components/LoadingBox';

class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.regInfo.userInfo && this.props.regInfo.userInfo.user) {
            this.props.history.push('/login')
        }
    }

    submitRegister = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = this.state;
   
        if (password !== confirmPassword) {
            alert('Password and  ConfirmPassword are not matched!')
        } else {
            this.props.signup({ name, email, password })
        }
    }

    onChangeHander = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, email, password, confirmPassword } = this.state;
        const { loading, error, userInfo } = this.props.regInfo;
        const { message } = userInfo;

        const redirect = this.props.location.search ? this.props.location.search.split('=')[1] : '/';

        return (
            <div className="container">
                <form className="form" onSubmit={this.submitRegister}>
                    <h2>Create Account</h2>
                    {loading && <LoadingBox />}
                    {error && <AlertBox variant="danger">{error}</AlertBox>}
                    {message && <AlertBox variant="success">{message}</AlertBox>}
                    <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            value={name}
                            required
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            required
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
                            required
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confpassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Enter Confirm Password"
                            value={confirmPassword}
                            autoComplete="off"
                            required
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group" style={{ marginTop: '1.75em' }}>
                        <button type="submit" className="btn primary">Signup </button>
                    </div>
                    <div className="">
                        <label>
                            Already have an account? {' '}
                            <Link to={`/login?redirect=${redirect}`}>Login</Link>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        regInfo: state.userSignup,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (data) => dispatch(actions.signUp(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);