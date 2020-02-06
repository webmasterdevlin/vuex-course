<template>
  <section>
    <h1>Heroes Works!</h1>
    <div v-if="editingTracker === '0'" style="display: flex; place-content: center; place-items: center">
      <div style="">
          <Form :text="'SAVE'" :obj="heroForm" @handleSubmit="() => {}" />
          <v-divider></v-divider>
      </div>
    </div>
    <h3 v-if="isLoading">loading..</h3>
    <section v-else>
      <div v-if="heroes.length > 0">
        <v-card
          class="my-4 mx-auto"
          max-width="50rem"
          min-width="30rem"
          width="40rem"
          v-for="hero in heroes"
          :key="hero.id"
        >
          <v-card-text>
            <div v-if="editingTracker === hero.id">
              <Form :text="'UPDATE'" :obj="hero" @handleSubmit="() => {}" />
              <v-divider></v-divider>
            </div>
            <span v-else>{{
              `${hero.firstName} ${hero.lastName} is ${hero.knownAs}`
            }}</span>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              small
              v-if="editingTracker === hero.id"
              @click="() => (editingTracker = '0')"
            >
              CANCEL
            </v-btn>
            <v-btn text v-else @click="() => (editingTracker = hero.id)">
              EDIT
            </v-btn>

            <v-btn text color="primary" @click="goDetail(hero.id)"
              >DETAIL</v-btn
            >
            <v-btn text color="error" @click="() => {}">
              DELETE
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </section>
  </section>
</template>

<script>
import Form from "../../shared/components/Form";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Heroes",
  components: { Form },
  data: () => ({
    heroForm: {
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: ""
    },
    editingTracker: "0",
  }),
  computed: {
    ...mapGetters("hero", {
      heroes: "heroes",
      isLoading: "isLoading"
    })
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "hero-detail", params: { id } });
    },
    ...mapActions("hero", ["getHeroesAction"])
  },
  mounted() {
    this.getHeroesAction();
  }
};
</script>

<style scoped></style>
