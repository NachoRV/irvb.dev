<template>
  <div>
    <div class="wrapper">
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <PostCard :article="article" />
          <!--         
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink> -->
        </li>
      </ul>
      <!-- <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
      <ul>
        <li v-for="tag of tags" :key="tag.slug">
          <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
            <p>
              {{ tag.name }}
            </p>
          </NuxtLink>
        </li>
      </ul> -->
    </div>
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
