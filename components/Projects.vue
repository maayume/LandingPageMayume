<template>
  <section id="projects" class="grid place-items-center h-screen">
    <h2 class="mt-10 text-5xl font-bold text-white">Portifólio</h2>
    <div class="grid grid-cols-3 place-items-center">
      <div class=" text-white text-center place-items-center text-center" v-for="n in projetos" :key="n">
        <img :src=" n.image" alt="" class="inline">
        <h3 class="text-3xl font-bold">{{ n.title }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corporis repudiandae ipsam eos fuga earum atque iusto culpa error temporibus rerum! Reprehenderit vero excepturi cupiditate repellat, rerum porro doloremque perferendis enim ipsa iure.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projetos = [
  {
    title: 'Dindin',
    image: '/Ellipse 2 .png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corporis repudiandae ipsam eos fuga earum atque iusto culpa error temporibus rerum! Reprehenderit vero excepturi cupiditate repellat, rerum porro doloremque perferendis enim ipsa iure.',
  },
  {
    title: 'Omma',
    image: '/Ellipse 2 .png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corporis repudiandae ipsam eos fuga earum atque iusto culpa error temporibus rerum! Reprehenderit vero excepturi cupiditate repellat, rerum porro doloremque perferendis enim ipsa iure.',
  },
    {
    title: 'Voluntários',
    image: '/Ellipse 2 .png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corporis repudiandae ipsam eos fuga earum atque iusto culpa error temporibus rerum! Reprehenderit vero excepturi cupiditate repellat, rerum porro doloremque perferendis enim ipsa iure.',
  },
]
</script>