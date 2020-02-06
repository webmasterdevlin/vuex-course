<template>
    <section>
        <h1>HeroDetail Works!</h1>
        <h2>{{id}}</h2>
        <h2>{{hero.id}}</h2>
    </section>
</template>

<script>
  import {getById} from "../../shared/api-call";

  export default {
    name: 'HeroDetail',
    data: () => ({
      id:'',
      hero:{}
    }),
    async beforeMount() {
      this.id = this.$route.params.id;
      const {data} = await getById('heroes', this.id);
      this.hero = data;
    }
  }
</script>

<style scoped>

</style>
