import { useState } from "react";
import "./MyInfoEditModal.css";
import PasswordChangeModal from "./PasswordChangeModal";

function MyInfoEditModal({ user, onClose, onUpdate }) {
    const [form, setForm] = useState({
        nickname: user.nickname || "",
        name: user.name || "",
        mailAdress: user.mailAdress || "",
        phoneNumber: user.phoneNumber || "",
        birthday: user.birthday || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // 1️⃣ 계정정보 업데이트
        const updatedUser = {
            ...user,
            ...form,
        };

        localStorage.setItem(
            "계정정보",
            JSON.stringify(updatedUser)
        );

        // 2️⃣ 계정목록 동기화
        const list =
            JSON.parse(localStorage.getItem("계정목록")) || [];

        const index = list.findIndex(
            item => item.id === user.id
        );

        if (index !== -1) {
            list[index] = updatedUser;
            localStorage.setItem(
                "계정목록",
                JSON.stringify(list)
            );
        }

        // 3️⃣ 부모(MyPage) 갱신
        onUpdate(updatedUser);
        onClose();
    };
    const [passwordOpen, setPasswordOpen] = useState(false);


    return (
        <div className="edit-modal-bg">
            <div className="edit-modal">

                <h3>내 정보 수정</h3>

                <label>
                    이름
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    닉네임
                    <input
                        name="nickname"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    이메일
                    <input
                        name="mailAdress"
                        value={form.mailAdress}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    휴대폰 번호
                    <input
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    생년월일
                    <input
                        type="date"
                        name="birthday"
                        value={form.birthday}
                        max={(new Date()).toISOString().split('T')[0]}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className="edit-password-btn"
                    onClick={() => setPasswordOpen(true)}
                >
                    비밀번호 변경
                </button>

                <div className="edit-modal-btns">
                    <button
                        className="confirm"
                        onClick={handleSave}
                    >
                        저장
                    </button>
                    <button
                        className="cancel"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </div>

            </div>
            {passwordOpen && (
                <PasswordChangeModal
                    user={user}
                    onClose={() => setPasswordOpen(false)}
                    onUpdate={onUpdate}
                />
            )}
        </div>
    );
}

export default MyInfoEditModal;
