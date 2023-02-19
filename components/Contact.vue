<template>
  <VCard id="contact" class="px-5 lg:px-0 pt-14 lg:pt-12 flex bg-white contents flex-col">
    <div class="container px-6 py-12 h-full max-w-full">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div class="md:w-8/12">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="font-semibold text-[30px] text-center leading-snug">
              <span class="font-bold bg-clip-text text-transparent bg-pink-600">CONTATE-ME</span>
            </h1>
            <div class="my-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Digite seu nome"
              />
            </div>
            <div class="mb-6">
              <input
                type="password"
                class="
                  form-control
                  block w-full
                  px-4
                  py-2
                  text-xl
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Digite seu email"
              />
            </div>
              <div class="mb-6">
                <textarea
                  class="
                    form-control
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Mensagem"
                ></textarea>
              </div>
            <!-- button -->
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-violet-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-violet-900 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </VCard>
</template>
