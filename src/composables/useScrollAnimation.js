import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  function handleScroll() {
    document.querySelectorAll('.sec').forEach((el) => {
      const elementTop = el.offsetTop
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollTop + windowHeight > elementTop + 100) {
        el.classList.add('on')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
