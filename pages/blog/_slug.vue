<template>
<div>
  <article>
    <!-- <AppSearchInput /> -->
    <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink
            :to="`#${link.id}`">{{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav> -->
    <img :src="article.img" :alt="article.alt" />
    <div class="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <nuxt-content :document="article" />
    </div>
    <!-- <author :author="article.author" /> -->
    <prev-next :prev="prev" :next="next" />
  </article>
</div>
</template>
<script>
import getSiteMeta from  '../../utils/getSiteMeta';
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
head() {
  return {
    title: this.article.title,
    meta: [
      ...this.meta,
      {
        property: "article:published_time",
        content: this.article.createdAt,
      },
      {
        property: "article:modified_time",
        content: this.article.updatedAt,
      },
      {
        property: "article:tag",
        content: this.article.tags ? this.article.tags.toString() : "",
      },
      { name: "twitter:label1", content: "Written by" },
      { name: "twitter:data1", content: "Bob Ross" },
      { name: "twitter:label2", content: "Filed under" },
      {
        name: "twitter:data2",
        content: this.article.tags ? this.article.tags.toString() : "",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://bobross.com/articles/${this.$route.params.slug}`,
      },
    ],
  };
},
  computed: {
  meta() {
    const metaData = {
      type: "article",
      title: this.article.title,
      description: this.article.description,
      url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
      mainImage: this.article.image,
    };
    return getSiteMeta(metaData);
  }
},
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  }
}
</script>
<style>
img {
  width: 100%;
}
.article {
 margin: 1rem;
 margin-bottom: 4rem;
}
@media (min-width: 640px) { 
  .article {
    margin: 0rem;
    margin-bottom: 4rem;
  }
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
