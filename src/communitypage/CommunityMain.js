import Card from "./components/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommunityMain.css'
import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Patch from "./components/Patch";
import ComboBox from "./components/Combobox";

function CommunityMain() {
    let { page } = useParams();
    let [boxSelected, setBoxSelected] = useState('최신순')
    let [List, setList] = useState(JSON.parse(localStorage.getItem('통합데이터')));
    let [data, setData] = useState([]);
    let currentPage = parseInt(page) || 1;
    const [keyword, setKeyword] = useState('');
    let nowpage = useLocation();
    let nowLogin = JSON.parse(localStorage.getItem('로그인현황'))
    let navigate = useNavigate();
    let pages = [];
    for (let i = 1; i <= List.length / 10 + 1; i++) {
        pages.push('page ' + i);
    }
    let active = page;
    let items = [];
    for (let number = 1; number <= pages.length; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={() => {
                navigate('/community/main/' + number)
                window.scrollTo(0,0)
            }}>
                {number}
            </Pagination.Item>
        );
    }
    const handleSearch = () => {
        if (!keyword.trim()) return; // 빈 값 방지
        navigate('/community/main/search/' + keyword + '/1');
        window.scrollTo(0,0)
    };

    useEffect(() => {
        let sortedList = JSON.parse(localStorage.getItem('통합데이터'))
        if (boxSelected == '좋아요순'){
            sortedList.sort((a,b)=> (b.likes || 0) - (a.likes || 0))
        }
        setList(sortedList)
    }, [boxSelected])


    useEffect(() => {
        const startIndex = (currentPage - 1)*10;
        const endIndex = startIndex+10;
        const slicedData = List.slice(startIndex, endIndex);
        setData(slicedData)
    }, [boxSelected, List, currentPage])

    return (
        <div className="body">
            <div class="tabs">
                <button class="tab active" onClick={() => navigate('/community/main/1')}>전체 글</button>
                <button class="tab" onClick={() => navigate('/community/general/1')}>자유게시판</button>
                <button class="tab" onClick={() => navigate('/community/report/1')}>지역 제보</button>
                <button class="tab" onClick={() => navigate('/community/review/1')}>프로젝트 후기</button>
            </div>

            <div>
                <ComboBox selected={boxSelected} onSelect={setBoxSelected} />
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

export default CommunityMain;