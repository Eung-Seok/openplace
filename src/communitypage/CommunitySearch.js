import Card from "./components/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommunityMain.css'
import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Patch from "./components/Patch";

function CommunitySearch() {
    const [keyword, setKeyword] = useState('');
    let nowpage = useLocation();
    let nowLogin = JSON.parse(localStorage.getItem('로그인현황'))
    let navigate = useNavigate();
    let params = useParams();
    let searchword = params.keyword
    let page = params.page;
    let totalList = [];
    let nowpageArr = nowpage.pathname.split('/');
    let category = nowpageArr[2]
    switch (category) {
        case 'main':
            totalList = JSON.parse(localStorage.getItem('통합데이터'))
            break;
        case 'general':
            totalList = JSON.parse(localStorage.getItem('자유게시판'))
            break;
        case 'report':
            totalList = JSON.parse(localStorage.getItem('지역 제보'))
            break;
        case 'review':
            totalList = JSON.parse(localStorage.getItem('프로젝트 후기'))
            break;
    }
    let List = totalList.filter((item) => {
        return item.title.includes(searchword)
    })
    let pages = [];
    for (let i = 1; i <= List.length / 10 + 1; i++) {
        pages.push('page ' + i);
    }
    let data = [];
    for (let i = (page - 1) * 10; i <= page * 10 - 1; i++) {
        if (List[i] != undefined) {
            data.push(List[i]);
        }
    }
    let active = page;
    let items = [];
    for (let number = 1; number <= pages.length; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={() => {
                navigate('/'+nowpageArr[1]+'/'+nowpageArr[2]+'/'+nowpageArr[3]+'/'+searchword+'/' + number)
                window.scrollTo(0,0)
            }}>
                {number}
            </Pagination.Item>
        );
    }
    const handleSearch = () => {
        if (!keyword.trim()) return; // 빈 값 방지
        navigate('/'+nowpageArr[1]+'/'+nowpageArr[2]+'/'+nowpageArr[3]+'/'+keyword+'/1');
        window.scrollTo(0,0)
    };
    return (
        <div className="body">
            <div class="tabs">
                <button class={"tab " + (category == 'main' ? 'active' : ' ')} onClick={() => navigate('/community/main/1')}>전체 글</button>
                <button class={"tab " + (category == 'general' ? 'active' : ' ')} onClick={() => navigate('/community/general/1')}>자유게시판</button>
                <button class={"tab " + (category == 'report' ? 'active' : ' ')} onClick={() => navigate('/community/report/1')}>지역 제보</button>
                <button class={"tab " + (category == 'review' ? 'active' : ' ')} onClick={() => navigate('/community/review/1')}>프로젝트 후기</button>
            </div>

            <div>
                <Button style={{ float: 'right', clear: 'both', marginBottom: '16px' }} variant="success" onClick={() => {
                    if (nowLogin) {
                        navigate('/community/write')
                        window.scrollTo(0,0)
                    } else {
                        localStorage.setItem('마지막 주소', JSON.stringify(nowpage.pathname))
                        navigate('/login')
                        window.scrollTo(0,0)
                    }
                }}>글쓰기</Button>
            </div>
            <div style={{ clear: 'both' }}>
                {data.map((item, index) => (
                    <Card item={item} />
                ))}
            </div>
            <div className="community-search" style={{ justifyItems: 'center' }}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="검색어를 입력해 주세요"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button className="community-search-button" type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div style={{ justifyItems: 'center' }}>
                <Pagination>{items}</Pagination>
            </div>
        </div >
    );
}

export default CommunitySearch;