<template>
  <main class="px-5 lg:px-0 pt-14 lg:pt-12 md:flex justify-evenly pb-20">
    <div class="content self-center">
      <h1 class="font-semibold text-[38px] lg:text-7xl text-center leading-snug">
        <span class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600">Mayume Cristine</span>
      </h1>
      <p class="mt-10 text-2xl text-center font-medium">Desenvolvedora front-end</p>
      <div class="mt-10 lg:mt-14 flex items-center justify-center space-x-4">
        <NuxtLink to="#contact" class="px-5 py-2 text-sm bg-violet-700 text-white rounded-full hover:bg-violet-900 transition-all duration-500">
          Contate-me
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com" class="group text-sm overflow-hidden relative bg-gray-50 ring-1 hover:ring-transparent ring-gray-100 rounded-full transition-al duration-500">
        <div class="absolute h-full w-0 group-hover:w-full transition-all duration-500 bg-violet-700"></div>
          <span class="block px-6 py-3 transition-all duration-500 group-hover:text-white relative"> Linkedin</span>
        </NuxtLink>
      </div>
      </div>
      <img src="/mayume.png" class="object-cover inset-0 z-0 md:flex space-x-3 hidden" id="imagem"/>
  </main>
</template>

<style scoped>
#imagem {
  height: 60vh;
}
</style>
