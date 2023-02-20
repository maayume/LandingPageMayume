<template>
  <VCard class="px-5 lg:px-0 pt-14 lg:pt-12 flex bg-white contents flex-col">
    <!-- <div id="partners" class=" mb-12 lg:mb-20 lg:pt-12">
      <h1 class="font-bold text-3xl text-white text-brand-accent text-center lg:text-4xl">
        Ferramentas
      </h1>
      <div
        class="border border-brand-primary border-l-0 border-r-0 container lg:p-20 mt-6 overflow-hidden p-12 relative"
      >
        <div class="flex animate absolute left-0">
          <div class="flex w-50 justify-around items-center logo">
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>

          </div>
          <div class="flex w-50 justify-around items-center logo">
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>
            <a href="#">LOGO</a>

          </div>
        </div>
      </div>
      <div class="all-partners container mt-12">
        <div v-if="showAll" class="grid grid-cols-3 lg:grid-cols-5 mb-8">
          <div
            v-for="partner in this.partners"
            :key="partner"
            class="text-sm bg-brand-acccentLight border-brand-primary border p-1  text truncate"
            :title="partner"
          >
            {{ partner }}
          </div>
        </div>
        <div
          class="cursor-pointer font-bold text-brand-primary text-center text-lg"
          @click="showPartners"
        >
          <h3>{{ view }}</h3>
        </div>
      </div>
    </div> -->
    <div class="flex flex-col items-center px-10 mt-10">
      <h3 class="text-2xl text-gray-700 font-bold mb-6 ml-3 text-white text-center">EXPERIÊNCIAS</h3>

      <ol class="border-l-2 border-pink-600">
        <li>
          <div class="md:flex flex-start">
            <div class="bg-pink-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm text-justify">Estágio em desenvolvimento <br/> Clinic Tecnologia em Saúde</a>
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">07/2022 - Atual</a>
              </div>
              <p class="text-gray-700 mb-6 text-justify">Faço ajuste de layouts, implemento novas features e soluciono problemas em projetos já existentes na empresa com Vue.js. Participei do desenvolvimento de um site que cria templates para o whatsapp onde fiz o uso de Nuxt.js, Javascript, Regex, Vuetify. Atualmente estou participando no desenvolvimento de um prontuário médico.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="md:flex flex-start">
            <div class="bg-pink-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm text-justify">Auxiliar de registro <br/> 14º Registro de Imóveis</a>
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">11/2013 - 12/2016</a>
              </div>
              <p class="text-gray-700 mb-6 text-justify">Realizava lavratura de certidões, transcrição de documentos, arquivamento de pastas e atendimento.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="md:flex flex-start">
            <div class="bg-pink-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Jovem aprendiz <br/> Tribunal de Justiça SP</a>
                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">01/2012 - 12/2012</a>
              </div>
              <p class="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
            </div>
          </div>
        </li>
      </ol>
      </div>
  </VCard>
</template>

<script>
export default {
	data() {
		return {
			view: 'View All',
			showAll: false,
		}
	},
	methods: {
		showPartners() {
			if (!this.showAll) {
				this.showAll = true
				this.view = 'Show Less'
			} else {
				this.showAll = false
				this.view = 'View All'
			}
		},
	},
}
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
