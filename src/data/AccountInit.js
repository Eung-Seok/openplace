function AccountInit(){
    let accountList = [];
    let accountInfo = {
        nickname:'',
        name:'',
        mailAdress:'',
        phoneNumber:'',
        birthday:'',
        id:'',
        pw:'',

    };
    let isLogin = false;
    accountList.push({
        nickname:'커뮤니티',
        name: '김응석',
        mailAdress:'kim@gmail.com',
        phoneNumber:'010-6540-4561',
        birthday:'962101',
        gender:'남자',
        id:'김응석',
        pw: 'rladmdtjr'
    })
    accountList.push({
        nickname:'펀딩',
        name: '백종진',
        mailAdress:'baek@gmail.com',
        phoneNumber:'010-1234-4567',
        birthday:'020807',
        gender:'선택안함',
        id:'백종진',
        pw: 'qorwhdwls'
    })
    accountList.push({
        nickname:'메인',
        name: '안송이',
        mailAdress:'ahn@gmail.com',
        phoneNumber:'010-4569-4561',
        birthday:'123456',
        gender:'여자',
        id:'안송이',
        pw: 'dksthddl'
    })
    if(localStorage.getItem('계정목록') == null){
        localStorage.setItem('계정목록', JSON.stringify(accountList))
    }
    if(localStorage.getItem('로그인현황') == null){
        localStorage.setItem('로그인현황', JSON.stringify(isLogin))
    }
    if(localStorage.getItem('계정정보') == null){
        localStorage.setItem('계정정보', JSON.stringify(accountInfo))
    }
}

export default AccountInit;

