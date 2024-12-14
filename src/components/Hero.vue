<script setup>
import {styleGuide} from "../Utils/ReusableStyles.js";
import Layout from "../Layout.vue";
import {Icon} from "@iconify/vue";
import ReactIcon from "../SvgIcons/ReactIcon.vue";
import VueIcon from "../SvgIcons/VueIcon.vue";
import JsIcon from "../SvgIcons/JsIcon.vue";
import TailwindIcon from "../SvgIcons/TailwindIcon.vue";
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const titleText = ref("Front-End Web Developer");
const titleKey = ref(0);

const icons = [
  {component: ReactIcon, name: 'react', class: 'absolute top-[-100px] left-[100px]'},
  {component: VueIcon, name: 'vue', class: 'absolute top-[-100px] right-[250px]'},
  {component: JsIcon, name: 'js', class: 'absolute bottom-[-110px] left-[200px]'},
  {component: TailwindIcon, name: 'tailwind', class: 'absolute bottom-[-30px] right-[150px]'}
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
  }, 1000)
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
          class="min-h-[90vh] flex items-center justify-between relative dark:bg-darkBgColor transition-all duration-500 z-0">
    <!--  up shadow  -->
    <div
        class="bg-highlightPrimary absolute top-[30px] left-[80px] blur-[200px] dark:w-[250px] dark:h-[250px] dark:blur-[180px] w-[200px] h-[200px] rounded-full z-[-1]"></div>

    <!--   intro   -->
    <div class="w-[60%] relative">

      <p class="text-[1.5rem] font-[500] text-disableColor dark:text-darkDisableColor">Hi, I'm Asfak</p>

      <transition name="title-transition">
        <h1
            :key="titleKey"
            class="text-[3rem] overflow-hidden font-[700] text-textColor leading-[60px] dark:text-darkTextColor">
          {{titleText}}
        </h1>
      </transition>

      <p class="text-disableColor dark:text-darkDisableColor text-[1rem] mt-2 w-[70%]">I am Asfak Ahmed, a front-end web
        developer with over 2+ years of experience. I consider coding to be the most important aspect of my life, and I
        thrive on tackling complex problems. I am also the founder and creator of ZenUI Library, a platform that
        provides developers with essential UI components and templates.</p>

      <div class="flex items-center gap-[15px] mt-8">
        <a href="https://zcal.co/asfak00/discuss30" target="_blank" :class="styleGuide.buttonFill" class="py-2.5">
          <Icon icon="hugeicons:calendar-03" width="22" height="22"/>
          Schedule a meeting
        </a>
        <a href="#about-me" :class="styleGuide.buttonOutline" class="py-2.5">
          About Me
        </a>
      </div>

      <!--   animated icons   -->
      <template v-for="(icon, index) in icons" :key="index">
        <Transition name="icon-scale">
          <component
              v-if="currentIcon?.name === icon.name"
              :is="icon.component"
              :class="icon.class"
          />
        </Transition>
      </template>

    </div>

    <!--  down shadow  -->
    <div
        class="bg-highlightColor absolute bottom-[30px] left-[50%] transform translate-x-[-50%] blur-[180px] w-[250px] dark:w-[280px] dark:h-[280px] dark:blur-[200px] h-[250px] rounded-full z-[-1]"></div>

    <!--  image   -->
    <div class="w-[40%] flex flex-col items-end relative">

      <!--   projects card   -->
      <div
          class="bg-white dark:bg-slate-900 animation-bounce rounded-md py-2.5 px-11 absolute shadow-sm top-[150px] left-[0px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.8rem] dark:text-darkTextColor font-[600] text-textColor leading-[35px]">5+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.9rem]">Satisfied clients</p>
      </div>

      <!--   experience card   -->
      <div
          class="bg-white dark:bg-slate-900 animation-bounce2 rounded-md py-2.5 px-8 absolute shadow-sm bottom-[50px] left-[30px] w-max flex transition-all duration-300 flex-col items-center justify-center">
        <h6 class="text-[1.8rem] font-[600] dark:text-darkTextColor text-textColor leading-[35px]">2+</h6>
        <p class="text-disableColor dark:text-darkDisableColor text-[0.9rem]">Years of experience</p>
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