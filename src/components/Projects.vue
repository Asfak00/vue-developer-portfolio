<script setup>
import Layout from "../Layout.vue";
import {projectsData} from "../Utils/ProjectsData.js";
import {Icon} from "@iconify/vue";
import {styleGuide} from "../Utils/ReusableStyles.js";
import { ref } from 'vue';

// Create a reactive state to track expanded descriptions
const expandedDescriptions = ref(
    projectsData.reduce((acc, project) => {
      acc[project.name] = false;
      return acc;
    }, {})
);

// Function to toggle description
const toggleDescription = (projectName) => {
  expandedDescriptions.value[projectName] = !expandedDescriptions.value[projectName];
};
</script>

<template>
  <Layout id="projects" class="dark:bg-darkBgColor pt-8 transition-all duration-500">
    <div class="w-max mx-auto pt-12 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Projects</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-12">
      <div v-for="project in projectsData" :key="project.name" class="border dark:border-darkBorderColor border-borderColor rounded-md">

        <div class="h-[150px] lg:h-[210px] overflow-hidden rounded-t-md">
          <img
              :alt="project.name"
              :src="project.thumbnail"
              class="rounded-t-md hover:scale-[1.1] transition-all duration-500 object-cover"
          />
        </div>

        <div class="p-4">
          <h3 class="text-[1.3rem] dark:text-darkTextColor text-textColor font-[600]">{{project.name}}</h3>

          <div class="text-[0.9rem] font-[400] dark:text-darkDisableColor text-disableColor mt-1">

            <template v-if="!expandedDescriptions[project.name]">
              {{project.description.slice(0, 90)}}
              <span v-if="project.description.length > 100" class="text-highlightPrimary/80 underline cursor-pointer ml-1"
                    @click="toggleDescription(project.name)">
                See More
              </span>
            </template>

            <template v-else>
              {{project.description}}
              <span class="text-highlightPrimary/80 underline cursor-pointer ml-1"
                    @click="toggleDescription(project.name)">
                See Less
              </span>
            </template>

          </div>

          <div class="flex items-center flex-wrap gap-[8px] mt-3">
            <p class="text-[1rem] font-[600] dark:text-darkDisableColor text-disableColor">Technology:</p>
            <div v-for="tag in project.tags" :key="tag" class="flex items-center gap-[15px] flex-wrap">
              <div class="border rounded-md dark:text-darkDisableColor dark:border-darkBorderColor capitalize px-2 py-1 text-[0.8rem] text-disableColor border-borderColor">
                {{tag}}
              </div>
            </div>
          </div>

          <div class="flex items-center gap-[10px] mt-5">
            <a :class="styleGuide.buttonFill" target="_blank" :href="project.live">
              <Icon icon="hugeicons:link-square-02" width="20" height="20" />
              Live
            </a>
            <a v-if="project.github" :class="styleGuide.buttonOutline" target="_blank" :href="project.github">
              <Icon icon="hugeicons:github-01" width="20" height="20" />
              Github
            </a>
            <a v-else :class="[styleGuide.buttonOutline, !project.github && 'dark:bg-slate-800 dark:border-slate-500 cursor-not-allowed bg-gray-100 opacity-50']">
              <Icon icon="hugeicons:github-01" width="20" height="20" />
              Github
            </a>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>