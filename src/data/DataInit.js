
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
            title:i,
            content:i,
            author:i,
            category:'자유게시판',
            views:i,
            likes:i,
            id:i,
            comment:[['김응석',now,'집가고싶다']],
            uploadDate: now
        })}else if(i%3 == 1){
            dataList.push({
            title:i,
            content:i,
            author:i,
            category:'지역 제보',
            views:i,
            likes:i,
            id:i,
            comment:[],
            uploadDate: now
        })}else{
            {
            dataList.push({
            title:i,
            content:i,
            author:i,
            category:'프로젝트 후기',
            views:i,
            likes:i,
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
    localStorage.setItem('통합데이터', JSON.stringify(dataList))
    localStorage.setItem('자유게시판', JSON.stringify(generalList))
    localStorage.setItem('지역 제보', JSON.stringify(reportList))
    localStorage.setItem('프로젝트 후기', JSON.stringify(reviewList))
}

export default DataInit