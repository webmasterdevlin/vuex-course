<template>
  <!--    <form @submit.prevent="onSubmit">-->
  <!--        <input type="text" placeholder="First Name" v-model="obj.firstName" />-->
  <!--        <input type="text" placeholder="Last Name" v-model="obj.lastName" />-->
  <!--        <input type="text" placeholder="House" v-model="obj.house" />-->
  <!--        <input type="text" placeholder="Known As" v-model="obj.knownAs" />-->
  <!--        <button type="submit" style="background-color: greenyellow">{{text}}</button>-->
  <!--    </form>-->

  <v-form v-model="valid" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="obj.firstName"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="obj.lastName"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="obj.house"
            :rules="nameRules"
            label="House"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="obj.knownAs"
            :rules="nameRules"
            label="Known as"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="ma-2" tile color="indigo" dark>{{ text }}</v-btn>
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
