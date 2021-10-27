<template>
  <div>
    <Nav />
    <main>
      <Nuxt />
    </main>
    <gprd />
    <myFooter />
  </div>
</template>
<style scoped>
div {
  width: 100%;
  margin: auto;
  padding: 1rem 0rem;
  position: relative;
}
@media (min-width: 640px) { 
  div {
    width: 95%;
  }
 }
@media (min-width: 768px) { 
  div {
    width: 95%;
  }
 }
@media (min-width: 1024px) { 
  div {
    max-width: 1000px;
  }
 }
</style>

      // => @media (min-width: 640px) { ... }
      // => @media (min-width: 768px) { ... }
      // => @media (min-width: 1024px) { ... }
      // => @media (min-width: 1280px) { ... }
      // => @media (min-width: 1536px) { ... }