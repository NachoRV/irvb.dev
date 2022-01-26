<template>
  <div v-if="!acceptCookies" class="card">
    <p>
      Utilizamos cookies propias y de terceros para mejorar la experiencia del
      usuario a través de su navegación. Si continúas navegando aceptas su uso.
    </p>
    <div class="div-btn">
      <button @click="setCookie">[ Acepto ]</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const newCookie = 'CONSENT=Yes'
    const acceptCookies = false

    return {
      newCookie,
      acceptCookies,
    }
  },
  beforeMount() {
    if(this.getCookie('CONSENT')) this.acceptCookies = true
    const cookies = document.cookie
    const arrayCookies = cookies.replace(/ /g, '').split(';')
    this.acceptCookies = arrayCookies.includes(this.newCookie)
  },
  methods: {
    setCookie() {
      document.cookie = this.newCookie
      this.acceptCookies = true
    },
    getCookie(name) {
      const matches = document.cookie.match(
        new RegExp(
          `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
        )
      )
      return matches ? decodeURIComponent(matches[1]) : undefined
    }
  },
}
</script>
<style scoped>
.card {
  position: fixed;
  bottom: 2rem;
  background-color: var(--black);
  color: var(--white);
  padding: 1rem;
  max-width: 300px;
}
.div-btn {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
p {
  margin: 0;
  padding: 0;
}
button {
  color: var(--white);
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>