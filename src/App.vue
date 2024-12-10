<script setup>
import AboutMe from "./components/AboutMe.vue";
import Hero from "./components/Hero.vue";
import Skill from "./components/Skill.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Blogs from "./components/Blogs.vue";
import Achievements from "./components/Achievements.vue";
import Footer from "./components/Footer.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";
import {onMounted} from "vue";

</script>

<template>

  <MobileNavbar/>
  <Navbar/>
  <Hero/>
  <AboutMe/>
  <Experience/>
  <Skill/>
  <Projects/>
  <Blogs/>
  <Achievements/>
  <Footer/>

</template>