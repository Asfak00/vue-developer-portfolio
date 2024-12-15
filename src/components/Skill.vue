<script setup>
import Layout from "../Layout.vue";
import {onMounted, ref, watch} from "vue";
import {skillsData} from "../Utils/SkillsData.js";

const activeTab = ref('front_end');
const filteredSkills = ref(skillsData)

const handleActiveTab = (tab) => {
  activeTab.value = tab;
}

onMounted(()=> {
  const filtered = skillsData.filter(skill => skill.group.toLowerCase() === activeTab.value.toLowerCase())
  filteredSkills.value = filtered
})

watch(()=> activeTab.value,
    ()=> {
      const filtered = skillsData.filter(skill => skill.group.toLowerCase() === activeTab.value.toLowerCase())
      filteredSkills.value = filtered
    }
)

</script>

<template>
  <Layout id="skills" class="dark:bg-darkBgColor pt-12 lg:pt-5 transition-all duration-500">
    <div class="w-max mx-auto pt-12 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Skills</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div class="grid mt-12 grid-cols-2 w-[90%] sm:w-[60%] lg:w-[25%] mx-auto relative rounded-full border dark:border-darkTextColor/40 border-borderColor">

      <div :class="activeTab === 'front_end' ?'translate-x-[2%]' : activeTab === 'back_end' ? 'translate-x-[105%]' : activeTab === 'framework' ? 'translate-x-[209%]' : 'translate-x-[97.5%]'" class="bg-highlightPrimary/10 dark:bg-highlightPrimary/50 absolute h-[85%] rounded-full top-[50%] w-[50%] transform transition-all duration-700 translate-y-[-50%]"></div>

      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'front_end' && 'text-highlightPrimary'" @click="handleActiveTab('front_end')">Front-End</button>
<!--      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'back_end' && 'text-highlightPrimary'" @click="handleActiveTab('back_end')">Back-End</button>-->
<!--      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'framework' && 'text-highlightPrimary'" @click="handleActiveTab('framework')">Framework</button>-->
      <button class="py-3.5 px-4 text-center dark:text-darkTextColor text-[1rem] font-[400] transition-all duration-700" :class="activeTab === 'tools' && 'text-highlightPrimary'" @click="handleActiveTab('tools')">Tools</button>
    </div>

    <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-[15px]">
      <div v-for="skill in filteredSkills">
        <div class="border-[2px] border-dashed border-borderColor/80 hover:border-highlightPrimary transition-all duration-300 cursor-pointer rounded-md px-3 py-4 flex flex-col items-center justify-center group dark:border-darkBorderColor dark:hover:border-highlightPrimary">
          <img alt="icon" class="w-[32px] h-[32px] object-cover rounded-md group-hover:scale-[1.2] transition-all duration-300" v-if="skill.icon.startsWith('https')" :src="skill.icon"/>
          <div v-html="skill.icon" v-else class="w-[32px] h-[32px] group-hover:scale-[1.2] transition-all duration-300"></div>
          <p class="text-[1rem] dark:text-darkTextColor capitalize mt-2 font-[500] text-textColor">{{skill.name}}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>