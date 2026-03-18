<script setup>
import Project from '../components/Project.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <article class="sec01 sec">
    <div class="sec-inner">
      <hgroup class="tit-bx">
        <h5>웹퍼블리셔</h5>
        <h1 class="tit"><span>윤관호</span> 이력서</h1>
      </hgroup>
      <dl class="type01">
        <dt>인사 말</dt>
        <dd>
          <span class="font-large">탄탄한 코드를 그리기 위해 노력하는 웹퍼블리셔 윤관호입니다.</span><br />
          단순히 화면을 구현하는 데서 그치지 않고, 지속적인 리팩토링을 통해 코드를 더 간결하고 읽기 쉽게 다듬는 것을 중요하게 생각합니다.<br />
          또한 모든 사용자가 편리하게 이용할 수 있도록 W3C 표준을 준수한 마크업을 기반으로 작업하며, 적절한 인터랙션과 애니메이션을 더해 보다 풍부한 웹 경험을 만들어 냅니다.
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec02 sec">
    <div class="sec-inner">
      <dl class="type02 on">
        <dt><span>기술역량</span></dt>
        <dd>
          <b>HTML</b><br />
          웹표준 및 접근성을 준수하고, 시멘틱태그를 적극적으로 사용하여 마크업을 합니다.
          <br /><br />
          <b>CSS / SCSS</b><br />
          크로스 브라우징을 준수하고, 디바이스별 반응형과 SASS(SCSS)를 적극적으로 활용합니다.
          <br /><br />
          <b>JQuery / Java Script</b><br />
          이벤트 핸들링, 동적 애니메이션 등 다양한 작업을 수행합니다.
          <br /><br />
          <b>Vue.js</b><br />
          뷰 프레임워크를 사용한 컴포넌트 관리, 데이터 바인딩 및 이벤트 핸들링을 수행합니다.
          <br /><br />
          <b>라이브러리</b><br />
          <span>부트스트랩</span>에 내장된 프레임워크 및 유틸리티 클래스를 활용하여 웹사이트를 쉽게 구현할 수 있습니다.<br />
          <span>GSAP</span>를 사용해서 동적 애니메이션을 구현할 수 있습니다.<br />
          그 밖에 <span>Fullpage, Swiper, Lenis, AOS</span> 등 다양한 라이브러리를 사용한 경험이 있습니다. <br /><br />
          <b>포토샵</b><br />
          웹사이트에 사용되는 이미지를 보정 및 수정하고, 배너 등을 제작할 수 있습니다.
          <br /><br />
          <b>피그마 / XD</b><br />
          피그마 및 XD를 사용하여 템플릿 제작 및 디자이너와 협업 할 수 있습니다.
          <br /><br />
          <b>Git / Svn</b><br />
          Git과 Svn을 사용하여 버전 관리 및 협업 할 수 있습니다.
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec03 sec">
    <div class="sec-inner">
      <dl class="type02">
        <dt><span>팀 협업 및 의사소통</span></dt>
        <dd>
          <span>Git</span>이나 <span>SVN</span>과 같은 형상관리 시스템을 활용하여 코드 변경 이력을 관리하고, 다른 개발자들과의 협업 환경에서 효율적으로 작업할 수 있습니다.
          <br />
          그리고 공동 프로젝트의 원활한 구현을 위해 시멘틱 태그를 적극적으로 사용하고, 파일 및 클래스를 BEM규칙을 준수하여 네이밍합니다.
          <br /><br />
          또한 <span>피그마</span>와 <span>XD</span> 등의 디자인 협업 툴을 통해 디자이너가 전달한 시안을 확인하고, 꼼꼼히 체크하여 최대한 오차없이 구현합니다. <br /><br />
          협업에서 가장 중요한 것은 동료들과의 <span>신뢰</span>라고 생각합니다.
          <br />
          신뢰를 쌓기 위해 항상 서로를 존중하고 배려하는 태도로 업무에 임하고 있습니다.
          <br />
          공동 프로젝트를 완성하기 위해 꾸준히 소통하며, 동료들의 의견을 먼저 경청하고, 저의 의견을 제시할 때는 최대한 논리적으로 설명하고 설득하려 노력합니다. 또한 코딩 가이드 자료 정리 및 레퍼런스를
          공유하거나 디자인 작업을 지원하는 등 팀의 서포트 역할을 자처하고, 필요할 때는 리더십을 발휘해 프로젝트를 이끌기도 합니다.
          <br /><br />
          돌잔치 사회자와 해외 여행 가이드 등 다양한 아르바이트 경험을 통해 자연스럽게 사람들과 소통하는 법을 익혔고, 이러한 경험 덕분에 사내에서는 분위기 메이커 역할을 맡기도 했습니다. 워크숍과
          야유회에서 레크리에이션 진행을 맡아 조직 분위기를 활기차게 만드는 데 기여했으며, 사내 동아리 활동에도 적극적으로 참여하며 동료들과의 신뢰를 쌓아왔습니다.
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec04 sec">
    <div class="sec-inner">
      <dl class="type02">
        <dt><span>마무리 말</span></dt>
        <dd>
          <span>총 3년 5개월</span> 동안 회사에 소속되어 <span>웹 기반 게임, 관리자 사이트, 기업 홈페이지, 웹진, 뉴스레터</span> 등 다양한 프로젝트를 진행하면서 개발자, 디자이너 등 웹 분야 전문가들과
          협업해 왔습니다. 그동안 쌓아온 경험과 기술을 바탕으로 새로운 도전에 나서고자 합니다. <br /><br />
          항상 겸손을 잃지 않고, 최선을 다해 업무에 임함을 약속드리겠습니다.
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec05 sec project-sec">
    <div class="sec-inner">
      <Project />
    </div>
  </article>
</template>
