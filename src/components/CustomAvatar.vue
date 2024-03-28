<template>
  <q-avatar
    v-if="photoUrl"
    :size="size ? size : ''"
    :class="shadow"
    :style="{
      'border-radius': circle ? '100px' : '10px',
    }"
  >
    <img :src="photoUrl" />
  </q-avatar>
  <q-avatar
    v-else
    square
    text-color="white"
    :font-size="fontSize"
    :size="size ? size : ''"
    class="text-bold"
    :class="shadow"
    :style="{
      'background-color': userType === 'employer' ? '#86bb05' : '#4c1cc0',
      'border-radius': circle ? '100px' : '10px',
    }"
  >
    {{ name.slice(0, 1) }}
  </q-avatar>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomAvatar",
  props: {
    photoUrl: {
      type: String,
      default: "",
    },

    userType: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: null,
    },

    fontSize: {
      type: String,
      default: "",
    },

    shadow: {
      type: String,
      default: "shadow-0",
    },

    circle: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
