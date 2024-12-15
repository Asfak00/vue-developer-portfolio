<script setup>
import Layout from "../Layout.vue";
import {achievementData} from "../Utils/AchievementData.js";
</script>

<template>
  <Layout id="achievements" class="dark:bg-darkBgColor pt-16 pb-12 transition-all duration-500">
    <div class="w-max mx-auto pt-12 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Achievements</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="mt-12 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 gap-[15px]">
      <div
          v-for="data in achievementData"
          class="w-full h-[450px] relative overflow-hidden object-cover group cursor-pointer rounded-md">

        <!-- image -->
        <img
            :src="data.image"
            alt="animated_card"
            class="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
        />

        <!-- text -->
        <div
            class="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex p-10 items-center justify-center flex-col">
          <h1 class="text-[1.2rem] sm:text-[1.3rem] font-bold text-white text-center capitalize">{{ data.title }}</h1>
          <p
              class="text-center z-[-1] mt-5 opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem] sm:text-[1rem] leading-[23px]">
            {{ data.description }}
          </p>
        </div>

        <!-- bottom shadow -->
        <div
            class="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-black to-black/40 h-[100%] absolute bottom-0 left-0 right-0">
        </div>

        <div
            class="w-full transition-all duration-500 bg-gradient-to-b from-black/10 to-black/70 h-[100%] absolute bottom-0 left-0 right-0">
        </div>
      </div>
    </div>
  </Layout>
</template>