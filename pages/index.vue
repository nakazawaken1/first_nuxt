<template>
  <div v-if="$store.getters.email">
    {{$store.getters.email}}
    <button @click="logout">ログアウト</button>
  </div>
  <div class="container" v-else>    
    <button @click="$auth.loginWith('asana')">asanaログイン</button>
    <button @click="$auth.loginWith('google')">googleログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
      this.$store.commit('set_user', {});
    }
  }
}
</script>
