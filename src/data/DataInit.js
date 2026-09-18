const DATA_VERSION = '2';

function DataInit() {
    const posts = [
        ['횡단보도에 신호등 설치가 필요합니다', '등굣길에 위험한 구간이 있어요.', '안송이', 'dksthddl', '자유게시판', 12, 72, '2026.09.18. 09:30'],
        ['산책로 벤치 설치를 제안합니다', '어르신들이 쉬어 갈 수 있는 벤치가 필요합니다.', '백종진', 'qorwhdwls', '지역 제보', 18, 67, '2026.09.17. 18:20'],
        ['놀이터 리뉴얼 참여 후기', '아이들과 함께 새 놀이터를 이용해 봤습니다.', '김응석', 'rladmdtjr', '프로젝트 후기', 25, 61, '2026.09.17. 14:10'],
        ['주말 플리마켓 장소를 추천해 주세요', '주민이 함께 참여할 수 있는 장소를 찾고 있습니다.', '이서연', 'seoyeon', '자유게시판', 9, 54, '2026.09.16. 20:05'],
        ['골목길 가로등 점검이 필요합니다', '야간 통행이 많은 구간의 조명이 꺼져 있습니다.', '박민수', 'minsu', '지역 제보', 31, 83, '2026.09.16. 19:42'],
        ['공원 벤치 교체 프로젝트 후기', '노후 벤치가 교체되어 산책하기 편해졌습니다.', '최지우', 'jiwoo', '프로젝트 후기', 22, 58, '2026.09.15. 16:30'],
        ['우리 동네 개선 아이디어를 공유합니다', '유휴 공간을 작은 쉼터로 활용하면 좋겠습니다.', '정하늘', 'haneul', '자유게시판', 15, 49, '2026.09.15. 11:15'],
        ['버스정류장 쉘터 보수를 요청합니다', '비가 새는 정류장 지붕과 의자 점검이 필요합니다.', '김응석', 'rladmdtjr', '지역 제보', 37, 76, '2026.09.14. 17:55'],
        ['CCTV 개선 프로젝트 참여 후기', '야간 골목길이 전보다 안심되는 분위기로 바뀌었습니다.', '윤다은', 'daeun', '프로젝트 후기', 28, 64, '2026.09.14. 10:25'],
        ['지역 행사 자원봉사자를 모집합니다', '주말 환경 정비 행사에 함께할 분을 찾습니다.', '한유진', 'yujin', '자유게시판', 19, 45, '2026.09.13. 13:00'],
        ['자전거도로 파손 구간을 제보합니다', '보도블록 경계 부분이 파손되어 보수가 필요합니다.', '오세훈', 'sehun', '지역 제보', 42, 88, '2026.09.12. 08:40'],
        ['작은 도서관 개선 프로젝트 후기', '조명과 열람석이 정비되어 이용하기 편해졌습니다.', '문예린', 'yerin', '프로젝트 후기', 34, 70, '2026.09.11. 15:20']
    ].map(([title, content, author, authorId, category, views, likes, uploadDate], index) => ({
        id: index + 1,
        title,
        content,
        author,
        authorId,
        category,
        views,
        likes,
        uploadDate,
        comment: index === 0 ? [['김응석', '2026.09.18. 10:05', '현장 위치를 확인해 보겠습니다.']] : []
    }));

    if (localStorage.getItem('openplace-data-version') !== DATA_VERSION) {
        localStorage.setItem('통합데이터', JSON.stringify(posts));
        localStorage.setItem('자유게시판', JSON.stringify(posts.filter((item) => item.category === '자유게시판')));
        localStorage.setItem('지역 제보', JSON.stringify(posts.filter((item) => item.category === '지역 제보')));
        localStorage.setItem('프로젝트 후기', JSON.stringify(posts.filter((item) => item.category === '프로젝트 후기')));
        localStorage.setItem('openplace-data-version', DATA_VERSION);
    }

    return null;
}

export default DataInit;
