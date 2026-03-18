<script setup>
import { onMounted } from 'vue'
import Lenis from 'lenis'
import InfoCont from '@/components/InfoCont.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>

<template>
  <main>
    <section class="container">
      <router-view />
    </section>

    <aside>
      <InfoCont />
    </aside>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
