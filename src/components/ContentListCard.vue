<template>
  <div class="q-pa-sm row items-start q-gutter-sm">
    <q-card class="my-card rounded-borders-12">
      <img :src="details.img_url">
    </q-card>

    <div>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="details.photo">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">{{ details.title }}</q-item-label>
          <q-item-label caption>{{ details.author }}</q-item-label>
          <q-item-label caption>{{ details.views }} views · {{ details.upload_duration }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    details: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped>
.my-card {
  width: auto;
}
</style>
