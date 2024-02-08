<template>
  <ul class="page-breadcrumb breadcrumb disableds">
    <li v-for="(level, index) in levels" :key="index" class="breadcrumb-itemr d-flex align-items-center">
      <template v-if="level.active">
        <span class="active fw-bold">{{ level.label }}</span>
      </template>
      <template v-else>
        <router-link v-if="level.href" :to="level.href" class="crumbs fw">{{ level.label }}</router-link>
        <span v-else class="crumbs">{{ level.label }}</span>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props using defineProps
const props = defineProps<{
  levels: { label: string, href?: string, active?: boolean }[];
}>();

// Extract the 'to' prop from router-link
// const route = useRoute();
</script>

<style scoped>
.breadcrumb {
  padding: 0.5em !important;
  background: none !important;
  font-size: 14px;
}
.active {
  color: #212529;
}

.breadcrumb ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 1em;
  content: ">";
  color: var(--grey-color);
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
