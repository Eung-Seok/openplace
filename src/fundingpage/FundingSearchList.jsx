import React, { useState, useEffect } from "react";
import "./Funding.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import FundingBox from "./component/FundingBox.js"
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import ComboBox from "../communitypage/components/Combobox.js";
import ComboBox1 from "../communitypage/components/Combobox1.js";
import Pagination from 'react-bootstrap/Pagination';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";


function FundingList() {
    let params = useParams();
    let funding = params.funding;
    let category = params.category;
    let page = params.page
    let searchword = params.searchword
    let [fundingData, setFundingData] = useState(JSON.parse(localStorage.getItem('펀딩데이터')))
    let [usingData, setUsingData] = useState([])
    let currentPage = parseInt(page) || 1;
    const [keyword, setKeyword] = useState('');
    let [boxSelected, setBoxSelected] = useState('최신순')
    let navigate = useNavigate();
    let nowpage = useLocation();
    let pageArr = (nowpage.pathname.split("/"))
    pageArr.shift()
    pageArr.pop()
    pageArr.pop()
    pageArr.pop()
    pageArr = pageArr.join('/')
    let items = [];
    let pages = [];
    for (let number = 1; number <= fundingData.length / 10 + 1; number++) {
        items.push(
            <Pagination.Item key={number} active={number == page} onClick={() => {
                navigate('/'+pageArr+'/search/'+searchword+'/'+number)
                window.scrollTo(0, 0)
            }}>
                {number}
            </Pagination.Item>
        );
    }

    const handleSearch = () => {
        if (!keyword.trim()) return; // 빈 값 방지
        navigate('/'+pageArr+'/search/' + keyword + '/1');
        window.scrollTo(0,0)
    };

    useEffect(() => {
        let sortedList = JSON.parse(localStorage.getItem('펀딩데이터'))
        sortedList = sortedList.filter((item) => {
            switch (funding) {
                case 'main':
                    return true
                case 'fundraise':
                    {
                        switch (category) {
                            case 'main':
                                return item.rate < 100
                            case 'dailylife':
                                return item.rate < 100 && item.category == '생활'
                            case 'culture':
                                return item.rate < 100 && item.category == '문화'
                            case 'safety':
                                return item.rate < 100 && item.category == '안전'
                            case 'environment':
                                return item.rate < 100 && item.category == '환경'
                            case 'sports':
                                return item.rate < 100 && item.category == '체육'
                            case 'traffic':
                                return item.rate < 100 && item.category == '교통'
                        }
                    }
                case 'process':
                    return item.rate == 100 && item.finish == false
                case 'finish':
                    return item.finish == true
            }
        })
        sortedList = sortedList.filter((item)=>{
            return (item.title.includes(searchword)||item.map.includes(searchword))
        })
        if (boxSelected == '진행도순') {
            sortedList.sort((a, b) => (b.rate || 0) - (a.rate || 0))
        }
        setFundingData(sortedList)
    }, [boxSelected, funding, category, searchword])


    useEffect(() => {
        const startIndex = (currentPage - 1) * 9;
        const endIndex = startIndex + 9;
        const slicedData = fundingData.slice(startIndex, endIndex);
        setUsingData(slicedData)
    }, [boxSelected, fundingData, currentPage])



    return (
        <div className="funding-bg-color body">
            <section className="funding-filter-container">
                <div className="funding-tabs">
                    <button class={"tab " + (funding == 'main' ? 'active' : '')} onClick={() => navigate('/funding/main/1')}>전체 펀딩</button>
                    <button class={"tab " + (funding == 'fundraise' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/main/1')}>모금중인 펀딩</button>
                    <button class={"tab " + (funding == 'process' ? 'active' : '')} onClick={() => navigate('/funding/process/1')}>작업 중인 펀딩</button>
                    <button class={"tab " + (funding == 'finish' ? 'active' : '')} onClick={() => navigate('/funding/finish/1')}>완료된 펀딩</button>
                </div>
                <div className={"funding-tabs " + (funding != 'fundraise' ? 'funding-tabs-hidden' : ' ')}>
                    <button class={'tab ' + (category == 'main' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/main/1')}>전체 카테고리</button>
                    <button class={'tab ' + (category == 'dailylife' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/dailylife//1')}>생활·편의</button>
                    <button class={'tab ' + (category == 'culture' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/culture/1')}>문화·교육</button>
                    <button class={'tab ' + (category == 'safety' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/safety/1')}>안전</button>
                    <button class={'tab ' + (category == 'environment' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/environment/1')}>환경</button>
                    <button class={'tab ' + (category == 'sports' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/sports/1')}>체육·여가</button>
                    <button class={'tab ' + (category == 'traffic' ? 'active' : '')} onClick={() => navigate('/funding/fundraise/traffic/1')}>교통시설</button>
                </div>


                {/* 펀딩 공통 메뉴바 */}

                <div className="funding-filter">
                    <ComboBox1 selected={boxSelected} onSelect={setBoxSelected} />
                    <button type="button" className="funding-btn-success btn-success" style={{ float: 'right', clear: 'both', marginBottom: '16px', fontSize: '25px' }} onClick={() => {
                        navigate('/funding/create')
                        window.scrollTo(0, 0)
                    }}>등록하기</button>
                </div>
            </section >

            <section className="funding-funding-container">
                <hr />
                <div className="funding-funding-grid">
                    {
                        usingData.map((item) => {
                            return <FundingBox item={item} />
                        })
                    }
                </div>
                <hr className="card-bottom-bar" />
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
                <div style={{ justifyItems: 'center', display:'flex', justifyContent:'center'}}>
                    <button
                        className="funding-more-btn"
                        onClick={() => {
                            if(page > 1){
                                navigate('/'+pageArr+'/search/'+searchword+'/'+(Number(page)-1))
                                window.scrollTo(0, 0)
                            }else{
                                alert('첫 페이지입니다.')
                            }
                        }}>
                        <FaChevronLeft />
                    </button>
                    <Pagination className="funding-pagination">{items}</Pagination>
                    <button
                        className="funding-more-btn"
                        onClick={() => {
                            if(page < fundingData.length / 10 ){
                                navigate('/'+pageArr+'/search/'+searchword+'/'+(Number(page)+1))
                                window.scrollTo(0, 0)
                            }else{
                                alert('마지막 페이지입니다.')
                            }
                        }}>
                        <FaChevronRight />
                    </button>
                </div>
                <div>
                    <p className="funding-comment">여러분 동네, 개선이 필요한 공공시설이 있나요?</p>
                    <div className="funding-register-actions">
                        <button className="funding-create-btn" onClick={() => {
                            navigate('/funding/create')
                            window.scrollTo(0, 0)
                        }}>
                            + 펀딩 등록하기
                        </button>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default FundingList;