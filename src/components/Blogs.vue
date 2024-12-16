<script setup>
import Layout from "../Layout.vue";
import {ref, computed, onMounted} from "vue";
import {blogsData} from "../Utils/BlogsData.js";
import {styleGuide} from "../Utils/ReusableStyles.js";
import {Icon} from "@iconify/vue";

const activeTab = ref('all');
const showAllBlogs = ref(false);
const shouldShowLoadMoreButton = ref(true);
const animationKey = ref(0);

const handleActiveTab = (tab) => {
  activeTab.value = tab;
  showAllBlogs.value = false;
  shouldShowLoadMoreButton.value = true;
  animationKey.value++;
}

const filteredBlogs = computed(() => {
  let filteredList = blogsData.filter(blog => {
    if (activeTab.value === 'all') return true;
    return blog.group === activeTab.value;
  });

  if (!showAllBlogs.value) {
    return filteredList.slice(0, 6);
  }
  return filteredList;
});

const handleShowAllBlogs = () => {
  showAllBlogs.value = true;
  shouldShowLoadMoreButton.value = false;
}

const isLoadMoreVisible = computed(() => {
  return shouldShowLoadMoreButton.value &&
      filteredBlogs.value.length === 6 &&
      blogsData.filter(blog =>
          activeTab.value === 'all' || blog.group === activeTab.value
      ).length > 6;
});

onMounted(() => {
  shouldShowLoadMoreButton.value = true;
  showAllBlogs.value = false;
});
</script>

<template>
  <Layout id="blogs" class="pt-8 dark:bg-darkBgColor transition-all duration-500">
    <div class="w-max mx-auto pt-12 flex flex-col items-end">
      <h4 class="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center">Blogs</h4>

      <!--   line   -->
      <div class="w-[50%] h-[2px] bg-highlightColor"></div>
      <div class="w-[70%] h-[3px] bg-highlightPrimary mt-1"></div>
    </div>

    <div
        class="grid mt-10 lg:mt-12 gap-6 grid-cols-4 w-full overflow-x-auto sm:overflow-visible sm:w-[90%] lg:w-[50%] mx-auto relative rounded-full border dark:border-darkTextColor/40 border-borderColor">

      <div
          :class="activeTab === 'all' ?'translate-x-[2%] w-[80px] sm:w-[25%]' : activeTab === 'front_end' ? 'translate-x-[73%] sm:translate-x-[98%] w-[110px] sm:w-[25%]' : activeTab === 'responsive' ? 'translate-x-[158%] w-[120px] sm:w-[25%] sm:translate-x-[199%]' : 'translate-x-[279%] w-[110px] sm:w-[25%] sm:translate-x-[298%]'"
          class="bg-highlightPrimary/10 dark:bg-highlightPrimary/50 absolute h-[90%] sm:h-[85%] rounded-full top-[50%] w-[25%] transform transition-all duration-700 translate-y-[-50%]"></div>

      <button class="py-3.5 px-4 pl-8 sm:pl-9 text-center dark:text-darkTextColor min-w-max text-[1rem] font-[400] transition-all duration-700"
              :class="activeTab === 'all' && 'text-highlightPrimary'" @click="handleActiveTab('all')">All
      </button>
      <button class="py-3.5 px-4 pl-3 sm:pl-4 text-center dark:text-darkTextColor min-w-max text-[1rem] font-[400] transition-all duration-700"
              :class="activeTab === 'front_end' && 'text-highlightPrimary'" @click="handleActiveTab('front_end')">
        Front-End
      </button>
      <button class="py-3.5 px-4 pl-8 sm:pl-4 text-center dark:text-darkTextColor min-w-max text-[1rem] font-[400] transition-all duration-700"
              :class="activeTab === 'responsive' && 'text-highlightPrimary'" @click="handleActiveTab('responsive')">
        Responsive
      </button>
      <button class="py-3.5 px-4 pl-16 sm:pl-0 text-center dark:text-darkTextColor min-w-max text-[1rem] font-[400] transition-all duration-700"
              :class="activeTab === 'javascript' && 'text-highlightPrimary'" @click="handleActiveTab('javascript')">
        Javascript
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-12 relative">
      <div
          v-for="(blog, index) in filteredBlogs"
          :key="`${blog.id}-${animationKey}`"
          class="border flex-col flex dark:border-darkBorderColor justify-between border-borderColor rounded-md opacity-0 animate-blog-load"
          :style="`animation-delay: ${index * 100}ms`"
      >
        <div>
          <div class="h-[180px] lg:h-[250px] overflow-hidden rounded-t-md">
            <img :alt="blog.title" :src="blog.thumbnail"
                 class="hover:scale-[1.1] transition-all duration-300 object-cover rounded-t-md"/>
          </div>

          <div class="p-4 pb-0">
            <h3 class="text-[1.3rem] dark:text-darkTextColor text-textColor font-[600]">{{ blog.title }}</h3>

            <div class="flex items-center gap-[15px] mt-1">
              <p class="flex dark:text-darkDisableColor items-center gap-[5px] text-[0.9rem] text-disableColor">
                <Icon icon="fontisto:world-o" width="16" height="16" />
                {{blog.publishedPlatform}}
              </p>
              <p class="flex items-center dark:text-darkDisableColor gap-[5px] text-[0.9rem] text-disableColor">
                <Icon icon="ion:eye-outline" width="17" height="17" />
                {{blog.views}}
              </p>
            </div>

            <p class="mt-2 text-[0.9rem] dark:text-darkDisableColor text-disableColor">{{blog.description.slice(0,150)}}...</p>
          </div>
        </div>

        <div class="p-4 mt-5 pt-0">
          <a :class="styleGuide.buttonFill" class="w-max" target="_blank" :href="blog.url">
            <Icon icon="hugeicons:link-square-02" width="20" height="20"/>
            Read Blog
          </a>
        </div>
      </div>

      <!--   shadow and load more button   -->
      <div v-if="isLoadMoreVisible" class="w-full flex items-center justify-center h-[200px] bg-gradient-to-b from-white/50 dark:to-darkBgColor dark:z-10 dark:from-darkBgColor/50 to-white absolute bottom-0">
        <button :class="styleGuide.buttonFill" @click="handleShowAllBlogs">See all blogs</button>
      </div>
    </div>
  </Layout>
</template>

<style>
@keyframes blogLoad {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blog-load {
  animation: blogLoad 0.8s forwards;
}
</style>