<template>
  <q-page padding class="flex flex-center row">
    <h2>Our Experiences >>> Our Fears</h2>
    <div class="col-12">
      <span class="text-left">Swipe &lt; if you're past that</span>

      <span class="float-right">Swipe &gt; if it's in your life</span>
    </div>

    <q-card
      class="col-6"
      v-if="onRight.length"
    >
      <q-card-section>
        <div class="text-h6">Worries - need a plan</div>
        <q-list>
          <q-card
            v-for="phrase in onRight"
            v-bind:key="phrase.key"
            @click="phrase.reset"
          >
            <q-card-section>
              {{phrase.text}}
            </q-card-section>

            <q-card-actions vertical>
              <q-btn @click="videos(phrase)">See videos</q-btn>
              <q-btn @click="call(phrase)">Call Me</q-btn>
              <q-btn @click="goals(phrase)">Write a goal statement</q-btn>
              <q-btn @click="diary(phrase)">Write a diary</q-btn>
              <q-btn @click="recordVideo(phrase)">Record a video</q-btn>
            </q-card-actions>
            <!--
                        <q-item-section side @click="reset(phrase)">
                          <q-icon name="delete" />
                        </q-item-section>
            -->
          </q-card>
        </q-list>
      </q-card-section>

    </q-card>

    <q-card
      class="col-6"
      v-if="onLeft.length"
    >
      <q-card-section>
        <div class="text-h6">No Worries - fear left behind</div>
        <q-list>
          <q-item
            v-for="phrase in onLeft"
            v-bind:key="phrase.key"
            @click="phrase.reset"
          >
            {{phrase.text}}
            <!--
                        <q-item-section side @click="reset(phrase)">
                          <q-icon name="delete" />
                        </q-item-section>
            -->
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>


    <q-list bordered separator class="q-mt-sm">
      <q-slide-item
        v-for="phrase in showing"
        v-bind:key="phrase.key"
        @left="opt => toRight(opt, phrase)"
        @right="opt => toLeft(opt, phrase)"
        left-color="red"
        right-color="green"
      >
        <template v-slot:left>
          <q-icon name="alarm"></q-icon>
          We will figure out a way, juntos
        </template>
        <template v-slot:right>
          <q-icon name="delete"></q-icon>
          I got this
        </template>

        <q-item>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" icon="question_answer"></q-avatar>
          </q-item-section>
          <q-item-section>
            {{phrase.text}}
          </q-item-section>
        </q-item>

      </q-slide-item>
    </q-list>

    <q-option-group
      v-model="language"
      :options="languageOptions"
      color="primary"
      inline
      @input="visible"
    />
  </q-page>
</template>


<script>
  import experiences from '../experienceKeys.json'

  export default {
    name: 'Experienced',
    data () {
      return {
        language: 'all',
        languageOptions: [
          {
            label: 'All',
            value: 'all'
          },
          {
            label: 'Español',
            value: 'espanol'
          },
          {
            label: 'English',
            value: 'english'
          },
        ],
        showing: [],
        onLeft: [],
        onRight: [],
      }
    },
    mounted () {
      this.experiences = experiences.nogo
      this.visible()
    },
    computed: {},
    methods: {
      reset (phrase) {
        phrase.reset()
      },
      dealt (item, phrase) {
        console.dir(item, phrase)
      },
      toLeft (reset, phrase) {
        phrase.reset = reset
        this.onLeft.push(phrase)
      },
      toRight (reset, phrase) {
        phrase.reset = reset
        this.onRight.push(phrase)
      },
      visible () {

        let assembled = []

        if (this.language === 'all') {
          for (let [key, text] of Object.entries(this.experiences.visible.espanol)) {
            if (key) {
              assembled.push({
                key: 'en:' + key,
                text: text + ' ~ ' + this.experiences.visible.english[key]
              })
            }
          }
        }

        if (this.language === 'espanol') {
          for (let [key, text] of Object.entries(this.experiences.visible.espanol)) {
            if (key) {
              assembled.push({
                key: 'en:' + key,
                text
              })
            }
          }
        }
        if (this.language === 'english') {
          for (let [key, text] of Object.entries(this.experiences.visible.english)) {
            if (key) {
              assembled.push({
                key: 'en:' + key,
                text
              })
            }
          }
        }
        this.showing = assembled
      },

      videos (phrase) {
        this.$q.notify('Coming Soon!')
      },
      call (phrase) {
        this.$q.notify('Coming Soon!')
      },
      goals (phrase) {
        this.$q.notify('Coming Soon!')
      },
      diary (phrase) {
        this.$q.notify('Coming Soon!')
      },
      recordVideo (phrase) {
        this.$q.notify('Coming Soon!')
      },
    },

  }
</script>
