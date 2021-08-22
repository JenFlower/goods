<template v-scroll="handleScroll">

  <Header />
  <Main />
</template>

<script>
import './assets/scss/index.scss'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  directives: {
    scroll: {
      // определение директивы
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  name: 'App',
  components: {
    Header,
    Main
  },
  
  methods: {
    scrollToElement() {
      window.addEventListener('scroll', () => {
        console.log('calling handleScroll');
      })
      // const el = document.querySelector('#app');
      // console.log(el)
      // if(window.scrollY > 0)  
      //   console.log('calling handleScroll');
      // if (el) {
      //   console.log(el)
      //   window.scrollIntoView(options);
      // }
    },
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'color: red;'
        )
      }
      return window.scrollY > 100
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style>
  #app {
    padding: 31px;
    background-color: rgb(250,249,247);
    /* opacity: ; */
  }
</style>