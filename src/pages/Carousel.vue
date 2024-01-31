<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="md-body"> -->
  <carousel
    :items-to-show="2"
    :wrap-around="true"
    :transition="1000"
    :breakpoints="breakpoints"
  >
    <slide class="card_wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <Stat :item="item" />
        </template>
      </Card>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
  <!-- </div> -->
</template>

<script>
import items from '@/seeders/items'
import Card from '@/components/UI/Card'
import Stat from '@/components/UI/Stat'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: { Card, Stat, Carousel, Slide, Navigation },
  data() {
    return {
      items: items,
      breakpoints: {
        300: { itemsToShow: 1 },
        700: { itemsToShow: 2 }
      }
    }
  }
}
</script>

<style>

</style>
