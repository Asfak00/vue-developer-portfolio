<script setup>
import {styleGuide} from "../Utils/ReusableStyles.js";
import Layout from "../Layout.vue";

const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <Layout id="home" class="min-h-[90vh] flex items-center justify-between relative dark:bg-darkBgColor transition-all duration-500 z-0">
    <!--  up shadow  -->
    <div class="bg-highlightPrimary absolute top-[30px] left-[80px] blur-[200px] dark:w-[250px] dark:h-[250px] dark:blur-[180px] w-[200px] h-[200px] rounded-full z-[-1]"></div>

    <!--   intro   -->
    <div class="w-[60%]">

      <p class="text-[1.5rem] font-[500] text-disableColor dark:text-darkDisableColor">Hi, I'm Asfak</p>
      <h1 class="text-[3rem] font-[700] text-textColor leading-[60px] dark:text-darkTextColor">Front-End Web Developer</h1>
      <p class="text-disableColor dark:text-darkDisableColor text-[1rem] mt-2 w-[70%]">I am Asfak Ahmed, a front-end web developer with over 2+ years of experience. I consider coding to be the most important aspect of my life, and I thrive on tackling complex problems. I am also the founder and creator of ZenUI Library, a platform that provides developers with essential UI components and templates.</p>

      <div class="flex items-center gap-[15px] mt-8">
        <button :class="styleGuide.buttonFill">
          Schedule a meeting
        </button>
        <a href="#about-me" :class="styleGuide.buttonOutline">
          About Me
        </a>
      </div>
    </div>

    <!--  down shadow  -->
    <div class="bg-highlightColor absolute bottom-[30px] left-[50%] transform translate-x-[-50%] blur-[180px] w-[250px] dark:w-[280px] dark:h-[280px] dark:blur-[200px] h-[250px] rounded-full z-[-1]"></div>

    <!--  image   -->
    <div class="w-[40%] flex flex-col items-end relative">

      <!--   projects card   -->
      <div class="bg-white dark:bg-slate-900 animation-bounce rounded-md py-2.5 px-8 absolute shadow-sm top-[150px] left-[0px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.8rem] dark:text-darkTextColor font-[600] text-textColor leading-[35px]">30+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.9rem]">Completed projects</p>
      </div>

      <!--   experience card   -->
      <div class="bg-white dark:bg-slate-900 animation-bounce2 rounded-md py-2.5 px-8 absolute shadow-sm bottom-[50px] left-[30px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.8rem] font-[600] dark:text-darkTextColor text-textColor leading-[35px]">2+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.9rem]">Years of experience</p>
      </div>

      <img alt="asfak/image" :src="theme === 'light' ? 'https://i.ibb.co.com/hg3ZfKs/profile-picture.png' : 'https://i.ibb.co.com/Q876NqR/dark-picture.png'" class="w-[450px]"/>
    </div>
  </Layout>
</template>