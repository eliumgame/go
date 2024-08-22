<script setup lang="ts">
useSeoMeta({
  title: 'NMTY Link',
  description: 'NMTY rediction app',
  titleTemplate: '⚡ NMTY Link - %s'
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UNotifications />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
