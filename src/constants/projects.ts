export interface Project {
  name: string;
  description: string;
  content: string;
  summary?: string[];
  thumbnail?: string;
  skills: string[];
  url?: string;
  git?: string;
  image?: string[];
}

export const PROJECT_LIST: Project[] = [
  {
    name: "개인블로그",
    description: "개인적으로 개발관련 글을 정리하기 위해 만든 블로그",
    content: `평소 개인적인 생각을 정리하거나 알게된 사실들을 정리할 때 Obisidian을 쓰면서 확장툴 중 git에 연동시켜 자동으로 커밋&푸시를 해주는 확장툴을 쓰고있었는데, 문득 이 툴을 이용하여 git에 푸쉬가 될때마다 자동으로 블로그에 글이 써지는 시스템을 구축하면 좋지 않을까? 하는 생각에 만들게 된 블로그입니다.
    
    Obisidan에서 사용하고 있던 마크다운 기법을 블로그에 그대로 적용시키기 위해 Contentlayer를 사용해서 내부에 자동으로 렌더링되게 제작하였고, 모바일 환경이나 다크모드의 구축을 위해서 처음부터 짠 프로젝트라는 의미가 있었습니다.
    
    다만, 실제로 블로그에 작성하기 위해서는 평소에 쓰는 것보다 훨씬 다듬어 써야 하기 때문에 당초 생각대로 운용하기 힘들었던 점과, Next에 styled-components를 적용시키는 과정에서 시행착오가 많아 아쉽기도 한 프로젝트였습니다.`,
    summary: [
      `개인적으로 개발관련 글을 정리하기 위해 만든 블로그`,
      `기록용으로 사용하고 있는 Obsidian으로 글을 쓰면 편리하겠다는 생각에 제작`,
      `Next + Styled-components + contentlayer 기반으로 제작`,
      `다크모드 및 모바일 지원`,
    ],
    thumbnail: "/projects/blog/light_desktop.png",
    url: "https://zidru-blog.vercel.app/",
    git: "https://github.com/khil94/obsidian-blog/tree/master",
    image: [
      "/projects/blog/dark_mobile.png",
      "/projects/blog/dark_desktop.png",
      "/projects/blog/light_desktop.png",
      "/projects/blog/light_content.png",
    ],
    skills: ["Next", "Typescript", "Styled-components", "React", "Contentlayer", "React-redux"],
  },
  {
    name: "게임 전적 검색 사이트",
    description: "게임의 전적을 확인할 수 있는 사이트",
    content: `게임 리그 오브 레전드의 전적 검색 사이트를 한 번 만들어보자 하는 생각에 시작한 프로젝트입니다. 아무래도 게임이 세계적으로 흥행하고 있는 게임이기도 하고, 관련 사이트들의 퀄리티가 굉장히 뛰어나 제공되는 api의 퀄리티가 좋을 것이라 생각해 시작한 프로젝트입니다.

    처음에는 단순히 한 달 정도의 기간을 생각하여 단순 전적검색과 관련된 기능만을 제공할 계획이었지만, 제작중 api의 사양이 예고없이 변하거나, 타 사이트들의 기능은 자체적으로 게임 데이터를 수집하여 만든 기능들이 다수 있다는 것을 알게 되어 추가적으로 듀오찾기 기능/사용자 관리 기능까지 추가된 케이스 입니다. 

    사용자 관리는 JWT로 하였으며 JWT를 통한 토큰관리의 중요성과 어려움을 실감하게 되기도 한 프로젝트였습니다. 특히 리프레시 토큰 관련된 로직을 짜며 시행착오를 겪은 부분이 생각나는 프로젝트였습니다.

    다만 Scss의 여러 기능들을 충분히 활용하지 못한것은 아쉬움으로 남기도 했습니다. 특히 mixin기능은 적극적으로 활용했으면 생산성을 크게 높일 수 있을 것이라 생각해 더욱 아쉬움이 남습니다.
`,
    summary: [
      `게임 'League of Legends'의 간단한 전적 검색 사이트를 제작`,
      `FE, BE 두 명이 팀이 되어 만들었으며, FE를 담당하였음`,
      `전적검색/듀오찾기 기능 등`,
      `JWT를 기반으로 사용자 관리`,
    ],
    thumbnail: "/projects/lolstat/main.png",
    git: "https://github.com/khil94/record-fe",
    image: [
      "/projects/lolstat/main.png",
      "/projects/lolstat/find_duo.png",
      "/projects/lolstat/expired_duo.png",
      "/projects/lolstat/record.png",
    ],
    skills: ["React", "Typescript", "SWR", "Axios", "Sass", "Vite"],
  },
  {
    name: "보드게임 기록 관리 웹",
    description: "보드게임의 전적 및 통계를 관리해주는 서비스",
    content: `    친구들과 자주하는 마작의 결과를 기록하고 통계를 낼 서비스를 만들면 좋겠다는 생각이 들어 만들게 된 서비스입니다. 
    
    실시간으로 결과를 기록하고 통계를 확인할 필요가 있어 db를 직접 구축하여 배포하기보다 real-time firebase를 통해 구축하였습니다. 특히 간단한 수치만을 다루기 때문에 더 적합했습니다. Firebase를 통한 실시간 데이터 관리로 데이터 수정이 일어난 직후 바로 수정이 반영된 데이터를 사용할 수 있는 점이 큰 매력이었습니다. 

    또 TailwindCss를 처음사용하게 됐는데, CSS-in-JS방식에서 탈피할 수 있으면서 굉장히 간편한 사용방법에 크게 감탄했습니다. 특히 Next13으로 오며 React18의 Server component를 적극적으로 활용하게 되었는데, css-in-js방식은 이를 공식적으로 지원하지 않아 여러 꼼수를 썼어야 했었던 점을 tailwind를 이용하며 간편하게 해결할 수 있다는 점이 특히 큰 매력으로 다가왔습니다.

    또 이번 서비스도 모바일에서 활용할 일이 많아 모바일-데스크탑 순으로 작업을 하게 되었는데 많은 곳에서 말하는 모바일-데스크탑 순으로 작업을 하라는 말의 의미를 진정으로 알게된 프로젝트이기도 했습니다. 확실히 이전에 급하게 모바일 대응을 하려고 했을떄보다 훨씬 간편하게 데스크탑 대응이 가능했습니다.
    
    `,
    summary: [
      `친구들과 즐겨하는 보드게임인 마작의 기록을 위해 만든 간단한 웹 서비스`,
      `모바일 및 다크모드 지원`,
      `firebase의 실시간 데이터 관리 지원`,
      `기록의 여러가지 차트나 통계를 확인할 수 있게 만들었다.`,
      `어디까지나 지인들과 쓸 예정이기에 vercel로 간단히 배포 후, 유저 관리 기능은 만들지 않았다.`,
    ],
    thumbnail: "/projects/mahjong/thumbnail.png",
    url: "https://mahjong-record.vercel.app/",
    git: "https://github.com/khil94/mahjong-record/tree/master",
    image: [
      "/projects/mahjong/main.png",
      "/projects/mahjong/main_nav.png",
      "/projects/mahjong/chart.png",
      "/projects/mahjong/personal_chart.png",
      "/projects/mahjong/record_result.png",
    ],
    skills: ["Next", "Typescript", "Tailwind", "React", "Firebase", "Axios", "ApexChart"],
  },
  {
    name: "포트폴리오",
    description: "나를 표현하기 위한 포트폴리오",
    content: `지금 보고 계신 웹 서비스로, 이전에 사용하던 포트폴리오 사이트가 너무 낡은 것 같아 최근에 사용한 기술들을 적용해 처음부터 만들고자 하였습니다.
    
    우선 기본적으로 full-page혹은 one-page형식으로 만들었는데, 이를 직접 구현해보며 이런 페이지가 어떻게 구동하는지 조금이나마 알게된 것 같습니다. 비록 애니메이션에 대한 부분까지는 미구현이지만 기본은 구현된 것 같아 다행스럽게 생각합니다.
    
    또 Carousel을 직접 구현하게 되었는데, inifinite carousel방식을 직접 구현하려니까 생각보다 엄청난 공수가 들었습니다. 비록 이쁘게 구현된것 같지는 않지만, 기능 자체는 구현하였고 이를 통해 Carousel의 동작방식에 대해서도 이해할 수 있는 기회가 되었습니다.
    
    `,
    summary: [
      `본 포트폴리오 서비스`,
      `기존에 쓰던 포트폴리오가 별로 보기 좋지 않아 새로 제작`,
      `너무 디자인에 연연하지 않고 정보를 전달하는 목적으로 제작`,
      `Carousel을 직접구현`,
    ],
    thumbnail: "/projects/portfolio/thumbnail.png",
    skills: ["Next", "Typescript", "Tailwind", "React"],
    image: [
      "/projects/portfolio/thumbnail.png",
      "/projects/portfolio/skill_section.png",
      "/projects/portfolio/project_section.png",
      "/projects/portfolio/project_detail.png",
      "/projects/portfolio/contact_section.png",
    ],
  },
];
