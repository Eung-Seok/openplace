# OpenPlace

[![CI](https://github.com/Eung-Seok/openplace/actions/workflows/ci.yml/badge.svg?branch=portfolio-v2)](https://github.com/Eung-Seok/openplace/actions/workflows/ci.yml?query=branch%3Aportfolio-v2)

> 시민이 지역의 공공시설 개선안을 제안하고, 공감과 펀딩으로 변화를 만드는 참여형 플랫폼

![OpenPlace 메인 화면](public/images/mainpage/main1.png)

**Live Demo:** [https://eung-seok.github.io/openplace/](https://eung-seok.github.io/openplace/)

## 프로젝트 소개

OpenPlace는 주민이 생활 속 불편을 제안하고, 다른 시민이 커뮤니티와 펀딩에 참여해 공공시설 개선을 함께 만들어 가는 프론트엔드 프로젝트입니다. 제안 탐색부터 펀딩 참여, 진행 상황 확인, 후기 공유까지 하나의 사용자 흐름으로 구성했습니다.

## 핵심 기능

- **펀딩 탐색:** 진행 중인 프로젝트 목록, 카테고리·지역·검색어 필터, 상세 페이지
- **펀딩 참여:** 목표 금액과 달성률 확인, 참여 금액 입력 및 결제 UI
- **커뮤니티:** 일반·제보·후기 게시판, 검색, 글 작성·수정·상세 조회
- **회원 기능:** 로그인·회원가입·아이디/비밀번호 찾기, 마이페이지와 정보 수정
- **프로젝트 제안:** 신규 펀딩 프로젝트 등록 화면
- **프로토타입 데이터:** localStorage 기반 데이터 초기화와 화면 상태 유지

## 담당 구현

- 로그인·회원가입·회원정보 수정·회원탈퇴 흐름과 중복 아이디 검증
- 커뮤니티 검색·정렬, 작성자·관리자 권한에 따른 수정·삭제, 댓글 작성 시 로그인 연계
- 펀딩 목록 검색·카테고리·페이지 이동과 상세 화면의 후원자 수 상태 갱신
- 기능 브랜치 통합, 라우팅 경로 정리와 GitHub Pages 배포 구성

## 사용자 흐름

~~~mermaid
flowchart LR
    A[지역 문제 탐색] --> B[펀딩 상세 확인]
    B --> C[펀딩 참여]
    C --> D[진행 상황 확인]
    D --> E[커뮤니티 후기 공유]
~~~

## 기술 스택

| 영역 | 기술 |
|---|---|
| Frontend | React 19, JavaScript |
| Routing | React Router 7 |
| UI | React Bootstrap, Bootstrap 5, Styled Components, React Icons |
| State/Data | React Hooks, localStorage |
| Test | React Testing Library, Jest DOM |
| Deploy | GitHub Pages, gh-pages |

## 화면 구성

| 영역 | 주요 화면 |
|---|---|
| Home | 서비스 소개, 진행 중인 펀딩, 커뮤니티 미리보기 |
| Funding | 목록, 검색, 카테고리 필터, 등록, 상세, 참여 |
| Community | 게시판별 목록, 검색, 작성, 수정, 상세 |
| Account | 로그인, 회원가입, 계정 찾기, 마이페이지 |
| About | 서비스 미션·비전과 시민 참여 프로세스 |

## 폴더 구조

~~~text
openplace/
├── public/
│   └── images/              # 서비스 이미지
├── src/
│   ├── components/          # 공통·메인 컴포넌트
│   ├── fundingpage/         # 펀딩 목록·상세·참여
│   ├── communitypage/       # 커뮤니티 게시판
│   ├── loginpage/           # 인증 화면
│   ├── pages/               # 홈·소개·마이페이지
│   └── data/                # 프로토타입 초기 데이터
├── package.json
└── README.md
~~~

## 실행 방법

~~~bash
git clone https://github.com/Eung-Seok/openplace.git
cd openplace
npm install
npm start
~~~

브라우저에서 `http://localhost:3000`으로 접속합니다.

### 프로덕션 빌드

~~~bash
npm run build
~~~

### GitHub Pages 배포

~~~bash
npm run deploy
~~~

## 프로젝트 포인트

- 컴포넌트 단위로 화면을 분리하고 React Router로 전체 사용자 흐름을 연결했습니다.
- 펀딩과 커뮤니티를 하나의 서비스 안에서 탐색할 수 있도록 정보 구조를 설계했습니다.
- 백엔드 없이도 주요 시나리오를 확인할 수 있도록 localStorage 기반 프로토타입을 구현했습니다.
