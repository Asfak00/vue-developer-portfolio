<script setup>
import Layout from "../Layout.vue";
import {experienceData} from "../Utils/ExperienceData.js";
import {Icon} from "@iconify/vue";
import {ref} from "vue";

// Create a reactive state to track expanded descriptions
const expandedDescriptions = ref(
    experienceData.reduce((acc, experience) => {
      acc[experience.description] = false;
      return acc;
    }, {})
);

// Function to toggle description
const toggleDescription = (description) => {
  expandedDescriptions.value[description] = !expandedDescriptions.value[description];
};

</script>

<template>
  <Layout id="experience" class="dark:bg-darkBgColor pt-12 lg:pt-0 transition-all duration-500">
    <div class="w-max mx-auto pt-8 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Experience</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="pt-10 lg:pt-14 grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
      <div v-for="experience in experienceData" class="lg:first:mt-8 dark:border-darkBorderColor w-full h-max lg:last:mt-8 border border-borderColor rounded-md py-6 px-4 flex gap-[10px]">

        <a :href="experience.website" v-if="experience.company_name === 'freeCodeCamp'" target="_blank" class="min-w-[60px]">
          <img alt="company/logo" :src="experience.logo" class="w-[45px] h-[45px] mx-auto rounded-2xl"/>
        </a>

        <a :href="experience.website" v-else target="_blank" class="min-w-[60px]">
          <img alt="company/logo" :src="experience.logo" class="w-[60px] h-[60px] rounded-2xl"/>
        </a>

        <div>

          <h3 class="text-[1.3rem] text-textColor dark:text-darkTextColor font-[500]">{{experience.position}}</h3>

          <p class="flex items-center text-textColor dark:text-darkDisableColor font-[400] gap-[5px] text-[0.9rem]">
            <span>{{experience.company_name}}</span>
            <Icon icon="material-symbols-light:circle" width="6" height="6" class="text-gray-400"/>
            <span class="capitalize">{{experience.jobType}}</span>
          </p>

          <p class="flex items-center text-disableColor dark:text-darkDisableColor font-[400] text-[0.9rem]">
            <span>{{experience.start_date}}</span>
            <Icon icon="material-symbols-light:check-indeterminate-small-rounded" width="24" height="24" class="text-gray-400"/>
            <span class="capitalize">{{experience.end_date ? experience.end_date : 'present'}}</span>
          </p>

          <p class="flex items-center flex-wrap text-disableColor dark:text-darkDisableColor gap-[5px] font-[400] text-[0.9rem]">
            <span>{{experience.location}}</span>
            <Icon icon="material-symbols-light:circle" width="6" height="6" class="text-gray-400"/>
            <span class="capitalize">{{experience.is_onsite ? 'on-site' : 'remote'}}</span>
          </p>

          <div class="text-[0.9rem] font-[400] dark:text-darkDisableColor text-disableColor mt-1">

            <template v-if="!expandedDescriptions[experience.description]">
              {{experience.company_name === 'freeCodeCamp' ? experience.description.slice(0, 100) : experience.description.slice(0, 90)}}
              <span v-if="experience.description.length > 100" class="text-highlightPrimary/80 underline cursor-pointer ml-1"
                    @click="toggleDescription(experience.description)">
                See More
              </span>
            </template>

            <template v-else>
              {{experience.description}}
              <span class="text-highlightPrimary/80 underline cursor-pointer ml-1"
                    @click="toggleDescription(experience.description)">
                See Less
              </span>
            </template>

          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>