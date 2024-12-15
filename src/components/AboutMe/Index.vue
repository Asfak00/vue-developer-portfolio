<script setup>
import Layout from "../../Layout.vue";
import {ref} from "vue";
import Education from "../AboutMe/Education.vue"
import Hobby from "../AboutMe/Hobyy.vue"
import AboutMe from "./AboutMe.vue";

const tabs = ['about_me', 'education', 'hobby'];
const activeTab = ref('about_me');
const direction = ref('right');

const handleActiveTab = (tab) => {
  const currentIndex = tabs.indexOf(activeTab.value);
  const newIndex = tabs.indexOf(tab);
  direction.value = newIndex > currentIndex ? 'right' : 'left';
  activeTab.value = tab;
}
</script>

<template>
  <Layout id="about-me" class="pt-16 lg:pt-8 dark:bg-darkBgColor transition-all duration-500">
    <div class="w-max mx-auto flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">About Me</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[0px] lg:gap-[25px] pt-10 lg:pt-14 w-full">

      <div>
        <img alt="asfak/image" src="https://i.ibb.co.com/1Mj9Nwx/asfakahmed.jpg" class="w-full h-[90%] rounded-md object-cover"/>
      </div>

      <div>
        <div class="w-full grid grid-cols-3 relative rounded-full border dark:border-darkTextColor/40 border-borderColor">

          <div :class="activeTab === 'about_me' ?'translate-x-[2%]' : activeTab === 'education' ? 'translate-x-[100%]' : 'translate-x-[201.4%]'" class="bg-highlightPrimary/10 dark:bg-highlightPrimary/50 absolute h-[90%] sm:h-[85%] rounded-full top-[50%] w-[33%] transform transition-all duration-700 translate-y-[-50%]"></div>

          <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'about_me' && 'text-highlightPrimary'" @click="handleActiveTab('about_me')">About me</button>
          <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'education' && 'text-highlightPrimary'" @click="handleActiveTab('education')">Education</button>
          <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'hobby' && 'text-highlightPrimary'" @click="handleActiveTab('hobby')">Hobby</button>
        </div>

        <div class="relative h-auto overflow-hidden">
          <transition
              :enter-active-class="direction === 'right'
              ? 'transition-all duration-700 ease-out'
              : 'transition-all duration-700 ease-out'"
              :leave-active-class="direction === 'right'
              ? 'transition-all duration-700 ease-out absolute top-0 left-0 w-full'
              : 'transition-all duration-700 ease-out absolute top-0 left-0 w-full'"
              :enter-from-class="direction === 'right'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'"
              :leave-to-class="direction === 'right'
              ? '-translate-x-full opacity-0'
              : 'translate-x-full opacity-0'"
          >
            <div v-if="activeTab === 'about_me'" key="about_me" class="pt-6 px-2">
              <AboutMe/>
            </div>

            <div v-else-if="activeTab === 'education'" key="education" class="pt-6 px-2">
              <Education/>
            </div>

            <div v-else key="hobby" class="pt-6 px-2">
              <Hobby/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
/* Additional styles can be added here if needed */
</style>