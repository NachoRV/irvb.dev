<template>
  <div class="wrapper">
    <h1>Blog Posts</h1>
    <client-only>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <PostCard :article="article" />
        </li>
      </ul>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
      tags,
    }
  },
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: auto;
  padding: 0;
}
</style>
