import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions/profileAction';

class ProfileScreen extends React.Component {

    componentDidMount() {
        const { pathname } = this.props.history.location;
        this.props.getProfile(pathname.split('/')[2])
    }

    editProfile = (data) => (e) => {
        console.log(data)
        alert('editProfile')
    }

    render() {
        const { me } = this.props;
        const { profile } = me;
        const { role, email, name, username, createdAt } = profile;

        return (
            <div className="container">
                <div className="row top">
                    <div className="col-1">
                        <div className="profile-photo">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-2">
                        {me ? (
                            <div className="profile-content">
                                <div className="profile-item profile-name">
                                    <span>name </span>{name}
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"
                                        onClick={this.editProfile('name')}></i>
                                </div>
                                <div className="profile-item profile-email">
                                    <span>Email </span>{email}
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"
                                        onClick={this.editProfile('email')}></i>
                                </div>
                                <div className="profile-item profile-role">
                                    <span>privilege  </span> {role === 100 ? 'Super Privilege' : 'Limited Privilege'}
                                </div>
                                <div className="profile-item profile-un">
                                    <span>username  </span>{username}
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"
                                        onClick={this.editProfile('username')} ></i>
                                </div>
                                <div className="profile-item profile-createdAt">
                                    <span>registed date  </span>
                                    {createdAt ? createdAt.substr(0, 10) : ''}</div>
                            </div>
                        ) : ('no data')}
                    </div>
                </div>
                <div className="row"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        me: state.userProfile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (username) => dispatch(actions.profile(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);