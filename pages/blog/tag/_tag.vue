<template>
  <div class="container">
    <div class="img">
      <img :src="tag.img" :alt="tag.name" />
    </div>
    <div>
      <div class="description">
        <div>
          <NuxtLink :to="'/'">
            <div>
              <h1>IRVB<span>&#160;</span></h1>
            </div>
          </NuxtLink>
          <h1>
            {{ tag.name }}
          </h1>
          <p>{{ tag.description }}</p>
            <nuxt-content :document="tag" />
        </div>
      </div>
    </div>
    <div class="articles">
      <NuxtLink to="/"><p>HOME</p></NuxtLink>
      <h3>Artículos de la categoría: {{ tag.name }}:</h3>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <PostCard :article="article" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',

  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles')
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.description {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--white);
}

a {
  text-decoration: none;
  color: var(--white);
}

ul {
  list-style: none;
  padding: 0;
}

img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
p {
  color: var(--primary-font)
}
.articles {
    padding: 1rem;
}
@media (min-width: 640px) { 
.articles {
    padding: 0rem;
}
 }
</style>
