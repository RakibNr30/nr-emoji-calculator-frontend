<script setup>
import AppTitle from '@/components/AppTitle.vue'
</script>

<template>
  <header>
    <div class="wrapper" style="width: 100%">
      <AppTitle title="EMOJI CALCULATOR" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about-me">About Me</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/custom.css';
</style>
