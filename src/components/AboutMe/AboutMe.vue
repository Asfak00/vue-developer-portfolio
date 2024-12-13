<script setup>
import {Icon} from "@iconify/vue";
import HasnodeIcon from "../../SvgIcons/HasnodeIcon.vue";

</script>

<template>
    <div class="text-[1rem] font-[400] dark:text-darkTextColor text-textColor">
      <p>
        My name is Asfak Ahmed, and I am passionate about crafting exceptional user experiences as a Front-End Web Developer. With over 2 years of hands-on experience in the industry, I currently thrive in my role at Doplac CRM, where I contribute to building intuitive interfaces that drive user engagement and satisfaction.
      </p>

      <p class="mt-5">
        Previously, I had the opportunity to work remotely for Goatmove Inc., an esteemed American company. This experience not only sharpened my technical skills but also enriched my understanding of global standards in web development and the nuances of remote collaboration.
      </p>

      <p class="mt-5">
        Beyond my professional roles, I am the proud founder and Creator of ZenUI Library—a project close to my heart. ZenUI Library stands as a testament to my commitment to providing robust UI components and website templates that empower developers and businesses alike to create stunning digital experiences effortlessly.
      </p>
    </div>

    <div class="pt-6 flex items-center gap-[15px] flex-wrap">
      <a href="https://web.facebook.com/asfak00/" target="_blank" class="p-2 border hover:bg-gray-100 transition-all dark:hover:bg-slate-800 duration-300 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <Icon icon="hugeicons:facebook-02" width="24" height="24" class="text-disableColor dark:text-darkTextColor"/>
      </a>

      <a href="https://www.linkedin.com/in/asfakahmed/" target="_blank" class="p-2 border hover:bg-gray-100 transition-all dark:hover:bg-slate-800 duration-300 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <Icon icon="hugeicons:linkedin-02" width="24" height="24" class="text-disableColor dark:text-darkTextColor"/>
      </a>

      <a href="https://x.com/Asfak00" target="_blank" class="p-2 border hover:bg-gray-100 transition-all duration-300 dark:hover:bg-slate-800 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <Icon icon="hugeicons:new-twitter" width="24" height="24" class="text-disableColor dark:text-darkTextColor"/>
      </a>

      <a href="https://github.com/Asfak00" target="_blank" class="p-2 border dark:hover:bg-slate-800 hover:bg-gray-100 transition-all duration-300 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <Icon icon="hugeicons:github" width="24" height="24" class="text-disableColor dark:text-darkTextColor"/>
      </a>

      <a href="https://www.youtube.com/channel/UCRGavtEbJEwr_FmxYtLF7bA" target="_blank" class="p-2 border hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <Icon icon="hugeicons:youtube" width="24" height="24" class="text-disableColor dark:text-darkTextColor"/>
      </a>

      <a href="https://asfakahmedsblog.hashnode.dev/" target="_blank" class="p-2 border hover:bg-gray-100 transition-all dark:hover:bg-slate-800 duration-300 dark:border-darkBorderColor border-borderColor rounded-md w-max">
        <HasnodeIcon class="text-[#545454] dark:text-darkTextColor"/>
      </a>
    </div>
</template>