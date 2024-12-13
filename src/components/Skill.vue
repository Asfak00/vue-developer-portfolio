<script setup>
import Layout from "../Layout.vue";
import {ref} from "vue";

const activeTab = ref('about_me');

</script>

<template>
  <Layout>
    <div class="w-max mx-auto pt-12 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Skills</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="grid mt-12 grid-cols-4 w-[60%] mx-auto relative rounded-full border dark:border-darkTextColor/40 border-borderColor">

      <div :class="activeTab === 'about_me' ?'translate-x-[2%]' : activeTab === 'education' ? 'translate-x-[100%]' : 'translate-x-[201.4%]'" class="bg-highlightPrimary/10 dark:bg-highlightPrimary/50 absolute h-[85%] rounded-full top-[50%] w-[33%] transform transition-all duration-700 translate-y-[-50%]"></div>

      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'about_me' && 'text-highlightPrimary'" @click="handleActiveTab('about_me')">Front-End</button>
      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'education' && 'text-highlightPrimary'" @click="handleActiveTab('education')">Back-End</button>
      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'hobby' && 'text-highlightPrimary'" @click="handleActiveTab('hobby')">Framework</button>
      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'hobby' && 'text-highlightPrimary'" @click="handleActiveTab('hobby')">Tools</button>
    </div>

    <div>

    </div>
  </Layout>
</template>