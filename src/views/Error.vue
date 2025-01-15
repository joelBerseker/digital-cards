<template>
  <div class="error-view">
    <h1>Error</h1>
    <p>Sorry, something went wrong.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style scoped>
.error-view {
  text-align: center;
  margin-top: 50px;
}

.error-view h1 {
  font-size: 2em;
  color: red;
}

.error-view p {
  font-size: 1.2em;
}

.error-view a {
  color: blue;
  text-decoration: underline;
}
</style>
