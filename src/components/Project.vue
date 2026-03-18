<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
// 반응형
const breakpoints = {
  320: {
    slidesPerView: 1.1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}
//내용
const projects = [
  {
    id: 1,
    company: '삼구아이앤씨',
    tit: '삼구애 웹진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project01.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 2,
    company: 'TS 한국교통안전공단',
    tit: 'TS 매거진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project02.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 3,
    company: '공무원연금공단',
    tit: '공무원연금 웹진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project03.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 4,
    company: '용산구청',
    tit: '용산구 소식지',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project04.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 5,
    company: '방위사업청',
    tit: '청아람',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project05.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 6,
    company: '지방공공기관',
    tit: '지방공기업 웹진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project06.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 7,
    company: '감정평가사',
    tit: '감정평가 웹진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project07.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 8,
    company: '도로교통공단',
    tit: '신호등',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project08.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 9,
    company: '한국중부발전',
    tit: '중부가족',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project09.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 10,
    company: '고용노동부',
    tit: '월간내일',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project10.jpg', import.meta.url).href,
    route: 'Project01',
  },
  {
    id: 11,
    company: '서울시의회',
    tit: '서울의회 웹진',
    desc: '월간 웹진으로 매달 새로운 호 코딩',
    img: new URL('../assets/images/project11.jpg', import.meta.url).href,
    route: 'Project01',
  },
]
</script>
<template>
  <dl class="type02">
    <dt><span>포트폴리오</span></dt>
    <dd>
      <div>(웹진) 웹 매거진으로 잡지형태의 웹사이트</div>
      <div class="swiper-navi">
        <div class="swiper-button-prev swiper-btn"></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next swiper-btn"></div>
      </div>
    </dd>
  </dl>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="30"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{
      el: '.swiper-pagination',
      type: 'fraction',
    }"
    :breakpoints="breakpoints"
    class="swiper-project">
    <swiper-slide v-for="project in projects" :key="project.id">
      <router-link :to="{ name: project.route }">
        <div class="img-bx">
          <img :src="project.img" :alt="project.tit" />
        </div>

        <hgroup>
          <h6>{{ project.company }}</h6>
          <h4>{{ project.tit }}</h4>
          <p>{{ project.desc }}</p>

          <h5>
            작업내용 보기
            <span class="ico">
              <img src="../assets/images/icons/ico_arrow_right.png" alt="" />
            </span>
          </h5>
        </hgroup>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
