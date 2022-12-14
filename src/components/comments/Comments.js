import './Comments.css';
import React, { useState } from 'react';

export default function Comments() {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

    return (
        <section className='main-container'>
            {comments.map((text) => (
                <div className='comment-container' >
                    {text}
                </div>
            ))}

            <div className='comment-flexbox'>
                <h3 className='comment-text'>Comment</h3>
                <textarea value={comment} onChange={onChangeHandler}
                    className='input-box' />
                <button onClick={onClickHandler} className='comment-button' >Submit</button>
            </div>
        </section>
    );

}