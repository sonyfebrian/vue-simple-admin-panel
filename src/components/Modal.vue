<template>
  <form  @submit.prevent="submitForm">
  <div id="modal-backdrop"
    class="fixed inset-0 bg-opacity-40 bg-gray-900 flex justify-center items-center" v-if="show">

    <div class="container mx-auto w-11/12 md:w-2/3 max-w-lg"> 
      <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
        <p><label  class="text-base font-bold mr-1">Add Category</label></p>

        <label  class="text-sm">Category Name</label>
        <input 
          v-model="formData.name"
          type="text"
          name="category"
          class="mb-1 mt-2 text-gray-600 text-sm focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Category Name" />
          <p> <span class="text-sm text-[#FF0000]">{{ formData.errors.name }}</span></p>
  
        <label  class="text-sm">Parent Category </label>
        <input id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Parent Category" />
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm">Category Banner (200 x 200)</label>
                        <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-20 p-10 group text-center">
                              <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                    <p class="pointer-none text-[#6D7175] text-xs "><span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Add Files</span><a href="" id="" class="text-blue-600 underline hover:underline">add from URL</a> <br /> Acceppts images, videos or 3D model</p>
                                </div>
                                <input type="file" class="hidden">
                            </label>
                        </div>
        </div>
        <div class="grid grid-cols-1 space-y-2 mt-3">
          <label class="text-sm text-[#202223]">Category icon (32 x 32)</label>
                        <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-20 p-10 group text-center">
                                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                    <p class="pointer-none text-[#6D7175] text-xs "><span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Add Files</span><a href="" id="" class="text-blue-600 underline hover:underline">add from URL</a> <br /> Acceppts images, videos or 3D model</p>
                                </div>
                                <input type="file" class="hidden">
                            </label>
                        </div>
        </div>
        <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"  @click="hideModal" aria-label="close modal" role="button">
          <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <footer class="flex justify-end  pb-2 pt-4">
            <button   @click="hideModal" class="bg-transparent  text-black font-semibold  py-2 px-4 border border-gray-300  rounded">
              Cancel
            </button>
            <button  type ="submit" class="bg-[#008060]  ml-2 text-white font-bold py-2 px-4 rounded">
              Save
              </button>
               
          </footer>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    title: {
      type: String,
      default: 'Modal title',
    },
    message: {
      type: String,
      default: 'Modal message',
    },
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    hideModal() {
      this.show = false;
    },
  },
  setup() {
    const formData = reactive({
      name: '',
      password: '',
      confirmPassword: '',
      errors: {},
      showModal: false,
    });

    function validateForm() {
      let isValid = true;

      // validate username
      if (!formData.name) {
        formData.errors.name = 'Category name cannot be empty.';
        isValid = false;
      } else {
        formData.errors.name = '';
        
        
      }
      return isValid;
    }

    function submitForm() {
      if (validateForm()) {
        // submit form data
        console.log(formData);
       
      }
    }

    return {
      formData,
      submitForm,
    };
  },
  
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}

.modal-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  margin: 0;
  font-size: 18px;
}

.close {
  background: none;
  border: none;
}
</style>
