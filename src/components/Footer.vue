<script setup>
//위로가기 버튼
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<template>
  <div class="footer-inner">
    <router-link to="/" class="btn-home btn">
      <span class="ico"> <img src="../assets/images/icons/ico_home.png" alt="" /></span> 이력서 보기
    </router-link>
    <router-link to="/info" class="btn-info btn">
      <span class="ico"> <img src="../assets/images/icons/ico_user.png" alt="" /></span> 정보 보기
    </router-link>
    <button class="btn-top btn" @click="scrollToTop">
      <span class="ico"> <img src="../assets/images/icons/ico_arrow_top.png" alt="" /></span> 맨 위로
    </button>
  </div>
</template>
