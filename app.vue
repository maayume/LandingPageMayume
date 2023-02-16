<template>
<div class="h-screen">
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-violet-500"
    ></div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
useHead({
  title: "Mayume Cristine",
  meta: [
    {
      name: "description",
      content: "Landing Page da Mayume - Desenvolvedor Front-end"
    },
    {
      property: "og:title",
      content: "Mayume Cristine",
    },
    {
      property: "og:description",
      content: "Landing Page da Mayume - Desenvolvedor Front-end",
    },
    {
      property: "og:image",
      content: "/logo.vue",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Mayume Cristine",
    }
  ]
})
</script>
