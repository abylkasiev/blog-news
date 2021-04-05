import React, { useState } from 'react';
import './Post.css'
import delet from '../../../container/img/garbage.png'


function Post({post, remove, collapse}) {

    return (
            <div className="news-card">
                <img className="newsPicture" src={post.img}/>
                <h3 className="news-heading">{post.heading}</h3>
                <div className="separator"></div>
                <p className={
                    `news-info-text ${post.collapse ? 'show' : 'less'}`
                }>{post.text}</p>
                <div className="email">{post.email}</div>
                <div className="read-delete">
                    <a className="read-more" onClick={collapse}>Подробнее</a>
                    <div className="remove" onClick={remove}><img className="delete" src={delet}/></div>
                </div>
            </div>
    );
}

export default Post;