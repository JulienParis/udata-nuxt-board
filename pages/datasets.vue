<template>
  <div class="container">

    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        datasets
      </h1>
      <div class="links">
        <nuxt-link
          to="/"
          class="button--green"
        >
          homepage
        </nuxt-link>
      </div>
    
    </div>

    <div class="">
      <code>
        <pre>
          {{ datasets }}
        </pre>
      </code>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
  name: "Datasets",
  data() {
    return {
      swagger: undefined,
      datasets: undefined
    }
  },
  created() {
    let API = this.$API
    console.log("--- index > created > API :", API)

    let API_getDatasets = API && API.getDatasets().then(res => {
      console.log("--- index > created > API_getDatasets > res:", res)
      this.datasets = res
    })
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
