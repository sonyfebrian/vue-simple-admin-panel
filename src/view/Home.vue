<template>
  <div class="bg-[#F6F6F7]">
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
	      <div className="pt-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
            <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex flex-col rounded xl:flex-row justify-start xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div className="xl:w-3/5 rounded flex flex-col sm:flex-row xl:flex-col justify-start items-start bg-white dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                      <div class="w-full">
                        <label class="font-normal text-sm font-sans">
                          Title
                        </label>
                        <input class="w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Short sleeve t-shirt">     
                      </div>  
                      <label class="font-normal text-sm mb-1">
                        Description
                        </label>
                      <div class="mb-4 w-full bg-gray-50 rounded border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div class="flex justify-between items-center py-2 px-2 border-b dark:border-gray-600">
                              <div class="flex flex-wrap items-center">
                                  <div class="flex items-center space-x-1 sm:pr-4 border-r-2">
                                      <label class="font-semibold text-sm text-[#5C5F62] mb-1 mr-10">
                                        Paragraph
                                      </label>
                                      <button type="button" class="text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill fill-[#5C5F62]" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
                                      </button>
                                  </div>
                                  
                                  <div class="flex items-center space-x-1 sm:pr-4">
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <span class="font-bold">B</span>
                                      </button>
                                      <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <span class="font-bold italic">I</span>
                                      </button>
                                      <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <span class="underline font-bold">U</span>
                                      </button>
                                      <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <span class="underline font-bold">A</span>
                                      </button>
                                      <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill fill-[#5C5F62]" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg></button>
                                      
                                  </div>
                                  <div class="flex flex-wrap items-center space-x-1 border-x-2 pr-3 sm:pl-4">
                                    <button class="pr-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                      </svg></button>
                            
                                      <button type="button" class="pr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-[#5C5F62] stroke-white">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>

                                      </button>
                                      <button type="button" class=" pr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-[#5C5F62] stroke-white">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                      </button>
                                      <button type="button" class="pr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                        </svg>

                                      </button>
                                      <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill fill-[#5C5F62]" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
                                      </button>
                                      
                                  </div>
                                  <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                   
                                      <button type="button" class=" text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>

                                      </button>
                                      
                                  </div>
                                  
                              </div>
                              <button type="button"  class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 border bg-white px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                              </button>
                              
                          </div>
                          <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                              
                              <textarea id="editor" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"></textarea>
                          </div>
                      </div>
                    </div>
                    <div className="p-8 bg-white rounded dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                      <div class="flex justify-start">
                      <div>
                        <h2 class="text-base font-semibold title-font mb-5">Product organization</h2>
                      </div>
                      <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-[#6D7175] stroke-white">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                      </div>
                    </div>
                        
                    <div class="relative mb-4">              
                      <label class="font-normal text-sm">Product category</label>
                      <select id="select" placeholder="Search product categories" v-model="selectedOption" @change="showModal" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option class="text-inherit text-sm text-gray-100" value="" disabled selected>Search product categories</option>
                        <option value="option1" class="checked:bg-[#7ABCF4] text-sm">Categori A</option>
                        <option value="option2" class="text-sm">Categori B</option>
                        <option value="option3" class=" text-sm">Categori C</option>
                        <option value="option4" class="text-sm mt-1 text-[#0587FF]">Add Another category</option>
                      </select>
                    </div>
                    <div class="relative mb-4">
                      <label class="font-normal text-sm">Product Brand</label>
                      <input placeholder="e.g., T-Shirt" type="text" class="w-full bg-white text-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label class="font-normal text-sm">Collections</label>
                        <input type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                    <div class="flex justify-between">
                      <div>
                        <label  class="font-normal text-sm">Tags</label>
                      </div>
                      <div> 
                        <label class="leading-7 font-normal text-sm text-[#2C6ECB]">Manage</label>
                      </div>
                    </div>
                        <input type="text" placeholder="Find or create tags" class="w-full text-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-10 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
            <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex flex-col rounded xl:flex-row justify-start xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div className="xl:w-3/5 rounded flex flex-col sm:flex-row xl:flex-col justify-start items-start bg-white dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                      <label class="font-semibold leading-5 text-sm my-2 border-b-2 w-full border-gray-200">
                        Inventory
                      </label>
                      
                      
                        <label class="inline-flex items-center">
                          <input
                            type="checkbox"
                            class="form-checkbox h-5 w-5 text-indigo-600"
                            v-model="isCheckedInventory"
                          />
                          <span class="ml-2 text-sm text-gray-700">Track quantity</span>
                        </label>
                        <div v-if="isCheckedInventory" class="mt-2 w-full">
                          <div class="border-t-2 w-full border-gray-300 p-2">
                              <div class="h-24 grid grid-cols-2">
                                <div>
                                  <label  class="font-semibold text-sm leading-5">Quantity</label>
                                </div>
                                <div class="justify-items-end"> 
                                  <input class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" value="1"/>
                                </div>
                                <div>
                                  <label  class="font-semibold text-sm leading-5">Low Quantity Warning</label>
                                </div>
                                <div> 
                                  <input class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" value="1"/>
                                </div>
                              </div>
                          </div>
                        </div>
                        <label class="font-semibold leading-5 text-sm my-2 border-b-2 w-full border-gray-200">
                          Quantity
                      </label>
                        <p>
                          <label class="inline-flex items-center my-2">
                          <input
                            type="checkbox"
                            class="form-checkbox h-5 w-5 text-indigo-600"
                            v-model="isChecked"
                          />
                          <span class="ml-2 text-sm text-gray-700">This product has a SKU or barcode</span>
                        </label>
                      </p>
                        <div v-if="isChecked" class="mt-2 w-full">
                          <div class="border-t-2 w-full border-gray-300 p-2">
                              <div class="h-24 grid grid-cols-2">
                                <div class="mr-4"> 
                                  <label  class="font-normal text-sm leading-5">SKU (Stock Keeping Unit)</label>
                                  <input class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                                </div>
                                <div> 
                                  <label  class="font-normal text-sm leading-5">Barcode (ISBN, UPC, GTIN, etc.)</label>
                                  <input class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                                </div>
                                
                              </div>
                          </div>
                        </div>
                      
                    </div>
    
                    <div className="p-8 bg-[#F6F6F7] xl:w-3/5">
                    </div>
                </div>
            </div>
        </div>
<div>
  </div>
  <Modal :title="'Modal title'" :message="'Modal message'" ref="modal"></Modal>
  
	</div>
   
  
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';




export default {
	components: {
    Modal,
    
  },
	data() {
	  return {
		showMenu: false,
		selectedOption: "",
		isChecked: false,
    isCheckedInventory:false
	  };
	},
	setup() {
    let isOpen = ref(false);
    return { isOpen };
    
  },
  methods: {
    showModal() {
      if (this.selectedOption === 'option4') {
        this.$refs.modal.showModal();
      }
    },
  },
  };
</script>

<style>
.bounce-enter-active {
    animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.10);
    }
    100% {
        transform: scale(1);
    }
}
</style>