<script setup>
import {styleGuide} from "../Utils/ReusableStyles.js";
import Layout from "../Layout.vue";
import {Icon} from "@iconify/vue";
import {onMounted, onUnmounted, ref} from "vue";
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const titleText = ref("Front-End Web Developer");
const titleKey = ref(0);

const icons = [
  {
    component: '/smile.gif',
    name: 'react',
    class: 'absolute top-0 lg:top-[-100px] left-[100px] sm:left-[180px] lg:left-[100px]',
    width: 50,
    height: 50
  },
  {
    component: '/robot.gif',
    name: 'vue',
    class: 'absolute top-0 lg:top-[-150px] sm:right-[150px] right-0 lg:right-[250px]',
    width: 150,
    height: 150
  },
  {
    component: '/js.gif',
    name: 'js',
    class: 'absolute bottom-0 sm:bottom-[-70px] right-0 sm:right-[220px]',
    width: 70,
    height: 70
  },
]

const currentIcon = ref(null)
let intervalId = null
let textInterval = null

const getRandomIcon = () => {
  const availableIcons = icons.filter(icon => icon !== currentIcon.value)
  return availableIcons[Math.floor(Math.random() * availableIcons.length)]
}

const startIconAnimation = () => {
  currentIcon.value = getRandomIcon()
  intervalId = setInterval(() => {
    currentIcon.value = getRandomIcon()
  }, 2000)
}

onMounted(() => {
  startIconAnimation()

  const placeholderTexts = [
      'Front-End Web Developer',
      'React Developer',
      'Javascript Developer',
      'Vue Developer'
  ];
  let index = 0;

  textInterval = setInterval(() => {
    titleText.value = placeholderTexts[index];
    titleKey.value++
    index = (index + 1) % placeholderTexts.length;
  }, 3000);
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  clearInterval(textInterval)
})

</script>

<template>
  <Layout id="home"
          class="min-h-[90vh] flex-col lg:flex-row flex items-center justify-between relative dark:bg-darkBgColor transition-all duration-500 z-0 gap-12 sm:gap-16 lg:gap-0">
    <!--  up shadow  -->
    <div
        class="bg-highlightPrimary absolute top-[30px] left-[80px] blur-[200px] dark:w-[250px] dark:h-[250px] dark:blur-[180px] w-[200px] h-[200px] rounded-full z-[-1]"></div>

    <!--   intro   -->
    <div class="w-full lg:w-[60%] pt-12 lg:pt-0 relative">

      <p class="text-[1.5rem] font-[500] text-disableColor dark:text-darkDisableColor">Hi, I'm Asfak</p>

      <transition name="title-transition">
        <h1
            :key="titleKey"
            class="text-[2.5rem] sm:text-[3rem] overflow-hidden leading-[45px] font-[700] text-textColor sm:leading-[60px] dark:text-darkTextColor">
          {{titleText}}
        </h1>
      </transition>

      <p class="text-disableColor dark:text-darkDisableColor text-[1rem] mt-2 w-full sm:w-[70%]">
        I am Asfak Ahmed, a Front-End Web Developer with over two years of experience and the founder of ZenUI Library, a platform offering essential UI components and templates. Coding is my passion, and I excel at solving complex problems with creative solutions.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center gap-[15px] mt-8">
        <a href="https://zcal.co/asfak00/discuss30" target="_blank" :class="styleGuide.buttonFill" class="py-2.5 w-max">
          <Icon icon="hugeicons:calendar-03" width="22" height="22"/>
          Schedule a meeting
        </a>
        <a href="#about-me" :class="styleGuide.buttonOutline" class="py-2.5 w-max">
          About Me
        </a>
      </div>

      <!--   animated icons   -->
      <template v-for="(icon, index) in icons" :key="index">
        <Transition name="icon-scale">
          <img :alt="icon.name" :src="icon.component" v-if="currentIcon?.name === icon.name" :class="icon.class" :style="`height: ${icon.width}px; width: ${icon.height}px`"/>
        </Transition>
      </template>

    </div>

    <!--  down shadow  -->
    <div
        class="bg-highlightColor absolute bottom-[30px] left-[50%] transform translate-x-[-50%] blur-[180px] w-[250px] dark:w-[280px] dark:h-[280px] dark:blur-[200px] h-[250px] rounded-full z-[-1]"></div>

    <!--  image   -->
    <div class="w-[80%] sm:w-[90%] lg:w-[40%] flex flex-col items-end sm:items-center lg:items-end relative">

      <!--   projects card   -->
      <div
          class="bg-white dark:bg-slate-900 animation-bounce rounded-md py-1 sm:py-2.5 px-5 sm:px-11 absolute shadow-sm top-[80px] sm:top-[150px] left-[-50px] sm:left-[0px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.2rem] sm:text-[1.8rem] font-[600] text-highlightPrimary leading-[35px]">5+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.7rem] sm:text-[0.9rem]">Satisfied clients</p>
      </div>

      <!--   experience card   -->
      <div
          class="bg-white dark:bg-slate-900 animation-bounce2 rounded-md py-1 sm:py-2.5 px-4 sm:px-8 absolute shadow-sm bottom-[20px] sm:bottom-[50px] left-[-30px] sm:left-[30px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.2rem] sm:text-[1.8rem] font-[600] text-highlightColor leading-[35px]">2+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.7rem] sm:text-[0.9rem]">Years of experience</p>
      </div>

      <img alt="asfak/image"
           :src="theme === 'light' ? 'https://i.ibb.co.com/hg3ZfKs/profile-picture.png' : 'https://i.ibb.co.com/Q876NqR/dark-picture.png'"
           class="w-[450px]"/>
    </div>
  </Layout>
</template>

<style scoped>
.icon-scale-enter-active,
.icon-scale-leave-active {
  transition: all 0.3s ease;
}

.icon-scale-enter-from,
.icon-scale-leave-to {
  opacity: 0;
  transform: scale(0.4);
}

.icon-scale-enter-to,
.icon-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.title-transition-enter-active {
  transition: all 0.5s ease;
}

.title-transition-leave-active {
  transition: all 0.3s ease;
}

.title-transition-enter-from {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  transform: translateY(-20px);
}

.title-transition-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.title-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.title-transition-leave-to {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  transform: translateY(20px);
}
</style>