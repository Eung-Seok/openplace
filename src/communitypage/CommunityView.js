import './CommunityView.css'
import { useLocation, useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import Comment from './components/Comment';
import Patch from './components/Patch';
import { useEffect } from 'react';

function CommunityView() {
    let [count, setCount] = useState(0)
    let nowpage = useLocation();
    let navigate = useNavigate();

    let { id } = useParams();
    let [showComment, setShowComment] = useState(true)
    let nowLogin = JSON.parse(localStorage.getItem('로그인현황'))
    let loginInfo = JSON.parse(localStorage.getItem('계정정보'))
    let totalData = JSON.parse(localStorage.getItem('통합데이터'))
    let data = totalData.find((item) => {
        return item.id == id;
    })
    let [modalLike, setModalLike] = useState(false);
    let [comment, setComment] = useState('');
    useEffect(() => Patch, [comment])
    useEffect(() => Patch, [count])

    if (!data) {
        return <div></div>
    }

    return (
        <div className="post-view-container">
            {/* 1. 상단 네비게이션 */}
            <div className="top-nav-bar">
                <span className="nav-link" onClick={() => {
                    if (id != 1) {
                        totalData[Number(id) - 2].views++;
                        localStorage.setItem('통합데이터', JSON.stringify(totalData))
                        navigate('/community/' + (Number(id) - 1))
                        window.scrollTo(0, 0)
                    } else {
                        alert('처음 게시물입니다.')
                    }
                }}>이전글</span>
                <span className="nav-link" onClick={() => {
                    if (id != totalData.length) {
                        totalData[Number(id)].views++;
                        localStorage.setItem('통합데이터', JSON.stringify(totalData))
                        navigate('/community/' + (Number(id) + 1))
                        window.scrollTo(0, 0)
                    }
                    else {
                        alert('마지막 게시물입니다.')
                    }
                }}>다음글</span>
                <span className="nav-link" onClick={() => {
                    navigate('/community/main/1')
                    window.scrollTo(0, 0)
                }}>목록</span>
            </div>

            <div className="main-post-area">
                {/* 2. 게시글 헤더 */}
                <header className="post-header">
                    <div className="post-category-title">
                        <span className="category-tag">[{data.category}]</span>
                        <h1 className="post-title">{data.title}</h1>
                    </div>

                    <div className="post-meta-row">
                        <div className="author-info">
                            <span className="author-name">{data.author}</span>
                        </div>
                        <div className="post-stats">
                            <span className="date-time">{(data.uploadDate)}</span>
                            <span className="views">조회 {data.views}</span>
                        </div>
                    </div>
                </header>

                {/* 3. 게시글 내용 */}
                <div className="view-content">
                    {data.content}
                </div>

                {/* 4. 좋아요/액션 섹션 */}
                <div className="post-actions-section">
                    <div className="reactions">
                        <span className="like-btn" onClick={() => {
                            if (modalLike) {
                                totalData[Number(id) - 1].likes--;
                                localStorage.setItem('통합데이터', JSON.stringify(totalData))
                            } else {
                                totalData[Number(id) - 1].likes++;
                                localStorage.setItem('통합데이터', JSON.stringify(totalData))
                            }
                            setModalLike(!modalLike)
                        }}>{modalLike ? '💗 좋아요' : '🤍 좋아요'}{modalLike ? data.likes : data.likes}</span>
                        <span className="comment-btn" onClick={() => {
                            setShowComment(!showComment)
                        }}>💬 댓글 {Object.keys(totalData[data.id - 1].comment).length}</span>
                    </div>
                    <div className="share-report">
                        <span>공유</span>
                        <span>|</span>
                        <span>신고</span>
                        <span className={((loginInfo.id == data.authorId)|| (loginInfo.level == '관리자') ? ' ': 'community-view-hide')}>
                            <span>|</span>
                            <span onClick={() => {
                                let dataList = JSON.parse(localStorage.getItem('통합데이터'))
                                dataList = dataList.filter((item) => {
                                    return item.id != id
                                })
                                setCount(count + 1);
                                localStorage.setItem('통합데이터', JSON.stringify(dataList))
                                navigate('/community/main/1')
                            }}>삭제</span>
                        </span>
                    </div>
                </div>
            </div> {/* .main-post-area 끝 */}

            <div className={(showComment ? '' : 'community-comment-hide')}>
                <div className='comment'>
                    {data.comment.map((item) => {
                        return <Comment item={item} />
                    })}
                </div>
                {/* 7. 댓글 입력 필드 */}
                <div className="comment-input-area" onClick={() => {
                    if (!nowLogin) {
                        localStorage.setItem('마지막 주소', JSON.stringify(nowpage.pathname))
                        navigate('/login')
                        window.scrollTo(0, 0)
                    }
                }}>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (event.target.content.value.trim() != '') {
                            let today = new Date()
                            let now = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDay() + '. ' + today.getHours() + ':' + today.getMinutes();
                            totalData[Number(id) - 1].comment.push([loginInfo.name, now, comment])
                            setComment('')
                            localStorage.setItem('통합데이터', JSON.stringify(totalData))
                        }
                    }}>
                        <div className="input-header-status">{loginInfo.name}</div>
                        <textarea placeholder={(nowLogin ? "댓글을 남겨보세요" : "댓글을 남기시려면 로그인을 해주세요")} name='content' value={comment} onChange={(event) => {
                            setComment(event.target.value);
                        }}></textarea>
                        <div className={"input-footer " + (nowLogin ? '' : 'input-hide')}>
                            <div></div>
                            <button
                                type="submit"
                                className='comment-submit'
                                style={{ backgroundColor: 'white' }}
                            >
                                등록
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CommunityView;