<script setup>
import Layout from "../Layout.vue";

const currentYear = new Date().getFullYear()

</script>

<template>
  <Layout class="max-w-full dark:border-darkBorderColor border-t dark:bg-darkBgColor border-borderColor py-5">
    <p class="text-[0.9rem] text-disableColor dark:text-darkDisableColor text-center">Copyright © {{ currentYear }} by Asfak Ahmed.</p>
  </Layout>
</template>