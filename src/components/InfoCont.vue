<script setup>
// 아이콘 import
import icoUser from '@/assets/images/icons/ico_user.png'
import icoMail from '@/assets/images/icons/ico_mail.png'
import icoCall from '@/assets/images/icons/ico_call.png'
import icoGit from '@/assets/images/icons/ico_git.png'
import icoArrow from '@/assets/images/icons/ico_arrow_right.png'

// 프로필 정보
const profileInfo = [
  { icon: icoUser, content: '윤관호 / 1996.04.12' },
  { icon: icoMail, content: 'ddw6229@naver.com', link: 'mailto:ddw6229@naver.com' },
  { icon: icoCall, content: '010-9506-1006', link: 'tel:010-9506-1006' },
  { icon: icoGit, content: 'https://github.com/youngwanho', link: 'https://github.com/youngwanho' },
]

// 학력, 경력, 스킬, 자격증
const abilities = [
  {
    tit: '학력',
    list: [
      { name: '자연과학고등학교(식물학)', period: '2015.02 졸업' },
      { name: '목포대학교(간호학)', period: '2015.03 ~ 2020.06 중퇴' },
      { name: '학점은행제(컴퓨터공학 + 관광경영학)', period: '2024.02 ~ 현재' },
    ],
  },
  {
    tit: '경력',
    list: [
      { name: '경성문화사', period: '2023.11 ~ 2026.02' },
      { name: '제이브로 컴퍼니', period: '2022.05 ~ 2023.06' },
    ],
  },
  {
    tit: '사용 스킬',
    list: [
      { name: 'HTML' },
      { name: 'CSS / SCSS' },
      { name: 'JQuery / Java Script' },
      { name: 'Vue.js' },
      { name: '라이브러리(부트스트랩, GSAP 등)' },
      { name: '포토샵' },
      { name: '피그마 / XD' },
      { name: 'Git / Svn' },
    ],
  },
  {
    tit: '자격증',
    list: [
      { name: '웹디자인 기능사' },
      { name: 'GTQ 1급(포토샵)' },
      { name: 'GTQI 1급(일러스트)' },
      { name: 'JLPT N1(일본어)' },
      { name: '레크레이션 강사 1급' },
      { name: '웃음치료사 1급' },
      { name: '펀리더쉽 지도자 1급' },
      { name: '운전면허 1종' },
    ],
  },
]
</script>

<template>
  <div class="info-cont">
    <!-- 프로필 -->
    <div class="profile-wrap">
      <div class="img-bx">
        <img src="@/assets/images/profile.png" alt="프로필 사진" />
      </div>
      <div class="list-wrap">
        <ul>
          <li v-for="(item, i) in profileInfo" :key="i">
            <span class="ico"><img :src="item.icon" alt="" /></span>
            <p v-if="!item.link">{{ item.content }}</p>
            <p v-else>
              <a :href="item.link" target="_blank">{{ item.content }}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 학력, 경력, 스킬, 자격증 -->
    <div class="ability-wrap">
      <div class="list-bx" v-for="(section, idx) in abilities" :key="idx">
        <h3>{{ section.tit }}</h3>
        <ul>
          <li v-for="(item, i) in section.list" :key="i">
            <p>
              {{ item.name }}
              <small v-if="item.period">{{ item.period }}</small>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
