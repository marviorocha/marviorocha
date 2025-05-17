<template>
  <div class="bg-[url('src/assets/bar-footer.png')] h-96 -mt-26 bg-no-repeat absolute bg-right   w-full -z-30">
  </div>
  <div class="mx-auto max-w-7xl pl-8">
    <h2 class="text-3xl  font-bold text-[#111827] mb-8">{{ strings.testimonials.title }}</h2>
  </div>
  <div id="testimonials" class="container mx-auto max-w-5xl my-8">

    <Carousel v-bind="config" :items-to-show="1" :pause-autoplay-on-hover="true" :mouse-drag="true" :touch-drag="true"
      :wrap-around="true" :autoplay="3000">

      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="Carousel-item my-8">
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img :src="slide.image" :alt="slide.name">
            </div>
          </div>

          <p class="depoiment-text" :class="{ 'p-4 md:text-xl text-2xl prose': true }">
            <span class="text-2xl "> “</span>{{ slide.text }} <span class="text-2xl"> ”</span>
          </p>
          <p class="client-name">{{ slide.name }}</p>
        </div>
      </Slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>


</template>

<script setup>
const props = defineProps({
  strings: Object
});

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, ref } from 'vue';

const config = {
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  autoplay: 3000,
  pauseAutoplayOnHover: true,
  mouseDrag: true,
  touchDrag: true,
}

const slides = [
  {
    image: 'https://res.cloudinary.com/delqcamot/image/upload/v1747502703/marviorocha.com/clientes/client1_ggnsgt.jpg',
    text: props.strings.testimonials.user1.description,
    name: props.strings.testimonials.user1.name
  },
  {
    image: 'https://res.cloudinary.com/delqcamot/image/upload/v1747502701/marviorocha.com/clientes/client4_e4mplp.jpg',
    text: props.strings.testimonials.user2.description,
    name: props.strings.testimonials.user2.name
  },
  {
    image: 'https://res.cloudinary.com/delqcamot/image/upload/v1747502700/marviorocha.com/clientes/client2_q7m2gs.jpg',
    text: props.strings.testimonials.user3.description,
    name: props.strings.testimonials.user3.name
  }
];

// Garantir que o componente seja inicializado corretamente após a montagem
onMounted(() => {
  // Forçar atualização do componente após montagem
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 100);
});
</script>

<style scoped>
.Carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
}

.depoiment-text {
  margin: 1rem 0;
  font-style: italic;
}

.client-name {
  font-weight: bold;
}
</style>
