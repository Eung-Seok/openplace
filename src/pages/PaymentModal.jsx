import { useState } from "react";
import "./PaymentModal.css";

function PaymentModal({ onClose, onSuccess }) {
    const [amount, setAmount] = useState("");
    const [agree, setAgree] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const openAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    // 선택된 결제 수단
    const [selectedMethod, setSelectedMethod] = useState("");

    const quickAmounts = [10000, 50000, 100000];

    const handlePay = () => {
        const price = Number(amount);
        
        if (!selectedMethod) {
            openAlert("결제 수단을 선택해주세요.");
            return;
        }

        if (!price || price <= 0) {
            openAlert("결제 금액을 선택 또는 입력하세요.");
            return;
        }

        if (!agree) {
            openAlert("약관에 동의해주세요.");
            return;
        }


        onSuccess(price);
        onClose();
    };

    return (
        <div className="payment-modal-bg">
            <div className="payment-modal">

                <h3 className="payment-title">결제 방법</h3>

                {/* ================= 결제 수단 ================= */}
                <div className="payment-method-box">

                    <button
                        className={`pay-method main ${selectedMethod === "card" ? "active" : ""
                            }`}
                        onClick={() => setSelectedMethod("card")}
                    >
                        신용·체크카드
                    </button>

                    <div className="payment-method-grid">
                        <button
                            className={`pay-icon ${selectedMethod === "naver" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("naver")}
                        >
                            N Pay
                        </button>

                        <button
                            className={`pay-icon ${selectedMethod === "kakao" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("kakao")}
                        >
                            Kakao Pay
                        </button>

                        <button
                            className={`pay-icon ${selectedMethod === "toss" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("toss")}
                        >
                            Toss Pay
                        </button>
                    </div>

                    <div className="payment-method-grid small">
                        <button
                            className={`pay-simple ${selectedMethod === "account" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("account")}
                        >
                            계좌이체
                        </button>

                        <button
                            className={`pay-simple ${selectedMethod === "virtual" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("virtual")}
                        >
                            가상계좌
                        </button>

                        <button
                            className={`pay-simple ${selectedMethod === "phone" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("phone")}
                        >
                            휴대폰
                        </button>
                    </div>
                </div>

                {/* ================= 결제 금액 ================= */}
                <h4 className="payment-sub-title">결제 금액 선택</h4>

                <div className="payment-quick-amount">
                    {quickAmounts.map(price => (
                        <button
                            key={price}
                            className={`quick-amount-btn ${Number(amount) === price ? "active" : ""
                                }`}
                            onClick={() => setAmount(price)}
                        >
                            {price.toLocaleString()}원
                        </button>
                    ))}
                </div>

                <input
                    type="number"
                    className="payment-amount-input"
                    placeholder="직접 입력"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                {/* ================= 약관 ================= */}
                <div className="payment-agree">
                    <label>
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                        />
                        <span>
                            [필수] 결제 서비스 이용약관 및 개인정보 처리 동의
                        </span>
                    </label>
                </div>

                {/* ================= 버튼 ================= */}
                <button className="payment-submit" onClick={handlePay}>
                    결제하기
                </button>

                <button className="payment-cancel" onClick={onClose}>
                    취소
                </button>
            </div>
            {alertOpen && (
                <div className="payment-alert-backdrop">
                    <div className="payment-alert-box">
                        <p className="payment-alert-text">
                            {alertMessage}
                        </p>
                        <button
                            className="payment-alert-confirm-btn"
                            onClick={() => setAlertOpen(false)}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PaymentModal;

