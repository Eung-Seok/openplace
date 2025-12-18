import React, { useState, useEffect } from "react";
import FundingDataInit from "../data/FundingDataInit.js";
import "./Funding.css";
import { IoMenu } from "react-icons/io5";
// import FundingBox from "./component/FundingBox.js"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import FundingAmountPlus from "./FundingAmountPlus.jsx";
import FundingDetail1 from "./component/FundingDetail1.jsx";
import FundingDetail2 from "./component/FundingDetail2.jsx";

function FundingDetail() {

    const location = useLocation();
    const { id } = useParams();

    let fundingData = JSON.parse(localStorage.getItem('펀딩데이터'))
    let data = fundingData.find((item) => {
        return item.id == id;
    })

    if (data.rate < 100) {
        return <FundingDetail1 data={data}/>
    } else {
        return <FundingDetail2 data={data}/>
    }
}


export default FundingDetail;