<script setup>
import Layout from "../Layout.vue";

const currentYear = new Date().getFullYear()

</script>

<template>
  <Layout class="mt-12 border-t border-borderColor py-5">
    <p class="text-[0.9rem] text-disableColor text-center">Copyright © {{ currentYear }} by Asfak Ahmed.</p>
  </Layout>
</template>