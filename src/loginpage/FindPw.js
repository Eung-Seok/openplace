import { useState } from "react";
import { useNavigate } from "react-router";
function FindPw() {
    let [idFocus1, setIdFocus1] = useState(false);
    let [pwFocus1, setPwFocus1] = useState(false);
    let [nameFocus1, setNameFocus1] = useState(false);
    let [idFocus2, setIdFocus2] = useState(false);
    let [pwFocus2, setPwFocus2] = useState(false);
    let [nameFocus2, setNameFocus2] = useState(false);
    let [idinput, setIdInput] = useState('');
    let [pwinput, setPwInput] = useState('');
    let [nameinput, setNameInput] = useState('');
    let loginSubmitButton = document.getElementById('login-submit-button')
    let [modalFlag1, setModalFlag1] = useState(false);
    let [modalFlag2, setModalFlag2] = useState(false);
    let [modalFlag3, setModalFlag3] = useState(false);
    let [modalFlag4, setModalFlag4] = useState(false);
    let navigate = useNavigate();

    return (
        <div>
            <div className='login-form-container'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (idinput.trim() == '') {
                        setModalFlag1(true);
                        setModalFlag2(false)
                        setModalFlag3(false)
                        setModalFlag4(false)
                    } else if (nameinput.trim() == '') {
                        setModalFlag1(false);
                        setModalFlag2(true)
                        setModalFlag3(false)
                        setModalFlag4(false)
                    } else if(pwinput.trim() == '') {
                        setModalFlag1(false);
                        setModalFlag2(false)
                        setModalFlag3(true)
                        setModalFlag4(false)
                    } else{
                        setModalFlag1(false);
                        setModalFlag2(false)
                        setModalFlag3(false)
                        setModalFlag4(true)
                    }
                }}>
                    <div className='login-input-container'>
                        <div className={'login-id-input-container ' + (idFocus1 ? 'focus1 ' : ' ') + (idFocus2 ? 'focus2 ' : ' ')} >
                            <input type='text' value={idinput} id='id' name='id' className='login-id-input' onFocus={(event) => { setIdFocus1(true); setIdFocus2(true) }} onBlur={() => {
                                setIdFocus1(false)
                                if (idinput.trim() == '') {
                                    setIdFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => {
                                setIdInput(event.target.value);
                                if (idinput.trim() != '' && pwinput.trim() != '' && nameinput.trim() == '') {
                                    loginSubmitButton.classList.remove('off')
                                } else {
                                    loginSubmitButton.classList.add('off')
                                }
                            }} />
                            <label for='id' className='login-text-label' aria-hidden='true'>이름</label>
                        </div>

                        <div className={'login-name-input-container ' + (nameFocus1 ? 'focus1 ' : ' ') + (nameFocus2 ? 'focus2 ' : ' ')} >
                            <input type='text' value={nameinput} id='name' name='name' className='login-name-input' onFocus={(event) => { setNameFocus1(true); setNameFocus2(true) }} onBlur={(event) => {
                                setNameFocus1(false)
                                if (nameinput.trim() == '') {
                                    setNameFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => {
                                setNameInput(event.target.value);
                                if (idinput.trim() != '' && pwinput.trim() != '' && nameinput.trim() == '') {
                                    loginSubmitButton.classList.remove('off')
                                } else {
                                    loginSubmitButton.classList.add('off')
                                }
                            }} />
                            <label for='id' className='login-text-label' aria-hidden='true'>아이디</label>
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
                                if (idinput.trim() != '' && pwinput.trim() != '' && nameinput.trim() == '') {
                                    loginSubmitButton.classList.remove('off')
                                } else {
                                    loginSubmitButton.classList.add('off')
                                }
                            }} />
                            <label for="pw" className='login-text-label' aria-hidden='true'>메일 주소</label>
                        </div>
                    </div>
                    {modalFlag1 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>이름을 입력해주세요</div>}
                    {modalFlag2 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>아이디를 입력해주세요</div>}
                    {modalFlag3 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>메일 주소를 입력해주세요</div>}
                    {modalFlag4 && <div style={{ color: 'green', fontSize: '14px', marginTop: '20px' }}>입력하신 메일로 비밀번호 변경 링크를 보냈습니다. 메일을 확인해주세요</div>}
                    <div>
                        <button type='submit' id='login-submit-button' className='login-submit-button off'>
                            <span className='login-button-text'>로그인</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default FindPw;