<script setup>
import InputDate from '@/components/InputDate.vue'
import CardComponent from '../components/CardComponent.vue'
</script>
<script>
import api from '../services'
export default {
  data() {
    return {
      coin: ['bitcoin', 'dacxi', 'ethereum', 'cosmos', 'terra-luna-2'],
      coins: [],
      coinData: {
        image: '',
        description: { en: '' },
        name: '',

      }
    }
  },
  mounted() {
    this.$nextTick().then(this.getfromapi)
  },
  methods: {
    getfromapi(data) {
      for (let index = 0; index < this.coin.length; index++) {
        const element = this.coin[index];
        api.get(`/coins/${element}`).then(response => {
          data = response.data
          console.log(data);
        })
      }


    }
  }
}
</script>

<template>
  <main class="mx-auto px-4 flex flex-col justify-items-center content-center justify-center gap-8">
    <InputDate />
    <template v-if="coins.length">
      <div v-for="(item, index) in getfromapi" :key="index">
        <CardComponent :coinImgSrc='item.image.thumb' :coinName="item.name" />
      </div>
    </template>
    <template v-else>
      <CardComponent />
    </template>
  </main>
</template>
<style>
</style>
