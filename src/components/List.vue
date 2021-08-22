<template>
    <section class="goods-list">
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
    </section>
</template>

<script>
import Good from './Good.vue'

export default {
  name: 'List',
  components: {
    Good
  }
}
</script>