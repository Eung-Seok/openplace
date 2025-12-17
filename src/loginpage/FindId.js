import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';


function FindId() {
    const loginSubmitButton = document.getElementById('login-submit-button')
    const idinputtext = document.getElementById('id')
    const pwinputtext = document.getElementById('pw')
    let [idFocus1, setIdFocus1] = useState(false);
    let [pwFocus1, setPwFocus1] = useState(false);
    let [idFocus2, setIdFocus2] = useState(false);
    let [pwFocus2, setPwFocus2] = useState(false);
    let [idinput, setIdInput] = useState('');
    let [pwinput, setPwInput] = useState('');
    let [isButtonOff, setIsButtonOff] = useState(true);
    let [modalFlag1, setModalFlag1] = useState(false);
    let [modalFlag2, setModalFlag2] = useState(false);
    let [modalFlag3, setModalFlag3] = useState(false);
    
    let navigate = useNavigate();

    useEffect(() => {
        setIsButtonOff(idinput.trim() == '' || pwinput.trim() == '')
    }, [idinput, pwinput])

    return (
        <div>

            <div className='find-form-container'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (idinput.trim() == '') {
                        setModalFlag1(true);
                        setModalFlag2(false)
                        setModalFlag3(false)
                    } else if (pwinput.trim() == '') {
                        setModalFlag1(false);
                        setModalFlag2(true)
                        setModalFlag3(false)
                    } else {
                        setModalFlag1(false);
                        setModalFlag2(false)
                        setModalFlag3(true)
                    }
                }}>
                    <div className='login-input-container'>
                        <div className={'login-id-input-container ' + (idFocus1 ? 'focus1 ' : ' ') + (idFocus2 ? 'focus2 ' : ' ')} >
                            <input type='text' tabIndex={1} value={idinput} id='id' name='id' className='login-id-input' onFocus={(event) => { setIdFocus1(true); setIdFocus2(true) }} onBlur={() => {
                                setIdFocus1(false)
                                if (idinput.trim() == '') {
                                    setIdFocus2(false)
                                }
                                pwinputtext.focus()
                            }} onChange={(event) => {
                                setIdInput(event.target.value);
                            }} />
                            <label for='id' className='login-text-label' aria-hidden='true'>이름</label>
                        </div>
                        <div className={'login-pw-input-container ' + (pwFocus1 ? 'focus1 ' : ' ') + (pwFocus2 ? 'focus2' : ' ')}>
                            <input type='text' tabIndex={2} value={pwinput} id='pw' name='pw' className='login-pw-input' onFocus={() => { setPwFocus1(true); setPwFocus2(true) }} onBlur={() => {
                                setPwFocus1(false)
                                if (pwinput.trim() == '') {
                                    setPwFocus2(false)
                                }
                                loginSubmitButton.focus();
                            }} onChange={(event) => {
                                setPwInput(event.target.value);
                            }} />
                            <label for="pw" className='login-text-label' aria-hidden='true'>메일 주소</label>
                        </div>
                    </div>
                    {modalFlag1 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>이름을 입력해주세요</div>}
                    {modalFlag2 && <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>메일 주소를 입력해주세요</div>}
                    {modalFlag3 && <div style={{ color: 'green', fontSize: '14px', marginTop: '20px' }}>입력하신 메일로 아이디를 보냈습니다. 메일을 확인해주세요</div>}
                    <div>
                        <button type='submit' id='login-submit-button' className={'login-submit-button ' + (isButtonOff ? 'off' : ' ')}>
                            <span className='login-button-text'>아이디 찾기</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FindId;