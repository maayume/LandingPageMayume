<template>
  <VCard id="about" class="px-5 lg:px-0 pt-14 lg:pt-12 md:flex justify-evenly bg-white contents flex-col text-right">
      <h1 class="font-semibold text-[30px] text-center leading-snug">
        <span class="font-bold bg-clip-text text-transparent bg-pink-600 ">SOBRE MIM</span>
      </h1>
      <v-container class="flex justify-evenly pt-12">
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
     </v-container>
  </VCard>
</template>

<style scoped>
#aboutText {
  width: 40vw;
  justify-content: flex-start;
}
</style>
