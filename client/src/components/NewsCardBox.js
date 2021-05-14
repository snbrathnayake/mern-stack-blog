import React from 'react';
import { Link } from 'react-router-dom';


// const para = `The 24-year-old enrolled in early 2020, and, after completing the seven-month program, got a job as a business intelligence analyst for a local winery.
// In his new job,Alcazar said he’s using skills he developed at Bay Valley Tech to work with the company’s internal dashboards that show product and demographic data,
// as well as its search engine. His pay also increased: Alcazar said he’s earning over 30 percent more in his new role.`;


// const heading = `How California’s Central Valley plans to become new tech hot spot`

function NewsCardBox(props) {
    const { post } = props;
    return (
        post.published && (
        <div className="card" key={post._id}>
            <div className="card-photo">
                <div className="tags">{post.category}</div>
                <img className="medium" src={post.image_url} alt={post.title} />
            </div>
            <div className="card-body">
                <h1>
                    {post.title.substr(0, 90) + ' ...'}
                </h1>
                <h4>Jeremy Lovell | {post.createdAt.substr(0, 10)}</h4>
                <p>
                    {
                        post.decription.substr(0, 190) + ' ...'
                    }
                </p>
            </div>
            <div className="card-footer">
                <div className="notify">
                    <div className="like-box">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{' '}
                        <span>{post.votes}</span>
                    </div>
                    <div className="comment-box">
                        <i className="fa fa-comments" aria-hidden="true"></i>{' '}
                        <span>5</span>
                    </div>
                </div>

                <div className="more-button">
                    <button className="primary small round">
                        <Link to={`/blog-content/${post._id}`} style={{color:'#fff'}}>Read More</Link>
                    </button>
                </div>
            </div>
        </div>)
    );
}

export default NewsCardBox;