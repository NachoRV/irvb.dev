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
import getSiteMeta from '../../utils/getSiteMeta'
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
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.img
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.img
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.title
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.img,
      }
      return getSiteMeta(metaData)
    },
    url() {
      if (this.article) return `/blog/${this.article.slug}`
      return this.$route.fullPath
    },
  },
  mounted() {
    console.log(this.article)
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

/* .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>
