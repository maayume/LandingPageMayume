<template>
  <div class="relative min-h-screen">
    <img  src="/background.png" class="object-cover h-full w-full absolute inset-0 z-0" />
    <div class="absolute inset-0 bg-gradient-to-b from-white via-violet-800 to-violet-800" />
    <div class="relative h-full">
      <button
        type="button"
        @click="scrollToTop"
        class="
          px-4
          py-2.5
          text-white
          bg-pink-600
          rounded
          shadow-md
          hover:bg-pink-900
          hover:shadow-lg
          focus:bg-pink-700
          focus:shadow-lg
          active:bg-pink-800
          active:shadow-lg
          transition
          duration-150
          "
        style="
          position: fixed;
          right: 1rem;
          bottom: 1rem;
          z-index: 1"
        >
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
        </svg>
      </button>
      <Header />
      <Hero />
      <About id="about" />
      <Resume id="experience"/>
      <Portifolio id="projects"/>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
}
</script>

