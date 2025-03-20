interface Project {
  name: string;
  description: string[];
}

interface Career {
  name: string;
  startDate: Date;
  endDate: Date | null;
  projects: Project[];
}

export const AIRI_PROJECTS: Project[] = [
  {
    name: "로보어드바이저 서비스 모니터링을 위한 어드민 페이지 개발",
    description: [
      "사내 서비스로 개발중이 로보어드바이저의 어드민 페이지의 개발을 담당",
      "서비스 전반과 시뮬레이션 화면을 담당",
      "React, Typescript, axios, react-redux, emotion을 기반으로 개발",
      "그래프는 Nivo 차트를 이용. 데이터가 복잡해지는 추후에는 유료 라이브러리 도입키로 예정함",
    ],
  },
  {
    name: "사내 자산관리 시스템 FE 개발",
    description: [
      ` 사내 자산관리 및 유지보수 기능 개발`,
      `React 를 기반으로 하여 개발`,
      `자산추가, 수정, 삭제등의 관리 기능과 관리화면 전반 담당`,
      `당시 사내에서 사용하던 자산관리 프로그램 Docswave 와 연동하는 방식`,
    ],
  },
  {
    name: "보험 추천 웹 서비스 개발",
    description: [
      "React + Typescript 기반 보험 추천 웹 서비스 개발",
      "기존 서비스가 Js를 기반으로 개발을 하여 버그핸들링에 애로사항을 느껴 Ts로 변경하여 개발",
      "React, Typescript, axios 를 기반으로 하여 개발- 전반적인 화면및 기능개발",
    ],
  },
  {
    name: "보험 추천 어플리케이션 개발/유지보수",
    description: [
      "사용자의 보험상황을 분석하여 보험을 추천해주는 어플리케이션 개발",
      "React-Native 기반의 하이브리드 어플리케이션 서비스",
      "기존 코드 유지보수 및 신규기능 개발을 담당",
      "React-Native, Javascript, Axios 등을 기반",
      "Redux는 사용하지 않고 react context로 전역변수 관리",
    ],
  },
];

export const CAREER_LIST: Career[] = [
  {
    name: "인공지능연구원",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2022-03-15"),
    projects: [],
  },
];
