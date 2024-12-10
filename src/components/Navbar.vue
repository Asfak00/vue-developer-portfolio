<script setup>
import {styleGuide} from "../Utils/ReusableStyles.js";
import { Icon } from '@iconify/vue';
import {onMounted, ref, watch} from "vue";

const currentTheme = ref('light');

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    localStorage.setItem('theme', currentTheme.value);
    applyTheme(currentTheme.value);
  }
});

const handleThemeChange = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
};

watch(
    () => currentTheme.value,
    (newTheme) => {
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }
);

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

</script>

<template>
  <nav class="w-full py-1.5 px-6 max-w-[1600px] mx-auto border-b border-borderColor flex items-center justify-between">
    <img src="https://i.ibb.co.com/TYmXCgC/logo.png" alt="logo/image" class="w-[60px]">
    <div class="flex items-center gap-[35px]">
        <a href="#home" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Home</a>
        <a href="#about-me" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">About Me</a>
        <a href="#experience" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Experience</a>
        <a href="#skills" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Skills</a>
        <a href="#projects" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Projects</a>
        <a href="#blogs" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Blogs</a>
        <a href="#achievements" class="text-[1.1rem] font-[400] text-textColor hover:text-highlightPrimary transition duration-300">Achievements</a>

      <div class="flex items-center gap-[15px]">
        <button @click="handleThemeChange" class="border overflow-hidden border-gray-300 rounded-md h-[42px] py-2 px-3">

            <Icon :class="currentTheme === 'light' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px] z-[-1]'" icon="material-symbols-light:sunny-outline-rounded" class="transition-all duration-300" width="24" height="24" />

            <Icon :class="currentTheme === 'dark' ? 'opacity-100 translate-y-[-24px]' : 'opacity-0 translate-y-[20px] z-[-1]'"  icon="material-symbols-light:dark-mode" class="transition-all duration-300" width="24" height="24" />

        </button>
        <button :class="styleGuide.buttonOutline"><a download="resume" href="/resume.pdf">Resume</a></button>
      </div>
    </div>
  </nav>
</template>