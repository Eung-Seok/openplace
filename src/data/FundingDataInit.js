
function FundingDataInit() {
    const fundingData = [
        {
            id: 1,
            title: "놀이터 리뉴얼 프로젝트",
            map: "천안 불당동",
            subTitle: "천안 불당동 숲놀이터와 유아숲체험장을 더 안전하고 쾌적한 공간으로 정비합니다. 기존 노후 시설을 개선해 아이들이 안심하고 뛰어놀 수 있는 환경을 만듭니다.",
            category: "환경",
            rate: 64,
            goalAmount: 8000000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding1.jpg"
        },
        {
            id: 2,
            title: "공공 시설물 CCTV 개선 프로젝트",
            map: "천안 서북구 전역",
            subTitle: "천안 공공시설의 노후 CCTV를 고화질 장비로 교체해 범죄 예방과 안전 모니터링을 강화합니다. 사각지대를 줄이고 실시간 대응성을 높여 주민들이 더 안심할 수 있는 생활 환경을 만듭니다.",
            category: "안전",
            rate: 74,
            goalAmount: 15000000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding2.jpg"
        },
        {
            id: 3,
            title: "공원 벤치 교체 프로젝트",
            map: "천안 삼거리공원",
            subTitle: "천안 삼거리공원의 노후된 벤치와 테이블을 새롭게 교체해 편안한 휴식 공간을 만듭니다. 가족·친구·연인과 함께 야외에서 여유를 즐기기 좋은 공원 환경으로 정비합니다.",
            category: "생활·편의",
            rate: 38,
            goalAmount: 5000000,
            timeLeft: 25,
            imgPath: "/images/fundingpage/funding3.jpg"
        },
        {
            id: 4,
            title: "주민 쉼터 조명 개선 프로젝트",
            map: "천안 두정동 쉼터",
            subTitle: "천안 동네 쉼터의 어두운 조명을 밝게 교체해 밤에도 안심하고 이용할 수 있는 휴식 환경을 마련합니다. 야간 산책과 주민 휴식을 더 안전하고 편안하게 만드는 조명 개선 사업입니다.",
            category: "생활·편의",
            rate: 52,
            goalAmount: 4500000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding4.jpg"
        },
        {
            id: 5,
            title: "도시 화단 정비 및 식재 프로젝트",
            map: "천안 불당동 도심화단",
            subTitle: "천안 도심 곳곳의 방치된 화단을 정비하고 계절감을 살린 식재를 더해 도시 미관을 개선합니다. 시민들이 걷기만 해도 기분 좋아지는 쾌적한 거리 환경을 조성합니다.",
            category: "환경",
            rate: 20,
            goalAmount: 3500000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding5.jpg"
        },
        {
            id: 6,
            title: "초등학교 안전 울타리 설치",
            map: "천안 쌍용초등학교",
            subTitle: "천안 초등학교 주변의 노후·부족한 울타리를 보완해 등하굣길 안전을 강화합니다. 차도와 인도의 경계가 불분명한 구역을 개선해 어린이들의 보행 위험을 줄입니다.",
            category: "안전",
            rate: 100,
            goalAmount: 12000000,
            timeLeft: 11,
            imgPath: "/images/fundingpage/funding6.jpg"
        },
        {
            id: 7,
            title: "스쿨존 횡단보도 LED 안전표시 설치",
            map: "천안 성정초등학교",
            subTitle: "천안 스쿨존 횡단보도에 LED 안전표시를 설치해 운전자가 멀리서도 잘 보도록 시인성을 높입니다. 야간·우천 시에도 어린이의 보행 안전을 강화하는 교통 환경 개선 작업입니다.",
            category: "교통시설",
            rate: 46,
            goalAmount: 9000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding7.jpg"
        },
        {
            id: 8,
            title: "작은 도서관 환경 개선 프로젝트",
            map: "천안 신부동 작은도서관",
            subTitle: "천안 지역 작은 도서관의 노후 시설을 정비해 더 편안하고 쾌적한 독서 공간으로 리뉴얼합니다. 채광·환기·열람 환경을 개선해 아이들과 주민들이 머물기 좋은 지역 문화 공간을 만듭니다.",
            category: "문화·체육",
            rate: 100,
            goalAmount: 7000000,
            timeLeft: 4,
            imgPath: "/images/fundingpage/funding8.jpg"
        },
        {
            id: 9,
            title: "노후 체육시설 보수 프로젝트",
            map: "천안 종합운동장 공원",
            subTitle: "천안 시민들이 자주 이용하는 공원·운동장의 노후 체육시설을 보수해 안전한 운동 환경을 마련합니다. 파손·미끄럼 구역을 개선해 사고 위험을 줄이고 이용 편의성을 높입니다.",
            category: "문화·체육",
            rate: 58,
            goalAmount: 10000000,
            timeLeft: 17,
            imgPath: "/images/fundingpage/funding9.jpg"
        },
        {
            id: 10,
            title: "자전거 도로 야간 조명 설치",
            map: "천안 하천권",
            subTitle: "야간 이용이 많은 천안 자전거 도로에 밝은 조명을 설치해 안전한 라이딩 환경을 제공합니다. 천안천·원성천·삼룡천 등 주요 하천길과 성환천 억새길, 입장 포도길 등 테마 코스를 중심으로 개선을 진행합니다.",
            category: "교통시설",
            rate: 100,
            goalAmount: 25000000,
            timeLeft: 3,
            imgPath: "/images/fundingpage/funding10.jpg"
        },

        {
            id: 11,
            title: "천안 공공주차장 개선 프로젝트",
            map: "천안 신부동 공영주차장",
            subTitle: "공영주차장의 노후 시설을 개선하고 조명을 보강하여 이용 편의성을 높입니다. 차량 진입 및 출차 구역을 정비하고, 안전 안내 표지판을 설치하여 시민들이 안심하고 이용할 수 있도록 합니다.\n\n주차장 내 CCTV 설치와 비상호출 버튼을 배치하여 범죄 예방과 긴급 상황 대응 체계를 마련합니다. 또한 전기차 충전소 설치를 고려하여 친환경 이동 수단도 지원합니다.\n\n시설물 유지보수 및 정기 점검 계획을 수립하여 장기간 안전하게 운영되도록 하며, 시민 의견 수렴을 통해 편의 시설을 지속적으로 개선합니다.",
            category: "생활·편의",
            rate: 77,
            goalAmount: 18000000,
            timeLeft: 26,
            imgPath: "/images/fundingpage/funding11.jpg"
        },
        {
            id: 12,
            title: "놀이공원 안전 점검 프로젝트",
            map: "천안 중앙 놀이공원",
            subTitle: "천안 지역 놀이공원의 놀이기구와 시설 안전 점검을 진행합니다. 놀이기구 작동 상태와 안전 장치 작동 여부를 확인하여 이상이 있을 경우 즉시 보수 조치를 시행합니다.\n\n아이들이 안전하게 놀 수 있는 환경을 확보하기 위해 바닥재, 난간, 출입구 등 주변 시설도 함께 점검하며, 필요 시 개선 및 교체 작업을 진행합니다.\n\n주민 참여형 안전 캠페인과 안내판 설치를 통해 시민들에게 안전 수칙을 안내하며, 정기 점검 계획을 수립하여 장기간 안전성을 유지할 수 있도록 합니다.",
            category: "안전",
            rate: 45,
            goalAmount: 9000000,
            timeLeft: 15,
            imgPath: "/images/fundingpage/funding12.jpg"
        },
        {
            id: 13,
            title: "천안 어린이 도서관 리뉴얼 프로젝트",
            map: "천안 성정동 어린이도서관",
            subTitle: "지역 어린이 도서관의 노후 시설과 책장을 개선하고 독서 공간을 확장합니다. 아이들이 편안하게 책을 읽고 학습할 수 있는 환경을 제공합니다.\n\n공공 강좌와 워크숍 공간을 확보하여 문화·교육 활동을 다양화하며, 어린이 대상 독서 프로그램 운영을 지원합니다.\n\n환기와 조명 개선, 미술작품 설치 등으로 도서관 환경을 개선하고, 안전 점검을 통해 이용자들이 안심하고 이용할 수 있는 공간으로 조성합니다.",
            category: "문화·체육",
            rate: 68,
            goalAmount: 8000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding13.jpg"
        },
        {
            id: 14,
            title: "천안 초등학교 운동장 조명 설치",
            map: "천안 성정동 성정초등학교",
            subTitle: "운동장 야간 조명을 설치하여 학생들의 방과 후 체육 활동 시 안전을 확보합니다. 기존 노후 조명을 교체하고 LED 조명으로 에너지 효율을 높입니다.\n\n운동장 주변 안전 표지판과 도로 마킹을 함께 개선하여 스쿨존 안전성을 강화합니다.\n\n정기 점검과 유지보수 계획을 수립하여 장기간 안정적으로 운영되도록 지원하며, 학생과 교직원에게 안전 정보를 안내합니다.",
            category: "문화·체육",
            rate: 42,
            goalAmount: 7000000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding14.jpg"
        },
        {
            id: 15,
            title: "천안 공공도서관 열람실 리모델링",
            map: "천안 두정동 공공도서관",
            subTitle: "노후 열람실과 책장을 교체하여 학생과 시민들이 쾌적하게 독서할 수 있는 환경을 제공합니다. 환기와 조명을 개선하고 좌석 배치도 최적화합니다.\n\n공공 미술작품과 안내판 설치를 통해 문화적 즐거움과 정보 제공 기능을 강화합니다.\n\n정기 청소와 유지보수 계획으로 안전하고 깨끗한 환경을 유지하며, 다양한 워크숍과 학습 프로그램 운영이 가능하도록 공간을 조성합니다.",
            category: "문화·체육",
            rate: 65,
            goalAmount: 12000000,
            timeLeft: 25,
            imgPath: "/images/fundingpage/funding15.jpg"
        },
        {
            id: 16,
            title: "천안 체육센터 헬스장 장비 교체",
            map: "천안 원성동 체육센터",
            subTitle: "노후 헬스 장비를 교체하고 안전장치를 보강하여 시민들이 안심하고 운동할 수 있는 환경을 조성합니다.\n\n운동기구와 시설물 점검을 통해 사고 위험을 최소화하고, 조명과 안전 표지판을 개선하여 이용 편의성을 높입니다.\n\n정기 점검과 유지보수 계획을 수립하여 장기간 안정적으로 운영되도록 하며, 주민 참여형 피트니스 프로그램 운영도 지원합니다.",
            category: "문화·체육",
            rate: 38,
            goalAmount: 15000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding16.jpg"
        },
        {
            id: 17,
            title: "천안 어린이 놀이터 안전펜스 설치",
            map: "천안 불당동 어린이놀이터",
            subTitle: "놀이터 주변에 안전펜스를 설치하고, 바닥재와 놀이기구 점검을 통해 아이들이 안전하게 놀 수 있는 공간을 제공합니다.\n\n주민 참여형 이벤트 공간과 안내판 설치를 통해 시민들이 안전 수칙을 숙지하도록 돕습니다.\n\n정기 점검 계획을 수립하여 장기간 안전성을 유지하며, 놀이시설 운영 기록을 관리하여 개선사항을 반영합니다.",
            category: "안전",
            rate: 72,
            goalAmount: 8000000,
            timeLeft: 15,
            imgPath: "/images/fundingpage/funding17.jpg"
        },
        {
            id: 18,
            title: "천안 공원 벤치 및 휴게시설 개선",
            map: "천안 신부동 중앙공원",
            subTitle: "노후 벤치 교체 및 휴게시설 보강을 통해 시민들이 편안하게 쉴 수 있는 공간을 제공합니다.\n\n공원 내 가로등 LED 교체 및 안전 점검을 통해 야간에도 안전하게 이용할 수 있도록 합니다.\n\n화단 정비, 안내판 설치, 공원 내 CCTV 보강 등을 포함하여 시민들이 안심하고 편하게 공원을 즐길 수 있는 환경을 조성합니다.",
            category: "환경",
            rate: 50,
            goalAmount: 6000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding18.jpg"
        },
        {
            id: 19,
            title: "천안 어린이집 안전 울타리 보수",
            map: "천안 성정동 어린이집",
            subTitle: "어린이집 주변 울타리와 출입구를 보수하고 CCTV와 안전 표지판 설치로 아이들의 통학 안전을 강화합니다.\n\n놀이터 시설 점검과 바닥재 개선, 주변 산책로 안전 점검도 함께 진행하여 어린이 안전을 확보합니다.\n\n정기 점검 계획을 수립하고 주민들에게 안전 안내를 제공하여 지속적인 안전 관리가 이루어질 수 있도록 합니다.",
            category: "안전",
            rate: 100,
            goalAmount: 5000000,
            timeLeft: 5,
            imgPath: "/images/fundingpage/funding19.jpg"
        },
        {
            id: 20,
            title: "천안 노후 도로 횡단보도 LED 설치",
            map: "천안 두정동 주요도로",
            subTitle: "횡단보도에 LED 안전 표시를 설치하여 보행자의 가시성을 높이고 사고 위험을 줄입니다.\n기존 표지판과 신호등을 보강하고, 야간에도 시인성을 확보할 수 있도록 조명을 개선합니다.\n보행자 안전뿐 아니라 차량 운전자 안내도 강화하여 지역 교통 환경 전반의 안전성을 높입니다.",
            category: "교통시설",
            rate: 47,
            goalAmount: 9500000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding20.jpg"
        },
        {
            id: 21,
            title: "천안 작은 공원 화단 정비 프로젝트",
            map: "천안 원성동 작은공원",
            subTitle: "공원 내 화단을 정비하고 계절별 꽃을 식재하여 도시 미관을 개선합니다.\n주민들이 쾌적하게 이용할 수 있는 산책로와 벤치 주변 조경을 강화합니다.\n쓰레기통, 안내판 설치 등 공원 편의 시설도 함께 점검하여 시민 친화적인 공간으로 재탄생시킵니다.",
            category: "환경",
            rate: 33,
            goalAmount: 3500000,
            timeLeft: 24,
            imgPath: "/images/fundingpage/funding18.jpg"
        },
        {
            id: 22,
            title: "천안 초등학교 스쿨존 CCTV 설치",
            map: "천안 성정동 초등학교",
            subTitle: "스쿨존에 CCTV를 설치해 어린이 통학로의 안전을 강화합니다.\n횡단보도, 주차 구역, 놀이터 주변 등 취약 구간을 집중 감시합니다.\n정기적인 점검과 시스템 유지보수를 통해 장기적으로 안전한 등하굣길 환경을 제공합니다.",
            category: "안전",
            rate: 78,
            goalAmount: 12000000,
            timeLeft: 16,
            imgPath: "/images/fundingpage/funding2.jpg"
        },
        {
            id: 23,
            title: "천안 공공체육시설 보수",
            map: "천안 불당동 공공체육관",
            subTitle: "노후 체육시설을 보수하고 안전 장치를 강화하여 시민들이 안전하게 운동할 수 있도록 합니다.\n체육관 내부 장비, 운동기구, 바닥재 등 시설 전반을 점검하고 필요한 개선 작업을 진행합니다.\n정기적인 안전 점검과 이용자 안내 시스템도 강화하여 안전하고 편리한 환경을 제공합니다.",
            category: "문화·체육",
            rate: 59,
            goalAmount: 10000000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding3.jpg"
        },
        {
            id: 24,
            title: "천안 공공주차장 CCTV 업그레이드",
            map: "천안 신부동 공영주차장",
            subTitle: "공영주차장 CCTV를 고화질 장비로 교체하여 범죄 예방과 안전 모니터링을 강화합니다.\n주차장 내 사각지대까지 감시를 확대하고, 접근 경로 및 출입구까지 통합 관리합니다.\n정기적인 유지보수와 시스템 점검을 통해 지속적인 안전 관리를 보장합니다.",
            category: "교통시설",
            rate: 92,
            goalAmount: 25000000,
            timeLeft: 30,
            imgPath: "/images/fundingpage/funding4.jpg"
        },
        {
            id: 25,
            title: "천안 지역 문화센터 조명 개선",
            map: "천안 두정동 문화센터",
            subTitle: "문화센터 주변과 내부 조명을 개선하여 야간 이용 시 안전성을 높입니다.\n공연, 전시, 강좌 등 프로그램 진행 시 조명 환경을 최적화하고 이용 편의를 강화합니다.\n기존 시설 점검과 함께 유지보수 계획을 수립하여 장기적으로 쾌적하고 안전한 문화 공간을 제공합니다.",
            category: "문화·체육",
            rate: 40,
            goalAmount: 8000000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding5.jpg"
        },
        {
            id: 26,
            title: "천안 공원 산책로 정비",
            map: "천안 원성동 공원 산책로",
            subTitle: "산책로 노후 구간을 보수하고 안내 표지판과 안전 표지를 설치합니다.\n조명과 안전 난간을 개선하여 시민들이 야간에도 안전하게 산책할 수 있도록 합니다.\n정기적인 점검과 청결 관리로 편안하고 쾌적한 공원 환경을 유지합니다.",
            category: "환경",
            rate: 61,
            goalAmount: 6000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding6.jpg"
        },
        {
            id: 27,
            title: "천안 어린이 놀이터 바닥 안전재 교체",
            map: "천안 불당동 놀이터",
            subTitle: "놀이기구 아래 바닥 안전재를 교체하여 아이들이 안전하게 놀 수 있는 환경을 제공합니다.\n충격 흡수 매트, 미끄럼 방지 처리 등을 포함해 종합적인 안전 조치를 실시합니다.\n정기 점검 및 유지보수 체계를 마련하여 장기적으로 안전을 보장합니다.",
            category: "안전",
            rate: 55,
            goalAmount: 7500000,
            timeLeft: 17,
            imgPath: "/images/fundingpage/funding7.jpg"
        },
        {
            id: 28,
            title: "천안 지역 공원 화단 조경 개선",
            map: "천안 신부동 중앙공원",
            subTitle: "공원 내 화단과 조경을 정비하여 시민들이 쾌적하게 쉴 수 있는 환경을 제공합니다.\n계절별 꽃과 관목을 식재하고, 산책로 주변 조명을 보강합니다.\n공원 내 쓰레기 관리, 벤치, 안내판 설치 등 편의 시설도 함께 개선하여 이용 만족도를 높입니다.",
            category: "환경",
            rate: 70,
            goalAmount: 5000000,
            timeLeft: 23,
            imgPath: "/images/fundingpage/funding8.jpg"
        },
        {
            id: 29,
            title: "천안 초등학교 운동장 안전망 설치",
            map: "천안 성정동 초등학교",
            subTitle: "운동장 주변 안전망을 설치하여 체육활동 시 안전을 강화합니다.\n낙하물, 공 튐 방지, 외부 접근 통제까지 포함한 종합 안전 대책을 마련합니다.\n정기 점검과 유지보수 계획으로 학생들이 안심하고 체육활동을 즐길 수 있는 환경을 제공합니다.",
            category: "안전",
            rate: 48,
            goalAmount: 8000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding9.jpg"
        },
        {
            id: 30,
            title: "천안 체육관 내부 시설 보수",
            map: "천안 원성동 체육관",
            subTitle: "체육관 내부 노후 시설을 교체하고 안전 장치를 강화하여 시민들이 안전하게 이용할 수 있도록 합니다.\n운동기구, 바닥재, 조명 등 전반적인 시설 점검과 개선을 포함하며, 이용자 편의와 안전을 동시에 고려합니다.\n정기적인 유지보수 계획과 안전 점검을 통해 장기적으로 쾌적한 체육 환경을 제공합니다.",
            category: "문화·체육",
            rate: 63,
            goalAmount: 12000000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding10.jpg"
        },
        {
            id: 31,
            title: "천안 지역 놀이터 안전점검",
            map: "천안 두정동 놀이공원",
            subTitle: "놀이시설 안전점검과 보수를 통해 아이들이 안심하고 놀 수 있는 환경을 조성합니다.\n놀이기구의 구조적 안정성, 바닥재, 안전 가드 등을 점검하고 필요한 개선 작업을 실시합니다.\n정기 점검과 유지보수 체계로 아이들의 안전을 지속적으로 보장합니다.",
            category: "안전",
            rate: 49,
            goalAmount: 7000000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding11.jpg"
        },
        {
            id: 32,
            title: "천안 초등학교 도서관 리모델링",
            map: "천안 불당동 초등학교",
            subTitle: "학교 도서관 내부 환경을 개선하고 독서 공간을 확충합니다.\n책장, 조명, 학습 공간을 개선하여 학생들이 쾌적하게 공부할 수 있도록 지원합니다.\n또한 열람실 내 안전과 청결 관리까지 포함해 지속 가능한 학습 환경을 제공합니다.",
            category: "문화·체육",
            rate: 68,
            goalAmount: 9000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding12.jpg"
        },
        {
            id: 33,
            title: "천안 공공체육시설 조명 개선",
            map: "천안 신부동 체육센터",
            subTitle: "체육시설 조명을 보강하여 야간 운동 시 안전성을 높입니다.\n운동장, 체육관 내부, 산책로 주변 조명을 설치하고 노후 조명을 교체합니다.\n이용자 안전을 고려한 최적 조명 환경을 조성하고 정기 유지보수를 통해 지속적으로 관리합니다.",
            category: "문화·체육",
            rate: 52,
            goalAmount: 7500000,
            timeLeft: 17,
            imgPath: "/images/fundingpage/funding13.jpg"
        },
        {
            id: 34,
            title: "천안 어린이 놀이터 장비 교체",
            map: "천안 원성동 놀이터",
            subTitle: "노후 놀이기구를 교체하여 아이들이 안전하게 놀 수 있는 환경을 제공합니다.\n미끄럼틀, 그네, 정글짐 등 놀이기구의 구조적 안전성을 점검하고 보강합니다.\n정기 점검과 유지보수를 포함해 아이들이 안심하고 놀이를 즐길 수 있는 공간을 마련합니다.",
            category: "안전",
            rate: 58,
            goalAmount: 8500000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding14.jpg"
        },
        {
            id: 35,
            title: "천안 공원 산책로 안전 점검",
            map: "천안 두정동 공원",
            subTitle: "산책로 노후 구간을 보수하고 안전 표지판을 설치합니다.\n조명과 난간을 보강하여 야간 산책 시 안전성을 높입니다.\n쓰레기통 설치와 유지보수를 병행하여 시민들이 쾌적하게 이용할 수 있는 환경을 제공합니다.",
            category: "환경",
            rate: 44,
            goalAmount: 5000000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding15.jpg"
        },
        {
            id: 36,
            title: "천안 초등학교 교실 방음 개선",
            map: "천안 성정동 초등학교",
            subTitle: "교실 방음 시설을 보강하여 학습 환경을 개선합니다.\n소음 차단 및 환기 시스템 개선을 통해 학생들이 집중할 수 있는 환경을 제공합니다.\n정기적인 점검과 유지보수를 통해 쾌적한 학습 공간을 지속적으로 유지합니다.",
            category: "생활·편의",
            rate: 63,
            goalAmount: 9500000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding16.jpg"
        },
        {
            id: 37,
            title: "천안 작은도서관 환경 개선",
            map: "천안 불당동 작은도서관",
            subTitle: "독서 공간 확충과 환기 개선을 통해 시민들이 편리하게 이용할 수 있도록 합니다.\n책장과 좌석 배치를 개선하고 조명을 보강하여 독서 환경을 최적화합니다.\n정기 점검과 유지보수로 안전하고 쾌적한 독서 공간을 제공합니다.",
            category: "문화·체육",
            rate: 50,
            goalAmount: 7000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding17.jpg"
        },
        {
            id: 38,
            title: "천안 지역 공원 벤치 교체",
            map: "천안 신부동 공원",
            subTitle: "노후 벤치를 교체하여 시민들이 편안하게 휴식할 수 있는 공간을 제공합니다.\n파고라, 테이블 등 주변 시설도 개선하여 쾌적한 공원 환경을 조성합니다.\n정기 점검과 유지보수를 통해 장기적으로 안전하고 편리한 공간을 제공합니다.",
            category: "환경",
            rate: 55,
            goalAmount: 6500000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding18.jpg"
        },
        {
            id: 39,
            title: "천안 초등학교 스쿨존 안전 표지판 설치",
            map: "천안 성정동 초등학교",
            subTitle: "스쿨존에 안전 표지판을 설치하여 어린이 통학로의 안전을 강화합니다.\n횡단보도, 주차 구역, 놀이터 주변 등 취약 구간에 설치하고 운전자 시인성을 높입니다.\n정기 점검과 유지보수를 통해 학생들이 안전하게 등하교할 수 있도록 지원합니다.",
            category: "교통시설",
            rate: 72,
            goalAmount: 8000000,
            timeLeft: 21,
            imgPath: "/images/fundingpage/funding19.jpg"
        },
        {
            id: 40,
            title: "천안 체육센터 운동기구 보수",
            map: "천안 원성동 체육센터",
            subTitle: "운동기구 보수를 통해 시민들이 안전하게 운동할 수 있도록 합니다.\n헬스장, 러닝머신, 웨이트 기구 등 주요 장비의 점검과 교체를 포함합니다.\n정기 점검과 유지보수로 장기적으로 안전하고 쾌적한 운동 환경을 제공합니다.",
            category: "문화·체육",
            rate: 60,
            goalAmount: 12000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding20.jpg"
        },
        {
            id: 41,
            title: "천안 놀이터 안전 펜스 설치",
            map: "천안 두정동 어린이놀이터",
            subTitle: "놀이기구 주변 안전 펜스를 설치하여 아이들이 안전하게 놀 수 있는 환경을 제공합니다.\n출입구, 그네, 미끄럼틀 등 주요 구역을 중심으로 설치하며, 안전사고 예방을 최우선으로 합니다.\n정기 점검과 유지보수로 아이들이 안심하고 놀이를 즐길 수 있도록 지속 관리합니다.",
            category: "안전",
            rate: 53,
            goalAmount: 7500000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding1.jpg"
        },
        {
            id: 42,
            title: "천안 공공도서관 조명 개선",
            map: "천안 불당동 도서관",
            subTitle: "공공도서관 내부 및 외부 조명을 개선하여 이용자 편의성을 높입니다.\n열람실, 자료실, 로비 등 주요 공간에 LED 조명을 설치하고 노후 조명을 교체합니다.\n정기 점검과 유지보수로 안전하고 쾌적한 독서 환경을 지속적으로 제공합니다.",
            category: "문화·체육",
            rate: 45,
            goalAmount: 6000000,
            timeLeft: 20,
            imgPath: "/images/fundingpage/funding2.jpg"
        },
        {
            id: 43,
            title: "천안 초등학교 운동장 보수",
            map: "천안 성정동 초등학교",
            subTitle: "운동장 노후 구간 보수와 안전망 설치로 학생들의 안전을 강화합니다.\n트랙, 체육 시설, 놀이 공간 등을 점검하고 필요 시 바닥재 교체 및 라인 재도색을 진행합니다.\n정기 점검과 유지보수로 안전한 체육 환경을 장기적으로 유지합니다.",
            category: "안전",
            rate: 67,
            goalAmount: 9500000,
            timeLeft: 22,
            imgPath: "/images/fundingpage/funding3.jpg"
        },
        {
            id: 44,
            title: "천안 공원 화단 및 조경 개선",
            map: "천안 원성동 공원",
            subTitle: "공원 화단을 정비하고 계절별 꽃을 식재하여 도시 미관을 개선합니다.\n벤치, 파고라, 산책로 주변 환경을 함께 개선하여 쾌적한 휴식 공간을 제공합니다.\n정기 점검과 유지보수로 장기적으로 안전하고 아름다운 공원 환경을 유지합니다.",
            category: "환경",
            rate: 58,
            goalAmount: 7000000,
            timeLeft: 19,
            imgPath: "/images/fundingpage/funding4.jpg"
        },
        {
            id: 45,
            title: "천안 지역 놀이터 장비 보수",
            map: "천안 두정동 놀이터",
            subTitle: "노후 놀이기구를 보수하여 아이들이 안전하게 놀 수 있는 환경을 제공합니다.\n미끄럼틀, 그네, 정글짐 등 주요 시설의 점검과 교체를 포함하며, 안전 펜스 설치도 함께 진행합니다.\n정기 점검과 유지보수로 지속적으로 안전하고 쾌적한 놀이터 환경을 제공합니다.",
            category: "안전",
            rate: 62,
            goalAmount: 8000000,
            timeLeft: 18,
            imgPath: "/images/fundingpage/funding5.jpg"
        }
    ];

    if(localStorage.getItem('펀딩데이터') == null){
        localStorage.setItem('펀딩데이터', JSON.stringify(fundingData))
    }
}

export default FundingDataInit;