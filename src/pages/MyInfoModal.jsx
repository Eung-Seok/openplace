import "./MyInfoModal.css";

function MyInfoModal({ user, onClose }) {
    if (!user) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>내 정보 확인</h3>

                <div className="info-row">
                    <span>닉네임</span>
                    <p>{user.nickname}</p>
                </div>

                <div className="info-row">
                    <span>이름</span>
                    <p>{user.name}</p>
                </div>

                <div className="info-row">
                    <span>이메일</span>
                    <p>{user.mailAddress || user.mailAdress || user.mailAddres || ""}</p>
                </div>

                <div className="info-row">
                    <span>전화번호</span>
                    <p>{user.phoneNumber}</p>
                </div>

                <div className="info-row">
                    <span>생년월일</span>
                    <p>{user.birthday}</p>
                </div>

                <div className="modal-actions">
                    <button onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfoModal;
