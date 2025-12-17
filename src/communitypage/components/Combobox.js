import './Combobox.css'
import { useState } from 'react';

const ComboBox = ({selected, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['최신순', '좋아요순'];

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className='combo-container'>
            <div className='combo-selectBox' onClick={()=>{
                setIsOpen(!isOpen)
            }}>
                <span>{selected}</span>
                <span className='combo-arrow'>{isOpen ? '▲' : '▼'}</span>
            </div>

            {/* 드롭다운 메뉴 */}
            {isOpen && (
                <ul className='combo-list'>
                    {options.map((option) => (
                        <li
                            className='combo-listItem'
                            style={{
                                backgroundColor: selected === option ? '#2563eb' : '#fff',
                                color: selected === option ? '#fff' : '#000',
                            }}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ComboBox;