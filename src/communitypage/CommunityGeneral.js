import Card from "./components/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommunityMain.css'
import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useNavigate, useParams } from "react-router";

function CommunityGeneral() {
    let nowpage = useLocation();
    let nowLogin = JSON.parse(localStorage.getItem('로그인현황'))
    let navigate = useNavigate();
    let { page } = useParams();
    let List = JSON.parse(localStorage.getItem('자유게시판'));
    let pages = [];
    for (let i = 1; i <= List.length / 10 + 1; i++) {
        pages.push('page ' + i);
    } 
    let data = [];
    for (let i = (page - 1) * 10; i <= page * 10-1; i++) {
        if (List[i] != undefined) {
            data.push(List[i]);
        }
    }
    let active = page;
    let items = [];
    for (let number = 1; number <= pages.length; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={() => {
                navigate('/community/main/' + number)
            }}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div className="body">
            <div class="tabs">
                <button class="tab" onClick={() => navigate('/community/main/1')}>전체 글</button>
                <button class="tab active" onClick={ ()=> navigate('/community/general/1')}>자유게시판</button>
                <button class="tab" onClick={ () => navigate('/community/report/1')}>지역 제보</button>
                <button class="tab" onClick={ () => navigate('/community/review/1')}>프로젝트 후기</button>
            </div>

            <div>
                <Button style={{ float: 'right', clear: 'both', marginBottom: '16px' }} variant="success" onClick={() => {
                    if(nowLogin){
                        navigate('/community/write')
                    }else{
                        localStorage.setItem('마지막 주소', JSON.stringify(nowpage.pathname))
                        navigate('/login')
                    }
                    }}>글쓰기</Button>
            </div>
            <div style={{ clear: 'both' }}>
                {data.map((item, index) => (
                    <Card item={item} />
                ))}
            </div>
            <div style={{justifyItems:'center'}}>
                <Pagination>{items}</Pagination>
            </div>
        </div >
    );
}

export default CommunityGeneral;