<template>
  <VCard class="px-5 lg:px-0 pt-14 lg:pt-12 flex bg-purple-700 flex-col">
    <div class="flex flex-col items-center px-10 mt-10">
      <h3
        class="text-2xl text-gray-700 font-bold mb-6 ml-3 text-white text-center"
      >
        EXPERIÊNCIAS
      </h3>

      <ol class="border-l-2 border-pink-600">
        <li v-for="item in items" :key="item">
          <div class="md:flex flex-start">
            <div
              class="bg-pink-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div
              class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10"
            >
              <div class="flex justify-between mb-4">
                <a
                  class="
                    text-purple-600
                    text-sm
                    mr-10"
                >
                  {{ item.role }} <br/>
                  {{ item.company }}
                </a>
                <a
                  class="
                    text-sm
                    text-purple-600"
                >
                    {{ item.data }}
                  </a>
              </div>
              <p class="
                text-gray-700
                mb-6
                text-justify
                text-sm"
              >
                {{ item.resume }}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </VCard>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      items: [
        {
          role: "Estágio em desenvolvimento",
          company: "Clinic Tecnologia em Saúde",
          data: "07/2022 - Atual",
          resume: `Realizo o ajuste de layouts, implemento novas features e
                  soluciono problemas em projetos já existentes na empresa com
                  Vue.js. Participei no desenvolvimento de um site que cria
                  templates para o whatsapp onde utilizei Nuxt.js, Javascript,
                  Regex e Vuetify. Atualmente estou participando no
                  desenvolvimento de um prontuário médico.`,
        },
        {
          role: "Auxiliar de registro",
          company: "14º Registro de Imóveis",
          data: "11/2013 - 12/2016",
          resume: `Realizava lavratura de certidões, transcrição de documentos,
                  arquivamento de pastas e atendimento.`,
        },
        {
          role: "Jovem aprendiz",
          company: "Tribunal de Justiça SP",
          data: "01/2012 - 12/2012",
          resume: `Voluptatibus temporibus esse illum eum aspernatur, 
                  fugiat suscipit natus! Eum corporis illum nihil officiis
                  tempore. Excepturi illo natus libero sit doloremque, laborum
                  molestias rerum pariatur quam ipsam necessitatibus incidunt,
                  explicabo.`,
        },
      ],
    };
  },
};
</script>

<style>
@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -900%;
  }
}
.animate {
  width: 100%;
  animation: marquee 5s linear infinite;
  top: 50%;
  transform: translate(0, -50%);
}
.logo a {
  width: 80px;
  -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
@screen lg {
  @keyframes marquee {
    0% {
      left: -0%;
    }
    100% {
      left: -70%;
    }
  }
  .animate {
    width: 150%;
    animation: marquee 5s linear infinite;
    top: 50%;
    transform: translate(0, -50%);
  }
  .logo a {
    width: 100px;
    -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
.animate:hover {
  animation-play-state: paused;
}
.logo a:hover {
  transform: scale(1.3);
}
</style>
