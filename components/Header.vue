<template>
  <header class="flex items-center justify-between h-20 max-w-6xl mx-auto p-7 lg:px-0">
    <NuxtLink to="/">
      <img src="/YUMIM_logo.png" class="w-35 h-20" />
    </NuxtLink>

    <div class="justify-self-end flex">
    <ul class="sm:flex items-center space-x-3 hidden">
      <template v-for="(n) in nav" :key="n">
        <li>
          <NuxtLink class="inline-block px-3 py-2 rounded-full text-violet-700 font-bold text-sm hover:text-violet-300 transition-all duration-300" :to="n.link">
            {{ n.name }}
          </NuxtLink>
        </li>
      </template>
    </ul>
      <NuxtLink to="#contact" class="px-5 py-2 text-sm bg-violet-700 text-white rounded-full hover:bg-violet-900 transition-all duration-500">
        Download CV
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
  const nav = [
    {
      name: "INÍCIO",
      link: "/",
    },
    {
      name: "SOBRE MIM",
      link: "/#about",
    },
    {
      name: "PORTIFOLIO",
      link: "/#projects",
    },
    {
      name: "CONTATO",
      link: "/#contact",
    },
  ]
</script>