import React from "react";
import './Card.css'
import { useNavigate } from "react-router";

function Card({ item }) {
    let totalData = JSON.parse(localStorage.getItem('통합데이터'))
    let navigate = useNavigate();
    return (
        <div className="post-card" onClick={() => {
            totalData[item.id - 1].views++;
            localStorage.setItem('통합데이터', JSON.stringify(totalData));
            navigate('/community/' + item.id)
            window.scrollTo(0, 0);
        }}>
            <h3 className="post-title">{item.title}</h3>
            <p className="post-content">{item.content}</p>
            <div className="post-bottom">
                <div>
                    <span className="post-author">작성자: {item.author}</span>
                    <span className="post-author">카테고리: {item.category}</span>
                </div>
                <div>
                    <span className="post-views">{item.uploadDate}</span>
                    <span className="post-views">조회수 {item.views}</span>
                    <span className="post-views">댓글 {Object.keys(totalData[item.id - 1].comment).length}</span>
                    <span className="post-views"><span style={{ color: 'red' }}>❤</span> {item.likes}</span>
                </div>
            </div>
        </div>
    );
}



export default Card;