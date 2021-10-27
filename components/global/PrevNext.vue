<template>
  <div>
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="font-bold text-primary hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  }
}
</script>
<style scoped>
a {
  display: block;
}
a:hover {
  text-decoration: underline;
}
div {
  display: flex;
  flex-direction: column;
}
@media (min-width: 640px) { 
  div {
    flex-direction: row;
    justify-content: space-between;
  }
 }
</style>
