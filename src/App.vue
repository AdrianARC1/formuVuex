<template>
  <section>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </section>
  <router-view/>
</template>

<style lang="sass">
section
  background: rgb(44,151,174)
  background: linear-gradient(90deg, rgba(44,151,174,1) 0%, rgba(41,194,148,1) 100%)
  
</style>
