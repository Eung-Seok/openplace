function Patch(){
    
    let List = JSON.parse(localStorage.getItem('통합데이터'))
    for(let i = 1; i <= List.length; i++){
        List[i-1].id = i;
    }
    localStorage.setItem('통합데이터', JSON.stringify(List))

    let filterNum = List.filter((item) =>{
        return item.category == '자유게시판';
    })
    localStorage.setItem('자유게시판', JSON.stringify(filterNum))

    let filterNum2 = List.filter((item) =>{
        return item.category == '지역 제보';
    })
    localStorage.setItem('지역 제보', JSON.stringify(filterNum2))

    let filterNum3 = List.filter((item) =>{
        return item.category == '프로젝트 후기';
    })
    localStorage.setItem('프로젝트 후기', JSON.stringify(filterNum3))

}

export default Patch;