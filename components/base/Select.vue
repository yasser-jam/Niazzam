<template>
  <!-- <da-menu class="bg-base-200 w-full rounded-box">
    <da-menu-item>
      <da-dropdown>
        <da-dropdown-target class="flex justify-between">
          Select
          <Icon name="heroicons-solid:arrow-down" class="w-4 h-4 ml-1" />
        </da-dropdown-target>
        <da-dropdown-content class="z-10 bg-base-200 rounded-box">
          <da-menu>
            <da-menu-item v-for="option in options">{{ option.label }}</da-menu-item>
          </da-menu>
        </da-dropdown-content>
      </da-dropdown>
    </da-menu-item>
  </da-menu> -->


  <select class="select select-bordered w-full">
    <option selected v-for="option in options" @select="$emit('update:model-value', $event)">{{ option.label }}</option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps<{
  options: any[];
}>();
</script>
