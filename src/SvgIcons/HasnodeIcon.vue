<script setup>
const props = defineProps({
  class: {
    type: String,
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" :class="class" class="developer-icons group-hover:drop-shadow-[0_4px_4px_rgba(256,256,256,0.1)]" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M68.692 334.16c-91.59 91.589-91.59 240.085 0 331.674L334.16 931.302c91.589 91.588 240.085 91.588 331.674-.001l265.468-265.467c91.588-91.59 91.588-240.085-.001-331.674L665.834 68.692c-91.59-91.59-240.085-91.59-331.674 0zm431.302 330.06c90.694 0 164.216-73.522 164.216-164.216s-73.522-164.216-164.216-164.216-164.216 73.522-164.216 164.216S409.3 664.22 499.994 664.22" clip-rule="evenodd"></path></svg>
</template>