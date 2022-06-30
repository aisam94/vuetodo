<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/quasarframework/"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://chat.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://forum.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.com/quasarframework"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

<!-- ////////////////////////////// -->

<!-- <script>
import { useTodoStore } from "./main";

export default {
  beforeCreate() {
    //beforeCreate is called when instance initialized
    const store = useTodoStore();
    store.loadStore();
  },
};
</script>

<template>
  <main>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/archive">Archive</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-weight: 900;
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 1rem 0 0;
  background: #eee;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
}
#nav a.router-link-exact-active {
  color: #0428ff;
}
input[type="submit"] {
  background: #0028ff;
  color: white;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0 5px 10px #0428ff7a;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.25s ease-out;
  cursor: pointer;
}
input[type="checkbox"] {
  width: auto;
  margin: 0 0.5rem 0 0;
}
input[type="submit"]:hover {
  background: #3600ff;
  box-shadow: 0 3px 7px #0428ff7a;
}
input {
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
}
</style> -->
