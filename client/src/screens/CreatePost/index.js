import React from 'react';
import { connect } from 'react-redux';
import AlertBox from 'components/AlertBox';
import LoadingBox from 'components/LoadingBox';
import * as actions from 'redux/actions/postAction';

const postOptions = [
    {
        name: 'default',
        value: '-- Select --',
    },
    {
        name: 'sport',
        value: 'Sport',
    },
    {
        name: 'business',
        value: 'Business',
    },
    {
        name: 'political',
        value: 'Political',
    },
    {
        name: 'television',
        value: 'Television',
    },
    {
        name: 'movies',
        value: 'Movies',
    },
    {
        name: 'health',
        value: 'Health',
    }
]


class CreatePostScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            decription: '',
            category: '',
            image_url: '',
        }
    }

    componentDidUpdate(prevProps) {

        if(this.props.post && this.props.post.post.status === 201
            ) {
            this.props.history.push('/')
        }
    }

    submitNewPost = (e) => {
        e.preventDefault();
        const { title, decription, category, image_url } = this.state;
        const { userInfo } = this.props.user;
        const { user } = userInfo;

        const post = {
            userId: user._id,
            title,
            decription,
            category,
            image_url,
        }

        this.props.create(post);
    }

    onChangeHander = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { title, decription, category, image_url } = this.state;
        const { loading, error , post } = this.props.post;
        const { message } = post;

        return (
            <div className="container">
                <form className="form form-lg" onSubmit={this.submitNewPost}>
                    <h2>Create New Post</h2>
                    {loading && <LoadingBox />}
                    {error && <AlertBox variant="danger">{error}</AlertBox>}
                    {message && <AlertBox variant="success">{message}</AlertBox>}
                    <div className="input-group">
                        <label htmlFor="title">Heading</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter Headline"
                            value={title}
                            required
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="category">Category</label>
                        <select onChange={this.onChangeHander} value={category} name="category" id="category">
                            {postOptions.map(item => (
                                <option key={item.name} value={item.name}>
                                    {item.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="image_url">Photograph URL</label>
                        <input
                            type="text"
                            name="image_url"
                            id="image_url"
                            placeholder="Enter Photograph URL"
                            value={image_url}
                            required
                            onChange={this.onChangeHander}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="decription">News Description</label>
                        <textarea name="decription" id="decription" cols="30" rows="15" defaultValue={decription}
                         onChange={this.onChangeHander}/>
                    </div>
                    <div className="input-group" style={{ marginTop: '1.75em' }}>
                        <button type="submit" className="btn primary">Create Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.postCreated)
    return {
        user: state.userSignin,
        post: state.postCreated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (post) => dispatch(actions.createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);