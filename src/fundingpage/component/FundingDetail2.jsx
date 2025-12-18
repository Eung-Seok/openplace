import React, { useState, useEffect } from "react";
import "../Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "../FundingAmountPlus.jsx";
import './FundingDetail2.css'

function FundingDetail2({data}) {

    let id = data.id

    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(data.hearts || 0);


    const handleClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    return (
        <div><h1>여긴 100퍼</h1></div>
    )
}

export default FundingDetail2;