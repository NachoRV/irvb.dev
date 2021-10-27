<template>
  <div class="container">
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
      <img v-if="article.img.length > 1"  class="d-none" :src="article.img" />
      <div>
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <p>by {{ article.author.name }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>
<style scoped>
.container {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
.container:hover {
 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

div  a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black);
}

div img {
  width: 100px;
  height:  75px;
  display: none;
}

h3, p {
  margin: 0 1rem;
}

@media (min-width: 400px) { 
div img {
  display: flex;
}
 }
</style>
