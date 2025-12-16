
import { useEffect, useState, useNavigate } from "react";

function Register() {
    const loginSubmitButton = document.getElementById('login-submit-button')
    const idinputtext = document.getElementById('id')
    const pwinputtext = document.getElementById('pw');
    let [idFocus1, setIdFocus1] = useState(false);
    let [pwFocus1, setPwFocus1] = useState(false);
    let [idFocus2, setIdFocus2] = useState(false);
    let [pwFocus2, setPwFocus2] = useState(false);
    let [idinput, setIdInput] = useState('');
    let [pwinput, setPwInput] = useState('');
    let [modalFlag1, setModalFlag1] = useState(false);
    let [modalFlag2, setModalFlag2] = useState(false);
    let [modalFlag3, setModalFlag3] = useState(false);
    let navigate = useNavigate();
    let [isValid, setIsValid] = useState(false);
    let [isButtonOff, setIsButtonOff] = useState(true);
    let accountList = JSON.parse(localStorage.getItem('계정목록'))
    let [accountInfo, setAccountInfo] = useState(JSON.parse(localStorage.getItem('계정정보')))
    let [index, setIndex] = useState(0);

    return (
        <div>
            <div className='login-form-container' id='container'>
                <form>
                    <div className='login-input-container'>
                        <div className={'login-id-input-container ' + (idFocus1 ? 'focus1 ' : ' ') + (idFocus2 ? 'focus2 ' : ' ')} >
                            <input type='text' tabIndex={1} value={idinput} id='id' name='id' className='login-id-input' onFocus={(event) => { setIdFocus1(true); setIdFocus2(true) }} onBlur={(event) => {
                                setIdFocus1(false)
                                if (idinput.trim() == '') {
                                    setIdFocus2(false)
                                }
                                pwinputtext.focus()
                            }} onChange={(event) => {
                                setIdInput(event.target.value);
                            }} />
                            <label for='id' className='login-text-label' aria-hidden='true'>아이디 또는 전화번호</label>
                        </div>
                        <div className={'login-pw-input-container ' + (pwFocus1 ? 'focus1 ' : ' ') + (pwFocus2 ? 'focus2' : ' ')}>
                            <input type='password' tabIndex={2} value={pwinput} id='pw' name='pw' className='login-pw-input' onFocus={() => { setPwFocus1(true); setPwFocus2(true) }} onBlur={() => {
                                setPwFocus1(false)
                                if (pwinput.trim() == '') {
                                    setPwFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => { setPwInput(event.target.value); }} />
                            <label for="pw" className='login-text-label' aria-hidden='true'>비밀번호</label>
                        </div>
                    </div>
                    {modalFlag1 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>아이디 또는 전화번호를 입력해주세요</div>}
                    {modalFlag2 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>비밀번호를 입력해주세요</div>}
                    {modalFlag3 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>아이디 또는 비밀번호가 잘못되었습니다. 아이디와 비밀번호를 정확히 입력해주세요</div>}
                    <div>
                        <button type='submit' tabIndex={3} id='login-submit-button' className={'login-submit-button ' + (isButtonOff ? 'off' : ' ')}>
                            <span className='login-button-text'>로그인</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;