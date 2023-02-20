<template>
  <main class="lg:px-0 pt-10 lg:pt-12 md:flex justify-evenly pb-20">
    <div class="content self-center">
      <h1 class="whitespace-nowrap font-semibold text-[28px] lg:text-7xl md:text-5xl text-center leading-snug">
        <span class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600">Mayume Cristine</span>
      </h1>
      <p class="mt-10 text-2xl text-center font-medium">Desenvolvedora front-end júnior</p>
      <div class="mt-10 lg:mt-14 flex items-center justify-center space-x-4">
        <NuxtLink to="https://wa.me/5511959274705" target="_blank" class="px-5 py-2 text-sm bg-violet-700 text-white rounded-full hover:bg-violet-900 transition-all duration-500">
          Contate-me
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/mayume-cristine/" target="_blank" class="group text-sm overflow-hidden relative bg-gray-50 ring-1 hover:ring-transparent ring-gray-100 rounded-full transition-al duration-500">
          <div class="absolute h-full w-0 group-hover:w-full transition-all duration-500 bg-violet-700"></div>
          <span class="block px-6 py-2 transition-all duration-500 group-hover:text-white relative"> Linkedin</span>
        </NuxtLink>
      </div>
      <div class="flex space-x-2 mt-8 justify-center text-5xl font-medium">
        <span class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">Vue.js</span>
        <span class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">Nuxt.js</span>
        <span class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">Javascript</span>
      </div>
    </div>
      <img src="/mayume.png" class="object-cover inset-0 z-0 md:flex space-x-5 hidden" id="imagem"/>
  </main>
</template>

<style scoped>
#imagem {
  height: 40vh;
}
</style>
