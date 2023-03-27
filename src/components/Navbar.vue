<template>
	<div>
	  <div class="bg-[#202123]">
		<nav
		  class="
			container
			
			py-3
			px-14
			
			mx-auto
			md:flex md:justify-between md:items-center
		  "
		>
		  <div class="flex items-center justify-between">
			<router-link
			  to="/"
			  class="
				text-xl
				font-bold
				text-[#E3E5E7]
				md:text-2xl
				hover:text-blue-400
			  "
			  >Unsaved product
			</router-link>
			<!-- Mobile menu button -->
			<div @click="showMenu = !showMenu" class="flex md:hidden">
			  <button
				type="button"
				class="
				text-[#E3E5E7]
				  hover:text-gray-400
				  focus:outline-none focus:text-gray-400
				"
			  >
				<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
				  <path
					fill-rule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				  ></path>
				</svg>
			  </button>
			</div>
		  </div>
  
  
		  <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		  <ul
			:class="showMenu ? 'flex' : 'hidden'"
			class="
			  flex-col
			  mt-8
			  space-y-6
			  md:flex
			  md:space-y-0
			  md:flex-row
			  md:items-center
			  md:space-x-6
			  md:mt-0
			"
		  >
			
			<li >
				<button class="bg-transparent  text-[#E3E5E7] font-semibold hover:text-white py-2 px-4 border border-[#E3E5E7] hover:border-transparent rounded">
  Discard
				</button>
			</li>
			<li >
				<button class="bg-[#008060]  text-white font-bold py-2 px-4 rounded">
  Save
</button>
			</li>
		  </ul>
		</nav>
	  </div>
	</div>
  </template>
  <script>
  export default {
	data() {
	  return {
		showMenu: false,
	  };
	},
  };
  </script>
  
  