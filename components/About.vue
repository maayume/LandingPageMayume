<template>
  <VCard class="px-5 lg:px-0 pt-14 lg:pt-12 flex bg-white contents flex-col">
    <h1 class="font-semibold text-[30px] text-center leading-snug">
      <span class="font-bold bg-clip-text text-transparent bg-pink-600">SOBRE MIM</span>
    </h1>
    <div class="flex grid-cols-1 gap-4 mt-12 justify-center">
      <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-xl">
        <img class=" md:w-1/2 h-96 md:h-auto object-cover md:w-30 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/mayume2.jpeg" alt="" />
        <div class="md:col-span-8 p-6 md:flex flex-col self-center justify-items-center m-3">
          <h1 class="font-semibold text-[35px] leading-snug">
            <span class="font-extrabold ">Olá, eu sou a <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mayume</span></span>
          </h1>
          <h1 class="font-semibold text-[18px] leading-snug pt-5 pb-5">
            <span class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600">Desenvolvedora front-end júnior</span>
          </h1>
          <p class="text-gray-700 text-base font-light text-[15px] md:text-[18px] lg:text-[22px] text-justify">
            Meu nome é Mayume Cristine, tenho 27 anos, resido na cidade de Curitiba.
            Gosto muito de praticar esportes, fazer atividades ao ar livre, hiking e assistir filmes.
            Tenho uma formação recente em Desenvolvimento full stack.
            Comecei a minha jornada com 16 anos como jovem aprendiz no
            Atualmente sou estagiária de desenvolvimento web e curso o 6º período de engenharia mecatrônica
            Me considero uma pessoa determinada, proativa
          </p>
        </div>
      </div>
    </div>
      <!-- <v-container class="flex justify-evenly pt-12">
      <img src="/Ellipse3.png" class="object-cover inset-0 z-0 md:flex space-x-3 justify-start pb-12 hidden" id="imagem"/>
      <div class="text-left">
        <h1 class="font-semibold text-[30px] leading-snug">
          <span class="font-extrabold ">Olá, eu sou a Mayume</span>
        </h1>
        <h1 class="font-semibold text-[18px] leading-snug pt-5 pb-5">
          <span class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600">Desenvolvedora front-end</span>
        </h1>
        <p width="50vw" class="tracking-wide text-justify" id="aboutText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet beatae porro dicta rerum facilis vel ratione unde at eos corrupti temporibus ut perferendis dolorum nisi explicabo, expedita asperiores accusantium. Nemo explicabo omnis vero. Veritatis magnam cum, iusto qui tenetur maxime aut sapiente, libero dicta ex quasi. Saepe maiores natus error, inventore, quidem iusto ex aliquam necessitatibus ab distinctio porro ea nesciunt nam expedita quo fugit placeat aut perspiciatis quam accusamus odit? Impedit corporis a eum blanditiis modi voluptatum, quae omnis minima rem deleniti iste non sit obcaecati ipsa porro quo deserunt expedita ducimus </p>
      </div>
     </v-container> -->
  </VCard>
</template>

<style scoped>
#aboutText {
  width: 40vw;
  justify-content: flex-start;
}
</style>
