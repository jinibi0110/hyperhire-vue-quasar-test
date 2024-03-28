<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <q-header flat class="bg-white text-black" height-hint="100">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <img
            alt="Youtube"
            src="~assets/logo-youtube.png"
            class="logo q-ml-lg"
          />

          <q-space />

          <q-input
            outlined
            bottom-slots
            placeholder="Search"
            type="search"
            bg-color="white"
            class="rounded-borders-20 search-field"
            clearable
          >
            <!-- <template v-slot:append>

            </template> -->
          </q-input>
          <q-btn id="search" flat icon="search" class="q-mb-sm" />
          <q-btn
            round
            flat
            icon="mic"
            class="btn-mic q-ml-sm q-mb-md q-pa-sm"
          >
            <q-tooltip class="tooltip-mic bg-gray" :offset="[10, 10]">
              Search with your voice
            </q-tooltip>
          </q-btn>

          <q-space />

          <div v-if="$q.screen.lt.sm || $q.screen.lt.md">
            <q-btn-dropdown flat round dense icon="more_vert" @click="showMenu = !showMenu">
              <template v-slot:default>
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar icon="video_call" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label style="font-size: 13px;">Create</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>

                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar icon="notifications" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label style="font-size: 13px;">Notifications</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>

                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar class="q-mb-md q-ml-sm q-my-auto" size="md">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label style="font-size: 13px;">My Account</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-btn-dropdown>
          </div>

          <div v-else>
            <q-btn
              round
              flat
              dense
              icon="video_call"
              class="q-ml-sm q-mb-md q-pa-md"
            >
              <q-tooltip class="bg-gray" :offset="[10, 10]">
                Create
              </q-tooltip>
            </q-btn>

            <q-btn
              round
              flat
              dense
              icon="notifications"
              class="q-ml-sm q-mb-md q-pa-md"
            >
              <q-tooltip class="bg-gray" :offset="[10, 10]">
                Notifications
              </q-tooltip>
            </q-btn>
            <q-avatar class="q-mb-md q-ml-sm">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section> Home </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="movie" />
              </q-item-section>

              <q-item-section> Videos </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="shop" />
              </q-item-section>

              <q-item-section> Subscriptions </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section> My Account </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="row">
            <div
              v-for="(content, n) in THUMBNAIL_CONTENTS"
              :key="n"
              class="q-mt-md"
              :class="
                $q.screen.lt.sm ? 'col-12' : $q.screen.lt.md ? 'col-6' : 'col-3'
              "
            >
              <content-list-card :details="content" />
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import ContentListCard from "../components/ContentListCard.vue";
import { THUMBNAIL_CONTENTS } from "../constants";

export default {
  components: {
    ContentListCard,
  },

  setup() {
    const showMenu = ref(false);

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    const onItemClick = (item) => {
      console.log('Clicked item:', item);
      showMenu.value = false;
    };

    return {
      drawer: ref(false),
      miniState: ref(true),
      THUMBNAIL_CONTENTS,
      showMenu,
      toggleMenu,
      onItemClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 7% !important;
  width: 7% !important;
}

.search-field {
  width: 500px !important;
  :deep(input) {
    padding-left: 20px;
  }

  :deep(.q-field__control) {
    padding: 0;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    margin-top: 3px;
    height: 45px !important;
  }
}

#search {
  background: #f0f0f0;
  border: 1px solid #cdcdcd;
  color: #0f0f0f;
  padding: 0;
  width: 70px;
  height: 45px;
  font-size: 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  margin-bottom: 17px;
}

.btn-mic {
  background-color: #f2f2f2;
  color: #0f0f0f;
}

@media only screen and (max-width: 376px) {
  .logo {
    height: 15% !important;
    width: 15% !important;
    margin-left: 0 !important;
  }

  .tooltip-mic {
    font-size: 5px !important;
  }

  .search-field, .btn-mic, .btn-dots, #search {
    margin-top: 12px !important;
    font-size: 12px !important;
  }
  .search-field {
    width: 110px !important;

    :deep(.q-field__control) {
      height: 30px !important;
    }
  }

  #search {
    width: 40px !important;
    height: 30px !important;
  }

  :deep(.q-btn-dropdown__arrow) {
    display: none !important;
  }
}
</style>
