import { useState } from "react";
import "./PaymentModal.css";

function PaymentModal({ onClose, onSuccess }) {
    const [amount, setAmount] = useState("");
    const [agree, setAgree] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("");

    const quickAmounts = [10000, 50000, 100000];
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const openAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

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

                    {/* 페이 버튼 */}
                    <div className="payment-method-grid">
                        <button
                            className={`pay-icon-btn ${selectedMethod === "naver" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("naver")}
                        >
                            <span className="pay-icon-img">
                                <img src="/images/pay/naverpay.png" alt="N Pay" />
                            </span>
                            <span className="pay-text">Naver</span>
                        </button>

                        <button
                            className={`pay-icon-btn ${selectedMethod === "kakao" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("kakao")}
                        >
                            <span className="pay-icon-img">
                                <img src="/images/pay/kakaopay.png" alt="Kakao Pay" />
                            </span>
                            <span className="pay-text">Kakao</span>
                        </button>

                        <button
                            className={`pay-icon-btn ${selectedMethod === "toss" ? "active" : ""
                                }`}
                            onClick={() => setSelectedMethod("toss")}
                        >
                            <span className="pay-icon-img">
                                <img src="/images/pay/tosspay.png" alt="Toss Pay" />
                            </span>
                            <span className="pay-text">Toss</span>
                        </button>
                    </div>

                    {/* 기타 결제 */}
                    <div className="payment-method-grid small">
                        {[
                            { key: "account", label: "계좌이체" },
                            { key: "virtual", label: "가상계좌" },
                            { key: "phone", label: "휴대폰" },
                        ].map(item => (
                            <button
                                key={item.key}
                                className={`pay-simple ${selectedMethod === item.key ? "active" : ""
                                    }`}
                                onClick={() => setSelectedMethod(item.key)}
                            >
                                {item.label}
                            </button>
                        ))}
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