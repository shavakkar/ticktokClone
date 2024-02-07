<script setup>
const route = useRoute();
</script>
<template>
  <div
    id="TopNav"
    class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
  >
    <div
      :class="route.fullpath === '/' ? 'max-w-[1150px]' : ''"
      class="flex items-center justify-between w-full px-6 mx-auto"
    >
      <div :class="route.fullpath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <NuxtLink to="/">
          <img width="115" src="~/assets/images/tiktok-logo.png" />
        </NuxtLink>
      </div>

      <div
        class="hidden md:flex items-center bg-[#f1f1f2] p-1 rounded-full max-w-[380px w-full]"
      >
        <input
          type="text"
          class="w-full pl-3 py-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
          placeholder="Search Account"
        />
      </div>
    </div>
  </div>
</template>
