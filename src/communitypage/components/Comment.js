import './Comment.css'
import { useState } from 'react';

function Comment({ item }) {
    let [modalLike, setModalLike] = useState(false);

    return (
        <div className="comment-item">
            <div className="comment-content">
                <div className="comment-header">
                    <span className="comment-user">
                        {item[0]}
                    </span>
                </div>
                <p className="comment-text">
                    {item[2]}
                </p>
                <div className="comment-actions">
                    <span className="comment-timestamp">
                        {item[1]}
                    </span>
                    <span style={{ padding: '10px' }} className='likeButton' onClick={() => {
                        setModalLike(!modalLike)
                    }}>{modalLike ? '❤' : '🤍'}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;