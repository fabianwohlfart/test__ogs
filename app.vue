<template>
  <pre>{{ res }}</pre>
</template>
<script setup>
const res = await $fetch("/api/ogs");
</script>