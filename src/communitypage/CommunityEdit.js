import { useEffect, useState } from 'react';
import './CommunityWrite.css'
import { useNavigate, useParams } from 'react-router';
import Patch from './components/Patch';

function CommunityEdit() {
    let {id} = useParams();
    let accountInfo = JSON.parse(localStorage.getItem('계정정보'))
    let [dataList, setDataList] = useState(JSON.parse(localStorage.getItem('통합데이터')))
    let data = dataList.find((item)=>{
        return item.id == id 
    })
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
                        let newData = {
                            title: title.value,
                            content: content.value,
                            author: data.author,
                            authorId: data.authorId,
                            category: category.value,
                            views: data.view,
                            likes: data.likes,
                            id:id,
                            comment:data.comment,
                            uploadDate: data.uploadDate,
                        }
                        let temp = [...dataList];
                        temp[id-1] = newData
                        setDataList(temp)
                        localStorage.setItem('통합데이터', JSON.stringify(temp))
                        navigate('/community/main/1')
                        window.scrollTo(0,0)
                    }
                }}>

                    <label>카테고리 선택</label>
                    <select id='category' defaultValue={data.category}>
                        <option >자유게시판</option>
                        <option>지역 제보</option>
                        <option>프로젝트 후기</option>
                    </select>

                    <label>제목</label>
                    <input type="text" id='title' defaultValue={data.title}/>

                    <label>내용</label>
                    <textarea defaultValue={data.content} id='content' rows="10"></textarea>

                    <label>이미지 첨부 (선택)</label>
                    <input type="file" />

                    <button className="submit-btn">수정하기</button>
                </form>
            </section>
        </div>
    );
}

export default CommunityEdit;