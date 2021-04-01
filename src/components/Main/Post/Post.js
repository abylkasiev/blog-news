import React from 'react';
import './Post.css'
function Post({post, remove}) {
    

    return (
            <div className="news-card">
                <img className="newsPicture" src={post.img}/>
                <h3 className="news-heading">{post.heading}</h3>
                <p className="news-info-text">{post.text}</p>
                <div className="email">{post.email}</div>
                <button className="read-more">Подробнее</button>
                <button className="delete" onClick={remove}>Удалить</button>
            </div>
    );
}

export default Post;