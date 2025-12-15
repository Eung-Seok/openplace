

function AccountInit(){
    let accountList = [];
    accountList.push({
        nickname:'커뮤니티',
        name: '김응석',
        mailAdress:'kim@gmail.com',
        phoneNumber:'010-6540-4561',
        birthday:'962101',
        id:'김응석',
        pw: 'rladmdtjr'
    })
    accountList.push({
        nickname:'펀딩',
        name: '백종진',
        mailAdress:'baek@gmail.com',
        phoneNumber:'010-1234-4567',
        birthday:'020807',
        id:'백종진',
        pw: 'qorwhdwls'
    })
    accountList.push({
        nickname:'메인',
        name: '안송이',
        mailAdress:'ahn@gmail.com',
        phoneNumber:'010-4569-4561',
        birthday:'123456',
        id:'안송이',
        pw: 'dksthddl'
    })
    localStorage.setItem('계정정보', JSON.stringify(accountList))
}

export default AccountInit;