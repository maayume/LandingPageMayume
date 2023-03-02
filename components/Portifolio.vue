<template>
  <VCard class="px-5 lg:px-0 pt-14 lg:pt-12 flex bg-pink-100 flex-col">
    <h1
      class="text-2xl font-bold bg-clip-text text-transparent bg-pink-600 mb-6 ml-3 text-center"
    >
      PROJETOS
    </h1>
    <div class="flex flex-wrap adjust gap-4 hover:gap-6 justify-center m-10">
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-violet-600 px-4 py-12 rounded-lg transform transition duration-500 hover:scale-90 hover:shadow-violet-600"
        v-for="item in items"
        :key="item"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ item.title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ item.obs }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <NuxtLink
            :to="item.to"
            target="_blank"
            class="px-3 py-1 text-sm bg-violet-700 text-white rounded-full hover:bg-violet-900 transition-all duration-500"
          >
            {{ item.button }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </VCard>
</template>

<script>
export default {
  name: "Portifolio",
  data() {
    return {
      items: [
        {
          title: "Dindin",
          obs: `O intuito do desafio era construir um site de educação financeira
              com tags HTML e propriedades do CSS.`,
          button: "Projeto Dindin",
          to: "https://maayume.github.io/xp42-dindin/",
        },
        {
          title: "Omma",
          obs: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
          button: "Projeto Lacrei",
          to: "https://maayume.github.io/SOUND-GARDEN/",
        },
        {
          title: "Lin Acupuntura",
          obs: `Landing page de acupuntura e massoterapia, com perfil
              profissional, serviços oferecidos e informações de contato.`,
          button: "Projeto Lin",
          to: "https://hsieh-acupuntura.netlify.app",
        },
        {
          title: "Sound Garden",
          obs: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
          button: "Projeto Sound Garden",
          to: "https://maayume.github.io/SOUND-GARDEN/",
        },
        {
          title: "La Vie",
          obs: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
          button: "Projeto La Vie",
          to: "https://maayume.github.io/SOUND-GARDEN/",
        },
        {
          title: "Lacrei",
          obs: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
          button: "Projeto Lacrei",
          to: "https://maayume.github.io/SOUND-GARDEN/",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 1650px) {
  .adjust {
    padding-inline: 10vw;
  }
}
</style>