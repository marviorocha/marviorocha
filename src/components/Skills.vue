<template>
  <div id="skills" class="container mx-auto my-16 p-8 max-w-7xl">
    <h2 class="text-3xl font-bold text-[#111827] mb-8">{{ strings.skills.title }}</h2>
    <div class="grid grid-cols-1 p-8 md:grid-cols-3 gap-6">
      <div v-for="(skill, index) in skills" :key="skill.name" class="card bg-base-100 shadow p-6">
        <div class="flex items-center gap-3 mb-4">
          <img :src="skill.icon" class="w-8 h-8" />
          <h3 class="font-semibold text-neutral">{{ skill.name }}</h3>
        </div>
        <progress :class="`progress w-full ` + skill.color" :value="animatedLevels[index]" max="100"></progress>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({
  strings: Object,
});

const skills = [
  { name: "Ruby On Rails", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499615/marviorocha.com/icons/ruby_koic4q.svg", level: 90, color: "progress-secondary" },
  { name: "Python", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499614/marviorocha.com/icons/python_nuq6wg.svg", level: 50, color: "progress-warning" },
  { name: "Flutter", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499612/marviorocha.com/icons/flutter_xiot1p.svg", level: 50, color: "progress-info" },
  { name: "PostgreSQL / MySQL", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499612/marviorocha.com/icons/postgresql_rbbcjw.svg", level: 75, color: "progress-primary" },
  { name: "Vue", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499613/marviorocha.com/icons/vue_rnpsd7.svg", level: 30, color: "progress-accent" },
  { name: "Docker", icon: "https://res.cloudinary.com/delqcamot/image/upload/v1747499613/marviorocha.com/icons/docker-compose_lbnlh6.svg", level: 80, color: "progress-primary" },
];

// Ref para armazenar os valores animados
const animatedLevels = ref(skills.map(() => 0));

onMounted(() => {
  skills.forEach((skill, index) => {
    const interval = setInterval(() => {
      if (animatedLevels.value[index] < skill.level) {
        animatedLevels.value[index]++;
      } else {
        clearInterval(interval);
      }
    }, 30); // controla a velocidade da animação (15ms por incremento)
  });
});
</script>
