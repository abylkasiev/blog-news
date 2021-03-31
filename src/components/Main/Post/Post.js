import React from 'react';

function Post({post}) {
    return (
            <div>
                <img className="newsPicture post-img" src={post.img}/>
                <h3 className="news-heading post-heading">{post.heading}</h3>
                <div className="email post-email">{post.email}</div>
                <p className="news-info-text post-info-text">{post.text}</p>
                <a className="read-more">Подробнее</a>
            </div>
       
    );
}

export default Post;