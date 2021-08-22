<template>
    <main class="main">
        <Form/>
        <List v-on:scroll="scrollToElement()"/>
    </main>
</template>

<script>
import List from './List.vue'
import Form from './Form.vue'

export default {
  name: 'Main',
  components: {
    Form, 
    List
  },
  methods: {
    scrollToElement() {
      const el = document.querySelector('#app');
      if(el.scrollIntoView()) {
        console.log('scroll')
      }
      // if (el) {
      //   console.log(el)
      //   window.scrollIntoView(options);
      // }
    }
  }
}
</script>