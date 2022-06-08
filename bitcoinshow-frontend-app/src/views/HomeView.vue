<script setup>
import InputDate from '@/components/InputDate.vue'
import CardComponent from '../components/CardComponent.vue'
</script>
<script>
import api from '../services'
export default {
  data() {
    return {
      coin: 'bitcoin'
    }
  },
  mounted() {
    this.$nextTick().then(this.getfromapi)
  }, 
  methods: {
    getfromapi() {
      api.get(`/coins/${this.coin}`).then(response => console.log(response.data.description.en))
    }
  }
}
</script>

<template>
  <main class="container mx-auto px-4 flex items-center content-center justify-center gap-8">
    <InputDate />
    <CardComponent />
  </main>
</template>
<style>
</style>
