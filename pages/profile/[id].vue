<template>
  <MainLayout>
    <div
      class="pt-[90px] 2xl:pl-[18px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto"
    >
      <div class="flex w-[calc(100vw-230px)]">
        <img
          class="max-w-[120px] rounded-full"
          src="https://picsum.photos/id/8/300/320"
        />
        <div class="ml-5 w-full">
          <div class="text-[30px] font-bold truncate">User Name</div>
          <div class="text-[18px] truncate">User Name</div>
          <button
            class="flex items-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
          >
            <Icon class="mt-0.5 mr-1" name="mdi:pencil" size="18" />
            <div>Edit Profile</div>
          </button>

          <button
            class="flex items-center rounded-md my-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#f02c56]"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
</script>
