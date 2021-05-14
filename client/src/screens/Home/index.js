import NewsCardBox from 'components/NewsCardBox';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions/postAction';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterKey : 'all'
        }
    }

    componentDidMount() {
        this.props.getPosts();
    
    }

    uniqueCategory = () => {
        const { posts } = this.props.postList;
        let uniqueCate = [];

        posts.forEach((c, index) => {
            if (!uniqueCate.includes(c.category)) {
                uniqueCate.push(c.category);
            }
        });
        return uniqueCate;
    }

    filterPost = (key) => (e) => {
        console.log('ddddddddddd',key)
        this.setState({ filterKey : key })
    }

    currentPostArray = () => {
        const { posts } = this.props.postList;
        if(this.state.filterKey !== 'all') {
            const filtered = posts.filter((post, index) => {
                return post.category === this.state.filterKey;
            })

            return filtered;
        } else {

            return posts;
        }
    }

    render() {
        // const { posts } = this.currentPostArray;
        return (
            <div className="container">
                <h1>Read this story with a free account. bloggy.com</h1>
                <div className="row top">
                    <div className="col-2">
                        <div className="post-block">
                            {this.currentPostArray() ? (this.currentPostArray().map(post => (
                                <NewsCardBox key={post._id} post={post} />
                            ))) : (
                                <div>No Post Found</div>
                            )}
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="side-section">
                            <div className="side-box">
                                <h1>Categories</h1>
                                <ul>
                                  
                                    <li onClick={this.filterPost('all')} key='all'>All</li>
                                    {this.uniqueCategory().map(cate => (
                                        <li onClick={this.filterPost(cate)} key={cate}>{cate}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="side-box">
                                <h1>Top Posts</h1>
                                <ul className="top-post-list">
                                    <li>
                                        <h4>Battlegrounds Mobile India Posts New Teaser Showing Sanhok Map From PUBG </h4>
                                        <p>Battlegrounds Mobile India, the upcoming game from PUBG Mobile developer Krafton, </p>
                                    </li>
                                    <li>
                                        <h4>Battlegrounds Mobile India Posts New Teaser Showing Sanhok Map From PUBG </h4>
                                        <p>Battlegrounds Mobile India, the upcoming game from PUBG Mobile developer Krafton, </p>
                                    </li>
                                    <li>
                                        <h4>Battlegrounds Mobile India Posts New Teaser Showing Sanhok Map From PUBG </h4>
                                        <p>Battlegrounds Mobile India, the upcoming game from PUBG Mobile developer Krafton, </p>
                                    </li>
                                    <li>
                                        <h4>Battlegrounds Mobile India Posts New Teaser Showing Sanhok Map From PUBG </h4>
                                        <p>Battlegrounds Mobile India, the upcoming game from PUBG Mobile developer Krafton, </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="side-box">
                                <h1>Instagram</h1>
                                <div className="instagram-grid">
                                    <div className="photo-box">
                                        <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p07jbsw9.jpg" alt="" />
                                    </div>
                                    <div className="photo-box">
                                        <img src="https://images.saymedia-content.com/.image/t_share/MTc4NTU4Mzk3MjU0MjE1NDk2/cool-instagram-names.jpg" alt="" />
                                    </div>
                                    <div className="photo-box">
                                        <img src="https://www.captionstatus.com/wp-content/uploads/2018/02/Attitude-Captions-for-Instagram.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="instagram-grid">
                                    <div className="photo-box">
                                        <img src="https://www.groovypost.com/wp-content/uploads/2018/09/selfie-instagram-iphone-photo-feature.jpg" alt="" />
                                    </div>
                                    <div className="photo-box">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TDrgRp3kzs32x4CyrrMzOhJI-dWMuyti13_WOjogzGwJl6-4MncLb0IeY6lmxM9vw7s&usqp=CAU" alt="" />
                                    </div>
                                    <div className="photo-box">
                                        <img src="data:image/jpeg;base64,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" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        postList: state.postFetched,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(actions.fetchPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);