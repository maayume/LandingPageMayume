<template>
  <VCard class="lg:px-0 pt-14 lg:pt-12 flex bg-violet-250 flex-col">
    <div class="font-semibold text-[30px] text-center leading-snug">
      <h3 class="font-bold bg-clip-text text-transparent bg-pink-600">
        SOBRE MIM
      </h3>
    </div>
    <div class="flex grid-cols-1 gap-4 mt-12 justify-center">
      <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-xl">
        <img
          class="
            md:w-1/2
            h-96
            md:h-auto
            object-cover
            md:w-30
            rounded-t-lg
            md:rounded-none md:rounded-l-lg
          "
          src="/mayume2.jpeg"
          alt="Imagem de uma mulher morena de olhos castanhos e cabelo comprido"
        />
        <div
          class="
            md:col-span-8
            p-6
            md:flex
            flex-col
            self-center
            justify-items-center
            m-3
          "
        >
          <div class="font-semibold text-[35px] leading-snug">
            <span class="font-extrabold">
              Olá, eu sou a
              <span
                class="
                  text-transparent
                  bg-clip-text bg-gradient-to-r
                  to-emerald-600
                  from-sky-400
                "
                >Mayume</span
              ></span
            >
          </div>
          <div class="font-semibold text-[18px] leading-snug pt-5 pb-5">
            <span
              class="
                font-extrabold
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-violet-600
                via-pink-600
                to-amber-600
              "
            >
              Desenvolvedora front-end júnior
            </span>
          </div>
          <p
            class="
              text-gray-700 text-base
              font-light
              text-[15px]
              md:text-[18px]
              lg:text-[22px]
              text-justify
            "
          >
            Meu nome é Mayume Cristine, tenho 27 anos, resido na cidade de
            Curitiba. Gosto muito de praticar esportes, fazer atividades ao ar
            livre, hiking e assistir filmes. Tenho uma formação recente em
            Desenvolvimento full stack. Comecei a minha jornada profissional aos
            16 anos como jovem aprendiz no Tribunal de Justiça e desde então
            venho trabalhando para alcançar meus objetivos Atualmente sou
            estagiária de desenvolvimento web e curso o 6º período de engenharia
            mecatrônica. Me considero uma pessoa determinada, proativa,
            colaborativa e que possui uma boa comunicação.
          </p>
        </div>
      </div>
    </div>
  </VCard>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped>
#aboutText {
  width: 40vw;
  justify-content: flex-start;
}
</style>
