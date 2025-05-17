<template>
  <section id="projetos" class="container p-8 mx-auto md:mt-96 max-w-7xl">
    <h2 class="text-3xl font-bold text-[#111827] mb-8">{{ strings.company.title }}</h2>
    <Carousel :items-to-show="3" :wrap-around="true" :breakpoints="{
      768: {
        itemsToShow: 2
      },
      375: {
        itemsToShow: 1
      }
    }">
      <Slide v-for="project in projects" :key="project.title">
        <div class="card bg-base-100  shadow mx-2">
          <figure>
            <img :src="project.image" :alt="project.title" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <div class="card-actions justify-end">
              <a :title="project.title" :href="project.url" target="_black" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {{ strings.company.button }}</a>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup>

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const props = defineProps({
  strings: Object
});

const projects = [
  {
    title: props.strings.company.client1.title,
    description: props.strings.company.client1.description,
    image: props.strings.company.client1.image,
    url: props.strings.company.client1.url,
  },
  {
    title: props.strings.company.client2.title,
    description: props.strings.company.client2.description,
    image: props.strings.company.client2.image,
    url: props.strings.company.client2.url,
  },
  {
    title: props.strings.company.client3.title,
    description: props.strings.company.client3.description,
    image: props.strings.company.client3.image,
    url: props.strings.company.client3.url
  },
  {
    title: props.strings.company.client4.title,
    description: props.strings.company.client4.description,
    image: props.strings.company.client4.image,
    url: props.strings.company.client4.url
  },
];
</script>