<script setup lang="ts">
defineEmits(['edit'])
defineProps({
  colour: String,
  label: String,
  value: String
})
</script>

<template>
  <span class="flex items-center gap-1">
    <label :for="label" class="text-md dark:text-white-100">{{ label }}:</label>
    <textarea
      :name="label"
      :value="value"
      :style="{ backgroundColor: colour }"
      class="ml-auto h-fit min-h-8 resize rounded-sm px-2 py-1"
      @input="$emit('edit', ($event.target as HTMLTextAreaElement).value)"
    />
  </span>
</template>
