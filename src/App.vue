<script setup>
import AboutMe from "./components/AboutMe/Index.vue";
import Hero from "./components/Hero.vue";
import Skill from "./components/Skill.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Blogs from "./components/Blogs.vue";
import Achievements from "./components/Achievements.vue";
import Footer from "./components/Footer.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";
import {onMounted, ref} from "vue";

const currentTheme = ref(null)

const handleThemeUpdate = (theme)=> {
  currentTheme.value = theme;
}

</script>

<template>

<div class="dark:bg-darkBgColor">
  <MobileNavbar/>
  <Navbar @update:theme="handleThemeUpdate"/>
  <Hero :theme="currentTheme"/>
  <AboutMe/>
  <Experience/>
  <Skill/>
  <Projects/>
  <Blogs/>
  <Achievements/>
  <Footer/>
</div>

</template>