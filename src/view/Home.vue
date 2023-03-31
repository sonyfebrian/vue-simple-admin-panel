<template>
  <nav id="header" class="fixed gradient w-full z-30 top-0 text-white">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <div class="pl-4 flex items-center">
          <a
            class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img src="../assets/log_navbar.png" alt="logo" />
            
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="inline-block py-2 px-4 text-[#024D94] text-xs font-normal no-underline"
                href="#"
                >Home</a
              >
            </li>
            <li class="mr-3">
              <a
              class="inline-block py-2 px-4 text-[#024D94] text-xs font-normal no-underline"
                href="#"
                >About</a
              >
            </li>
            <li class="mr-3">
              <a
              class="inline-block py-2 px-2 text-[#024D94] text-xs font-normal no-underline"
                href="#"
                >Features</a
              >
            </li>
            <li class="mr-3">
              <a
              class="inline-block py-2 px-4 text-[#024D94] text-xs font-normal no-underline"
                href="#"
                >Collections</a
              >
            </li>
            <li class="mr-3">
              <a
              class="inline-block py-2 px-4 text-[#024D94] text-xs font-normal no-underline"
                href="#"
                >Contact</a
              >
            </li>

          </ul>
          <button
            id="navAction"
            class="lg:mx-0 hover:underline bg-[#024D94] text-white text-base font-semibold leading-5 rounded mt-4 lg:mt-0 py-2 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </div>
  </nav>
  <section class="text-gray-600 body-font">
  <div class="container mx-auto gradient flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 ml-4 md:mb-0 items-center text-center">
        <h1 class="sm:text-4xl text-7xl mb-4 font-black text-white">Let's Keep Your
          <br class="hidden lg:inline-block ">Data Safe
        </h1>
        <p class="mb-8 text-white text-base font-semibold leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
tellus. Lorem ipsum dolor sit amet.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-[#024D94] bg-[#F8D171] border-0 py-2 px-6 focus:outline-none  rounded text-base">Know More</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-visible mr-40">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
    </div>
  </section>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="sm:text-4xl text-6xl mb-4 font-black text-[#024D94]">About The Protem
        </h1>
        <p class="mb-8 font-normal text-base leading-7 text-[#555555]">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="rounded flex h-full items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-[#024D94]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-normal text-base leading-7 text-[#555555]">Nunc quis justo sed odio scelerisque.</span>
        </div>
        <div class="rounded flex py-4 h-full items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-[#024D94]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-normal text-base leading-7 text-[#555555]">Duis tristique lorem non risus dignissim.</span>
        </div>
        <div class="flex justify-center">
          <button class="inline-flex text-[#024D94] bg-[#F8D171] border-0 py-2 px-6 focus:outline-none  rounded text-base">Know More</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
    </div>
  </section>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-1 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="font-black text-6xl text-[#024D94] mb-10">Future of The Protem</h1>
        
        <p class="lg:w-2/3 mx-auto font-normal text-base text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="../assets/icon_sto.png">
            <div class="flex-grow sm:pl-8">
              <h2 class="font-bold text-[#024D94] text-2xl">Data Stored</h2>
              <p class="mb-4 font-normal text-base text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
            
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="../assets/icon_lock.png">
            <div class="flex-grow sm:pl-8">
              <h2 class="font-bold text-[#024D94] text-2xl">Fingerprint lock</h2>
              <p class="mb-4 font-normal text-base text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="../assets/icon_idea.png">
            <div class="flex-grow sm:pl-8">
              <h2 class="font-bold text-[#024D94] text-2xl">Innovative Idea</h2>
              <p class="mb-4 font-normal text-base text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="../assets/icon_lock.png">
            <div class="flex-grow sm:pl-8">
              <h2 class="font-bold text-[#024D94] text-2xl">Password Protect</h2>
              <p class="mb-4 font-normal text-base text-[#555555]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="flex flex-col text-center w-full mt-3 bg-[#02407B]">
      <h1 class="sm:text-lg text-base font-normal p-2 text-white">© 2021. Protem. All Rights Reserved. </h1>
    </div>
  </footer>
</template>

<script>

export default {
  };
</script>

<style>
.gradient {
  background: linear-gradient(to right, #024D94 0%, #024D94 50%, #F8D171 50%, #F8D171 100%);
      }
</style>