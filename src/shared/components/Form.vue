<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            autocomplete="off"
            v-model="obj.firstName"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            autocomplete="off"
            v-model="obj.lastName"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            autocomplete="off"
            v-model="obj.house"
            label="House"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            autocomplete="off"
            v-model="obj.knownAs"
            label="Known as"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="onSubmit" class="ma-2" tile color="indigo" dark>{{
      text
    }}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Form",
  props: {
    text: {
      type: String,
      default: () => String
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    }
  }
};
</script>

<style scoped></style>
