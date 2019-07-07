<template>
  <div class="about">
    <h1>This is an about page</h1>
      <router-link to="/about/foo">foo</router-link> |
      <router-link to="/about/baz">bar</router-link> |
      <router-link to="/about/bar">baz</router-link> |
    <router-view/>
  </div>
</template>
