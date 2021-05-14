import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions/postAction';
import AlertBox from 'components/AlertBox';
import LoadingBox from 'components/LoadingBox';

class SinglePostScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const path = this.props.history.location.pathname;
        const id = path.split('/')[2];
        this.props.getPostById(id);
    }

    render() {
        const { loading, post, error } = this.props.singlePost;
        const {
            votes,
            // published,
            // _id,
            // userId,
            title,
            decription,
            category,
            image_url,
            createdAt,
            updatedAt,
        } = post;

        return (
            <div className="container">
                {loading && <LoadingBox />}
                {error && <AlertBox variant="danger">{error}</AlertBox>}
                <div className="single-post">
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                    <img src={image_url} alt={title} />
                    <div className="timestamp">
                        <span><i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Date: {createdAt && createdAt.substr(0, 10)} </span>
                        <span> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Modified: {updatedAt && updatedAt.substr(0, 10)}</span>
                        <span>
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {' '}{votes}
                        </span>
                    </div>
                    <div className="decription">
                        <p>{decription}</p>
                    </div>
                </div>
                <hr />

                <div className="single-post-comments">
                    <div className="sec" style={{ fontStyle: 'italic' }}>
                        <i className="fa fa-quote-right" aria-hidden="true"></i> Comments
                    </div>

                    {/* All the comments */}
                    <ul>
                        <li>
                        <i className="fa fa-comments-o" aria-hidden="true"></i> {' '}

                            The thought process behind non-anonymity is simple, in that anyone who has their identity attached to their comments will be more careful about what they say in a digital forum because it can be traced back to their family and career.
                        </li>
                        <li>
                        <i className="fa fa-comments-o" aria-hidden="true"></i> {' '}
                        With the onset of trolls, maligned comments sections, and unmoderated communities, a quick-fix solution came to light: allow responses only from non-anonymous
                        </li>
                    </ul>

                    {/* Comments Box */}
                    <form onSubmit={() => {}}>
                        <textarea name="comment" id="comment" rows="2"></textarea>
                        <button type="submit" className="">Comment</button>
                    </form>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        singlePost: state.singlePost,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostById: (id) => dispatch(actions.getPostById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostScreen);