<template>
  <div>
    ログイン中です。しばらくお待ち下さい。
  </div>
</template>

<script>
export default {
  mounted() {
    const token = this.$route.hash.split(".")[1].split('&')[0];
    const base64 = token.replace(/-/g, "+").replace(/_/g, "/");
    const user = JSON.parse(unescape(decodeURIComponent(window.atob(base64))));
    console.log(user);
    this.$store.commit('set_user', user);
    this.$router.replace('/');
  },
};
</script>