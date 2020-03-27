<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Juntos<sup>2</sup> Powered Futures

          <div slot="subtitle">Version {{ version }}</div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>


        <q-item to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Front Page</q-item-label>
            <q-item-label caption>Go Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Experienced">
          <q-item-section avatar>
            <q-icon name="explore" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Experiences</q-item-label>
            <q-item-label caption>Don't fear what you know</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Paths">
          <q-item-section avatar>
            <q-icon name="directions" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Paths</q-item-label>
            <q-item-label caption>Again, don't fear what you know</q-item-label>
          </q-item-section>
        </q-item>


        <q-item to="/Timeline">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Timeline</q-item-label>
            <q-item-label caption>Again, really, don't fear what you know</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Internal Development Aids</q-item-label>


        <q-item clickable tag="a" target="_blank" href="https://material.io/resources/icons/?search=dele&style=baseline">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Icons To Consider</q-item-label>
            <q-item-label caption>Easiest to include</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://feathericons.com/">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>More Icons To Consider</q-item-label>
            <q-item-label caption>Wide range</q-item-label>
          </q-item-section>
        </q-item>

        <!--
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
        -->

      </q-list>
    </q-drawer>

    <q-page-container style="max-width: 800px" class="flex flex-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import version from '../statics/version.json'

export default {
  name: 'MyLayout',

  data () {
    return {
      version: version.version,
      leftDrawerOpen: false
    }
  }
}
</script>
