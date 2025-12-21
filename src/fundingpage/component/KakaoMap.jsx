import React, { useEffect, useRef } from "react";

function KakaoMap({ lat, lng, style }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = () => {
            const options = {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: 2,
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
            const marker = new window.kakao.maps.Marker({
                position: map.getCenter(),
            });
            marker.setMap(map);
        };

        if (window.kakao && window.kakao.maps) {
            initMap();
        } else {
            const script = document.createElement("script");
            script.src =
                "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7369ac62df585b94bbe56f8dedf282b4&autoload=true";
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, [lat, lng]);

    return <div ref={mapRef} style={style}></div>;
}

export default KakaoMap;
