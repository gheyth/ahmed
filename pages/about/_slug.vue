<template>
  <div>
    <nuxt-content :document="info" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const info = await $content('about', params.slug).fetch()

    return { info }
  }
}
</script>