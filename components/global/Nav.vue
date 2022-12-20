<template>
  <div class="wrapper">
    <div>
      <NuxtLink :to="'/'">
        <div>
          <h1>IRVB<span>&#160;</span></h1>
        </div>
      </NuxtLink>
      <div>
        <img
          v-show="show"
          src="~assets/svg/menu.svg"
          alt="menu"
          @click="open"
        />
        <img
          v-show="!show"
          src="~assets/svg/close.svg"
          alt="menu"
          @click="open"
        />
      </div>
    </div>
    <client-only>
      <ul v-show="!show">
        <li v-for="tag of tags" :key="tag.slug">
          <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
            {{ tag.name }}
          </NuxtLink>
        </li>
      </ul>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    const tags = []
    const show = true

    return {
      tags,
      show,
    }
  },
  async fetch() {
    this.tags = await this.$content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .fetch()
  },
  methods: {
    open() {
      this.show = !this.show
    },
  },
}
</script>
<style scoped>
.wrapper div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 1.5rem;
}
ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 1rem;
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: var(--background-primary);

}
ul li {
  margin: 0.5rem 1rem;
}
ul li a {
  text-decoration: none;
  color: var(--black);
}
ul li a:hover {
  text-decoration: line-through;
  font-weight: bold;
}

h1 {
  position: relative;
  float: left;
  color: var(--black);
  font-size: 2rem;
}

h1 span {
  position: absolute;
  right: 0;
  width: 0;
  background: var(--background-primary);
  animation: escribir 5s steps(30);
}

@keyframes escribir {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

@media (min-width: 640px) {
  .wrapper div {
    margin: 0.5rem 0rem;
  }
}
</style>
