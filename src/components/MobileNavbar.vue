<script setup>
import {styleGuide} from "../Utils/ReusableStyles.js";
import { Icon } from '@iconify/vue';
import {onBeforeMount, onMounted, ref, watch} from "vue";

const currentTheme = ref('light');

const emit = defineEmits(['update:theme'])
const activeTab = ref(null)
const isMenuOpen = ref(false)

onBeforeMount(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme.value = savedTheme;
    applyTheme(savedTheme);
    emit('update:theme', savedTheme);
  } else {
    localStorage.setItem('theme', currentTheme.value);
    applyTheme(currentTheme.value);
    emit('update:theme', currentTheme.value);
  }
});

const handleThemeChange = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
};

watch(
    () => currentTheme.value,
    (newTheme) => {
      emit('update:theme', newTheme);
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }
);

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const handleNavitemClick = (tab) => {
  activeTab.value = tab;
}

</script>

<template>
  <nav class="flex lg:hidden w-full sticky top-0 left-0 backdrop-blur-2xl z-50 py-1.5 px-6 max-w-[1600px] mx-auto border-b dark:border-darkBorderColor border-borderColor items-center justify-between dark:bg-darkBgColor transition-all duration-500 justify-between">

    <img :src="currentTheme === 'light' ? 'https://i.ibb.co.com/TYmXCgC/logo.png' : 'https://i.ibb.co.com/qx6pcB6/darklogo.png'" alt="logo/image" class="w-[50px]">

    <div class="flex items-center gap-[10px]">
      <button @click="handleThemeChange" class="border overflow-hidden dark:border-darkTextColor border-gray-300 rounded-md h-[30px] py-2 px-2">

        <Icon :class="currentTheme === 'light' ? 'opacity-100 translate-y-[-6px]' : 'opacity-0 translate-y-[-40px] z-[-1]'" icon="material-symbols-light:sunny-outline-rounded" class="transition-all duration-700" width="24" height="24" />

        <Icon :class="currentTheme === 'dark' ? 'opacity-100 translate-y-[-29px]' : 'opacity-0 translate-y-[20px] z-[-1]'"  icon="material-symbols-light:dark-mode" class="transition-all duration-700 dark:text-darkTextColor" width="24" height="24" />

      </button>
      <Icon @click="isMenuOpen = !isMenuOpen" icon="hugeicons:menu-11" width="36" height="36" class="dark:text-darkTextColor text-textColor"/>
    </div>
  </nav>

  <transition name="nav-menu">
  <div v-if="isMenuOpen" class="fixed dark:bg-darkBgColor w-[80%] sm:w-[50%] h-screen z-50 bg-white right-0 flex-col flex pl-8 pt-8 overscroll-auto gap-[35px]">

    <a href="#home" :class="activeTab === 'home' && '!text-highlightPrimary'" @click="handleNavitemClick('home')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Home</a>

    <a href="#about-me" :class="activeTab === 'about_me' && '!text-highlightPrimary'"  @click="handleNavitemClick('about_me')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">About Me</a>

    <a href="#experience" :class="activeTab === 'experience' && '!text-highlightPrimary'"  @click="handleNavitemClick('experience')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Experience</a>

    <a href="#skills" :class="activeTab === 'skills' && '!text-highlightPrimary'"  @click="handleNavitemClick('skills')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Skills</a>

    <a href="#projects" :class="activeTab === 'projects' && '!text-highlightPrimary'"  @click="handleNavitemClick('projects')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Projects</a>

    <a href="#blogs" :class="activeTab === 'blogs' && '!text-highlightPrimary'"  @click="handleNavitemClick('blogs')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Blogs</a>

    <a href="#achievements" :class="activeTab === 'achievements' && '!text-highlightPrimary'"  @click="handleNavitemClick('achievements')" class="text-[1.1rem] font-[400] dark:text-darkTextColor dark:hover:text-highlightPrimary text-textColor hover:text-highlightPrimary transition duration-300">Achievements</a>

    <div class="flex items-center gap-[15px]">
      <button :class="styleGuide.buttonOutline"><a download="resume" href="/resume.pdf">Resume</a></button>
    </div>
  </div>
  </transition>
</template>

<style>
.nav-menu-enter-active,
.nav-menu-leave-active {
  transition: all 0.5s ease;
}

.nav-menu-enter-from,
.nav-menu-leave-to {
  opacity: 0;
  transform: translateX(300px);
}

.nav-menu-enter-to,
.nav-menu-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
</style>