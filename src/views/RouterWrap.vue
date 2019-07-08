<template>
  <div class="about">
    <h1>This is an router-wrap page</h1>
    <transition-group
      name="list"
      mode="in-out"
      :css='false'
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-for='comp in components' :key='comp.name' class='list-item'>
        <component :is='comp' />
      </div>
    </transition-group>
  </div>
</template>


<script>
/* eslint-disable no-param-reassign */

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

export default {
  name: 'wrap',
  components: {
    Home,
    About,
  },
  data() {
    return {
      components: [Home],
      timeout: 0,
      mapped: {
        home: Home,
        about: About,
      },
    };
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const enterTimeout = 500;
      console.log('start enter with timeout', enterTimeout);
      setTimeout(() => {
        console.log('done enter with timeout', enterTimeout);
        el.style.opacity = 1;
        done();
      }, enterTimeout);
    },
    leave(el, done) {
      console.log('start leave with timeout', this.timeout);
      setTimeout(() => {
        el.style.opacity = 0;
        console.log('done leave with timeout', this.timeout);
        done();
      }, this.timeout);
    },
  },

  mounted() {
    console.log(this.components);
  },
  beforeRouteUpdate(to, from, next) {
    const path = to.path.substr(1);
    this.timeout = this.$store.getters.getLeaveTime[path];
    this.components.push(this.mapped[path]);
    console.log(this.components[0].name, this.mapped[path].name);
    setTimeout(() => {
      this.components.shift();
    }, 50);
    setTimeout(() => {
      next();
    }, this.timeout);
  },
};
</script>

<style>
.list-item {
  /* transition: all 1s; */
}

</style>
