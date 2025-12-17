
function DataInit(){
    let dataList = []
    let generalList = []
    let reportList = []
    let reviewList = []
    let today = new Date()
    let now = today.getFullYear() +'.'+(today.getMonth()+1) +'.'+today.getDay()+'. ' + today.getHours()+':'+today.getMinutes();
    for(let i = 1; i <= 13; i++){
        if(i%3 == 0){
            dataList.push({
            title:"횡단보도에 신호등 설치가 필요합니다",  // 제목
            content:'등굣길에 위험한 구간이 있어요', // 내용
            author:'안송이', //작성자
            category:'자유게시판',
            views:i,    //조회수
            likes: Math.floor(Math.random() * 99),  // 공감
            id:i, 
            comment:[['김응석',now,'집가고싶다']], // 댓글
            uploadDate: now  // 업로드 시간
        })}else if(i%3 == 1){
            dataList.push({
            title:'벤치 설치 제안 드립니다',
            content:'산책로 중간에 벤치 부족한 구간이 있어요.',
            author:'백종진',
            category:'지역 제보',
            views:i,
            likes:Math.floor(Math.random() * 99),
            id:i,
            comment:[],
            uploadDate: now
        })}else{
            {
            dataList.push({
            title:'버스정류장 쉘터 보수 요청',
            content:'비 새는 정류장이 있어 개선이 필요합니다.',
            author:'김응석',
            category:'프로젝트 후기',
            views:i,
            likes:Math.floor(Math.random() * 99),
            id:i,
            comment:[],
            uploadDate: now 
        })}
        }
    }
    generalList = dataList.filter((item) =>{
        return item.category == '자유게시판'
    })
    reportList = dataList.filter((item) =>{
        return item.category == '지역 제보'
    })
    reviewList = dataList.filter((item) =>{
        return item.category == '프로젝트 후기'
    })
    if(localStorage.getItem('통합데이터') == null){
        localStorage.setItem('통합데이터', JSON.stringify(dataList))
    }
    if(localStorage.getItem('자유게시판') ==null){
        localStorage.setItem('자유게시판', JSON.stringify(generalList))
    }
    if(localStorage.getItem('지역 제보') ==null){
        localStorage.setItem('지역 제보', JSON.stringify(reportList))
    }
    if(localStorage.getItem('프로젝트 후기') ==null){
        localStorage.setItem('프로젝트 후기', JSON.stringify(reviewList))
    }
}

export default DataInit