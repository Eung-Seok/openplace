import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import './Register.css'

function Register() {
    let accountList = JSON.parse(localStorage.getItem('계정목록'))
    let navigate = useNavigate();
    let [nowFocus, setNowFocus] = useState('');
    let [error, setError] = useState({
        id: false,
        pw: false,
        email: false,
        name: false,
        birthday: false,
        gender: false,
        carrier: false,
        phonenumber: false
    })
    let [errorMsg, setErrorMsg] = useState({
        id: false,
        pw: false,
        email: false,
        name: false,
        birthday: false,
        gender: false,
        carrier: false,
        phonenumber: false
    })
    let [form, setForm] = useState({
        id: '',
        pw: '',
        email: '',
        name: '',
        birthday: '',
        phonenumber: ''
    })
    let [pwValid, setPwValid] = useState({
        on: false,
        danger: false,
        safe: false
    })
    let [pwHide, setPwHide] = useState(true)


    useEffect(() => {
        if(form.id.trim() == ''){
            return;
        }
        const check = /^[a-zA-z0-9]{6,12}$/
        const bool = !check.test(form.id)
        setError({ ...error, id: bool })
    }, [form.id])
    useEffect(() => {
        if(form.pw.trim() == ''){
            return;
        }
        const check = /^[a-zA-Z0-9!@#$%^*+=-]{8,16}$/
        const bool = !check.test(form.pw)
        setError({ ...error, pw: bool })
    }, [form.pw])
    useEffect(() => {
        if(form.email.trim() == ''){
            return;
        }
        const check = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/
        const bool = !check.test(form.email)
        setError({ ...error, email: bool })
    }, [form.email])
    useEffect(() => {
        if(form.name.trim() == ''){
            return;
        }
        const check = /^[가-힣]{2,8}$/
        const bool = !check.test(form.name)
        setError({ ...error, name: bool })
    }, [form.name])
    useEffect(() => {
        if(form.birthday.trim() == ''){
            return;
        }
        const check = /^[0-9]{6}$/
        const bool = !check.test(form.birthday)
        setError({ ...error, birthday: bool })
    }, [form.birthday])
    useEffect(() => {
        if(form.phonenumber.trim() == ''){
            return;
        }
        const check = /^[0-9]{11}$/
        const bool = !check.test(form.phonenumber)
        setError({ ...error, phonenumber: bool })
    }, [form.phonenumber])

    return (
        <div>
            <div className='register-form-container' id='container'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    let tempError = {...error}
                    let tempErrorMsg = {...errorMsg}
                    let hasError = false;
                    if (form.id.trim() == '') {
                        tempError.id = true;
                        tempErrorMsg.id = true;
                        hasError = true;
                    }
                    if (form.pw.trim() == '') {
                        tempError.pw = true
                        tempErrorMsg.pw = true
                        hasError = true
                    }
                    if (form.email.trim() == '') {
                        tempError.email = true;
                        tempErrorMsg.email = true;
                        hasError = true
                    }
                    if (form.name.trim() == '') {
                        tempError.name = true;
                        tempErrorMsg.name = true;
                        hasError = true
                    }
                    if (form.birthday.trim() == '') {
                        tempError.birthday = true;
                        tempErrorMsg.birthday = true;
                        hasError = true
                    }
                    if (form.phonenumber.trim() == '') {
                        tempError.phonenumber = true;
                        tempErrorMsg.phonenumber = true;
                        hasError = true
                    }
                    let gender = document.getElementsByName('gender');
                    let genderbool = true
                    let checkedgender = ''
                    Array.from(gender).map((item) => {
                        if (item.checked) {
                            genderbool = false
                            checkedgender = item
                        }
                    })
                    if (genderbool) {
                        tempError.gender = true;
                        tempErrorMsg.gender = true;
                        hasError = true
                    }
                    let carrier = document.getElementsByName('carrier')
                    let carrierbool = true
                    Array.from(carrier).map((item) => {
                        if (item.checked) {
                            carrierbool = false
                        }
                    })
                    if (carrierbool) {
                        tempError.carrier = true;
                        tempErrorMsg.carrier = true;
                        hasError = true
                    }

                    if(hasError){
                        setError({...tempError});
                        setErrorMsg({...tempErrorMsg})
                        return;
                    }else if(Array.from(tempError).includes(true)){
                        return;
                    }else{
                        let newAccount = {}
                        newAccount.nickname = form.name
                        newAccount.name = form.name
                        newAccount.id = form.id
                        newAccount.pw = form.pw
                        newAccount.birthday = form.birthday
                        newAccount.mailAdress = form.email
                        newAccount.phoneNumber = form.phonenumber
                        newAccount.gender = checkedgender.value
                        localStorage.setItem('계정목록', JSON.stringify([...accountList, newAccount]))
                        navigate('/login')
                    }
                }}>
                    <div className='register-input-container'>
                        <div className={'register-form-item id '
                            + (nowFocus == 'id' ? 'focus ' : ' ') + (error.id ? 'error' : ' ')
                        } >
                            <input type='text' value={form.id} id='id' name='id' className='register-input' placeholder="아이디" onClick={() => {
                                setNowFocus('id')
                            }} onChange={(event) => { setForm({ ...form, id: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                if (error.id) {
                                    setErrorMsg({ ...errorMsg, id: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, id: false })
                                }
                            }} />
                        </div>

                        <div className={'register-form-item pw '
                            + (nowFocus == 'pw' ? 'focus ' : ' ') + (error.pw ? 'error ' : ' ')
                        } >
                            <input type={(pwHide ? 'password' : 'text')} maxLength='20' value={form.pw} id='pw' name='pw' className='register-input' placeholder="비밀번호" onClick={() => {
                                setNowFocus('pw')
                            }} onChange={(event) => { setForm({ ...form, pw: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                const check1 = /^[a-zA-Z0-9!@#$%^*+=-]{8,16}$/
                                const check2 = /^[a-zA-Z0-9]{8,16}$/;
                                const check3 = /^[0-9]{8,16}$/
                                const check4 = /^[a-zA-z]{8,16}$/
                                if (check4.test(form.pw) || check3.test(form.pw)) {
                                    setPwValid({ ...pwValid, on: true, danger: true, safe: false })
                                } else if (check2.test(form.pw)) {
                                    setPwValid({ ...pwValid, on: true, danger: false, safe: false })
                                } else if (check1.test(form.pw)) {
                                    setPwValid({ ...pwValid, on: true, danger: false, safe: true })
                                } else {
                                    setPwValid({ ...pwValid, on: true, danger: true, safe: false })
                                }
                                if (error.pw) {
                                    setErrorMsg({ ...errorMsg, pw: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, pw: false })
                                }
                            }} />
                            <div className="register-pw-info">
                                <em className={"how_secure " + (pwValid.on ? 'on ' : ' ') + (pwValid.danger ? 'dangerous ' : ' ') + (pwValid.safe ? 'secure ' : ' ')} id='secureLevel'>
                                    {errorMsg.pw && '사용불가'}
                                    {pwValid.safe && '양호'}
                                    {(!errorMsg.pw && pwValid.danger) && '위험'}
                                    {(!errorMsg.pw && !pwValid.danger && !pwValid.safe) && '보통'}
                                </em>
                                <button type="button" className={"register-button-show " + (pwHide ? 'hide ' : ' ')} onClick={() => {
                                    const bool = pwHide
                                    setPwHide(!bool)
                                }}><span className="register-blind">비밀번호 보기</span></button>
                            </div>
                        </div>

                        <div className={'register-form-item email '
                            + (nowFocus == 'email' ? 'focus ' : ' ') + (error.email ? 'error ' : ' ')
                        }>
                            <input type='text' value={form.email} id='email' name='email' className='register-input' placeholder="이메일주소" onClick={() => {
                                setNowFocus('email')
                            }} onChange={(event) => { setForm({ ...form, email: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                if (error.email) {
                                    setErrorMsg({ ...errorMsg, email: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, email: false })
                                }
                            }} />
                        </div>
                    </div>
                    <ul>
                        {errorMsg.id && <li className="errorMsg">아이디를 입력해주세요</li>}
                        {errorMsg.pw && <li className="errorMsg">비밀번호를 입력해주세요</li>}
                        {errorMsg.email && <li className="errorMsg">이메일주소를 입력해주세요</li>}
                    </ul>

                    <div className='register-input-container'>
                        <div className={'register-form-item name '
                            + (nowFocus == 'name' ? 'focus ' : ' ') + (error.name ? 'error' : ' ')
                        } >
                            <input type='text' value={form.name} id='name' name='name' className='register-input' placeholder="이름" onClick={() => {
                                setNowFocus('name')
                            }} onChange={(event) => { setForm({ ...form, name: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                if (error.name) {
                                    setErrorMsg({ ...errorMsg, name: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, name: false })
                                }
                            }} />
                        </div>

                        <div className={'register-form-item birthday '
                            + (nowFocus == 'birthday' ? 'focus ' : ' ') + (error.birthday ? 'error' : ' ')
                        } >
                            <input type='text' value={form.birthday} id='birthday' name='birthday' className='register-input' placeholder="생년월일 8자리" onClick={() => {
                                setNowFocus('birthday')
                            }} onChange={(event) => { setForm({ ...form, birthday: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                if (error.birthday) {
                                    setErrorMsg({ ...errorMsg, birthday: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, birthday: false })
                                }
                            }} />
                        </div>

                        <div className={'register-form-item gender'}>
                            <ul className="register-list gender" onClick={() => {
                                setNowFocus('')
                            }} onBlur={() => {
                                setNowFocus('')

                            }}>
                                <li className="register-item gender">
                                    <input type="radio" id="gender1" name="gender" value='남자' className="register-li" />
                                    <label for='gender1'>남자</label>
                                </li>
                                <li className="register-item gender">
                                    <input type="radio" id="gender2" name="gender" value='여자' className="register-li" />
                                    <label for='gender2'>여자</label>
                                </li>
                                <li className="register-item gender">
                                    <input type="radio" id="gender3" name="gender" value='선택안함' className="register-li" />
                                    <label for='gender3'>선택안함</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        {errorMsg.name && <li className="errorMsg">이름을 정확히 입력해주세요</li>}
                        {errorMsg.birthday && <li className="errorMsg">생년월일을 정확하게 입력해주세요</li>}
                        {errorMsg.gender && <li className="errorMsg">성별을 선택해주세요</li>}
                    </ul>
                    <div className='register-input-container'>
                        <div className={'register-form-item carrier'}>
                            <ul className="register-list carrier" onClick={() => {
                                setNowFocus('')
                            }}>
                                <li className="register-item carrier">
                                    <input type="radio" id="carrier1" name="carrier" value='SKT' className="register-li" />
                                    <label for='carrier1'>SKT</label>
                                </li>
                                <li className="register-item carrier">
                                    <input type="radio" id="carrier2" name="carrier" value='KT' className="register-li" />
                                    <label for='carrier2'>KT</label>
                                </li>
                                <li className="register-item carrier">
                                    <input type="radio" id="carrier3" name="carrier" value='LG' className="register-li" />
                                    <label for='carrier3'>LG U+</label>
                                </li>
                                <li className="register-item carrier">
                                    <input type="radio" id="carrier4" name="carrier" value='ATP' className="register-li" />
                                    <label for='carrier4'>알뜰폰</label>
                                </li>
                            </ul>
                        </div>
                        <div className={'register-form-item phonenumber '
                            + (nowFocus == 'phonenumber' ? 'focus ' : ' ') + (error.phonenumber ? 'error ' : ' ')
                        }>
                            <input type='text' value={form.phonenumber} id='phonenumber' name='phonenumber' className='register-input' placeholder="휴대전화번호" onClick={() => {
                                setNowFocus('phonenumber')
                            }} onChange={(event) => { setForm({ ...form, phonenumber: event.target.value }) }} onBlur={() => {
                                setNowFocus('')
                                if (error.phonenumber) {
                                    setErrorMsg({ ...errorMsg, phonenumber: true })
                                } else {
                                    setErrorMsg({ ...errorMsg, phonenumber: false })
                                }
                            }} />
                        </div>
                    </div>
                    <ul>
                        {errorMsg.carrier && <li className="errorMsg">통신사를 선택해주세요</li>}
                        {errorMsg.phonenumber && <li className="errorMsg">전화번호를 정확하게 입력해주세요</li>}
                    </ul>
                    <div>
                        <button type='submit' id='register-submit-button' className='register-submit-button '>
                            <span className='register-button-text'>회원가입</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;