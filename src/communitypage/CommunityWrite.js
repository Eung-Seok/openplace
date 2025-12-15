import { useEffect, useState } from 'react';
import './CommunityWrite.css'
import { useNavigate } from 'react-router';
import Patch from './components/Patch';

function CommunityWrite() {
    let [dataList, setDataList] = useState(JSON.parse(localStorage.getItem('통합데이터')))
    let navigate = useNavigate();
    useEffect(() => Patch, [dataList])
    return (
        <div>
            <section className="form-container">
                <h1>게시글 작성</h1>

                <form onSubmit={(event) => {
                    let title = document.getElementById('title')
                    let content = document.getElementById('content')
                    let category = document.getElementById('category')
                    let today = new Date()
                    let now = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDay() + '. ' + today.getHours() + ':' + today.getMinutes();
                    event.preventDefault();

                    if (title.value.trim() == '') {

                    } else if (content.value.trim() == '') {

                    } else {
                        dataList.unshift({
                            title: title.value,
                            content: content.value,
                            author: '123',
                            category: category.value,
                            views: 0,
                            likes: 0,
                            comment:[],
                            uploadDate: now,
                        })
                        let temp = [...dataList];
                        setDataList(temp)
                        localStorage.setItem('통합데이터', JSON.stringify(dataList))
                        navigate('/community/main/1')
                    }
                }}>

                    <label>카테고리 선택</label>
                    <select id='category'>
                        <option>자유게시판</option>
                        <option>지역 제보</option>
                        <option>프로젝트 후기</option>
                    </select>

                    <label>제목</label>
                    <input type="text" id='title' placeholder="제목을 입력하세요" />

                    <label>내용</label>
                    <textarea placeholder="내용을 입력하세요" id='content' rows="10"></textarea>

                    <label>이미지 첨부 (선택)</label>
                    <input type="file" />

                    <button className="submit-btn">등록하기</button>
                </form>
            </section>
        </div>
    );
}

export default CommunityWrite;