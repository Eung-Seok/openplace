import React, { useEffect, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router';

// 스타일을 위한 간단한 객체 (실제로는 CSS 파일이나 styled-components를 사용합니다)
function Login() {
    let [idFocus1, setIdFocus1] = useState(false);
    let [pwFocus1, setPwFocus1] = useState(false);
    let [idFocus2, setIdFocus2] = useState(false);
    let [pwFocus2, setPwFocus2] = useState(false);
    let [idinput, setIdInput] = useState('');
    let [pwinput, setPwInput] = useState('');
    let loginSubmitButton = document.getElementById('login-submit-button')
    let [modalFlag1,setModalFlag1] = useState(false);
    let [modalFlag2,setModalFlag2] = useState(false);
    let [modalFlag3,setModalFlag3] = useState(false);
    let navigate = useNavigate();
    let [isValid, setIsValid] = useState(true);
    let accountList = JSON.parse(localStorage.getItem('계정목록'))
    let [accountInfo,setAccountInfo] = useState(JSON.parse(localStorage.getItem('계정정보')))
    let [index, setIndex] = useState(0);

    return (
        <div>
            <div className='login-form-container' id='container'>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    accountList.map((item, index)=>{
                        if(idinput == item.id && pwinput == item.pw){
                            setIndex(index)
                        }else{
                            setIsValid(false)
                        }
                    })
                    if(idinput.trim() == ''){
                        setModalFlag1(true);
                        setModalFlag2(false);
                        setModalFlag3(false);
                    }else if(pwinput.trim() == ''){
                        setModalFlag1(false);
                        setModalFlag2(true);
                        setModalFlag3(false);
                    } else if(!isValid){
                        setModalFlag1(false);
                        setModalFlag2(false);
                        setModalFlag3(true);
                    } else{
                        localStorage.setItem('로그인현황', JSON.stringify(true))
                        let temp  = {
                            nickname: accountList[index].nickname,
                            name: accountList[index].name,
                            mailAdress: accountList[index].mailAdress,
                            phoneNumber: accountList[index].phoneNumber,
                            birthday: accountList[index].birthday,
                            id: accountList[index].id,
                            pw: accountList[index].pw
                        }
                        localStorage.setItem('계정정보', JSON.stringify(temp))
                        navigate('/community/main/1')
                    }
                }}>
                    <div className='login-input-container'>
                        <div className={'login-id-input-container ' + (idFocus1 ? 'focus1 ' : ' ') + (idFocus2 ? 'focus2 ' : ' ')} >
                            <input type='text' value={idinput} id='id' name='id' className='login-id-input' onFocus={(event) => { setIdFocus1(true); setIdFocus2(true) }} onBlur={() => {
                                setIdFocus1(false)
                                if(idinput.trim() == ''){
                                    setIdFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => {
                                setIdInput(event.target.value);
                                if (idinput.trim() != '' && pwinput.trim() != '') {
                                    loginSubmitButton.classList.remove('off')
                                } else {
                                    loginSubmitButton.classList.add('off')
                                }
                            }} />
                            <label for='id' className='login-text-label' aria-hidden='true'>아이디 또는 전화번호</label>
                        </div>
                        <div className={'login-pw-input-container ' + (pwFocus1 ? 'focus1 ' : ' ') + (pwFocus2 ? 'focus2' : ' ')}>
                            <input type='text' value={pwinput} id='pw' name='pw' className='login-pw-input' onFocus={() => { setPwFocus1(true); setPwFocus2(true) }} onBlur={() => {
                                setPwFocus1(false)
                                if (pwinput.trim() == '') {
                                    setPwFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => {
                                setPwInput(event.target.value);
                                if (idinput.trim() != '' && pwinput.trim() != '') {
                                    loginSubmitButton.classList.remove('off')
                                } else {
                                    loginSubmitButton.classList.add('off')
                                }
                            }} />
                            <label for="pw" className='login-text-label' aria-hidden='true'>비밀번호</label>
                        </div>
                    </div>
                        {modalFlag1 && <div style={{color:'red', fontSize:'14px', marginTop:'20px'}}>아이디 또는 전화번호를 입력해주세요</div>}
                        {modalFlag2 && <div style={{color:'red', fontSize:'14px', marginTop:'20px'}}>비밀번호를 입력해주세요</div>}
                        {modalFlag3 && <div style={{color:'red', fontSize:'14px', marginTop:'20px'}}>아이디 또는 비밀번호가 잘못되었습니다. 아이디와 비밀번호를 정확히 입력해주세요</div>}
                    <div>
                        <button type='submit' id='login-submit-button' className='login-submit-button off'>
                            <span className='login-button-text'>로그인</span>
                        </button>
                    </div>
                </form>
            </div>
            <ul className='login-find-wrap'>
                    <li>
                        <a target='_self' onClick={()=> navigate('/findpw')} className='login-find-text'>비밀번호 찾기</a>
                    </li>
                    <li>
                        <a target='_self' onClick={()=> navigate('/findid')} className='login-find-text'>아이디 찾기</a>
                    </li>
                    <li>
                        <a target='_self' onClick={()=> navigate('/register')} className='login-find-text'>회원가입</a>
                    </li>
                </ul>
        </div>
    );
}

export default Login;