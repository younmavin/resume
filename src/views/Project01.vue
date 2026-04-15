<script setup>
import Project from '@/components/Project.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <article class="sec01 sec">
    <div class="sec-inner">
      <router-link to="/" class="btn-home">
        <span class="ico"> <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_home.png" alt="" /></span> 이력서 보기
      </router-link>
      <hgroup class="tit-bx">
        <h5>삼구아이앤씨</h5>
        <h1 class="tit"><span>삼구애</span> 웹진</h1>
      </hgroup>
      <ol>
        <li>
          <h6><span>01. </span>참여율</h6>
          <p><span>마크업 100%</span><span>디자인 20%(서브페이지)</span></p>
        </li>
        <li>
          <h6><span>02. </span>사용 스킬</h6>
          <p>HTML / CSS / JavaScript / GSAP</p>
        </li>
        <li>
          <h6><span>03. </span>제작 기간</h6>
          <p>7일 (메인페이지 + 서브페이지 15~20개)<br />매달 새로운 호 코딩</p>
        </li>
      </ol>
    </div>
  </article>
  <article class="sec02 sec">
    <div class="sec-inner">
      <dl class="type02 on">
        <dt><span>작업내용</span></dt>
        <dd>
          <h6>메인 페이지</h6>
          <div class="img-bx">
            <img src="../assets/images/project01_01.jpg" alt="" />
          </div>
          <p><span>GSAP ScrollTrigger</span>을 사용하여 스크롤 시 카드 콘텐츠가 좌우로 흔들리는 애니메이션을 주었습니다.</p>
          <div class="img-bx">
            <img src="../assets/images/project01_02.jpg" alt="" />
          </div>
          <p><span>GSAP ScrollTrigger</span>을 사용하여 스크롤 시 카드 콘텐츠가 좌우로 흔들리는 애니메이션을 주었습니다.</p>
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec03 sec project-sec">
    <div class="sec-inner">
      <Project />
    </div>
  </article>
</template>
