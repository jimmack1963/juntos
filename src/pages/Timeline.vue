<template>
  <q-page padding>
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        We will keep bugging you from Freshman year to your first Job.

      </q-timeline-entry>

      <q-timeline-entry heading>Freshman Year</q-timeline-entry>
      <q-timeline-entry
        title="Initial Contact"
        :subtitle="baseDate"
        side="left"
      >
        <div>
          <ul>
            <li>Hi, we're a non-profit that wants to encourage you</li>
            <li>             in what ever you decide to do</li>
            <li>Cause someone once did that for us</li>
            <li>and even though it seemed like a fuss</li>
            <li>Our lives got better and more fun</li>
            <li>So until you've finished, we're not done</li>
          </ul>



        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Automated text messages"
        subtitle="Every SIX MONTHS"
        side="right"
        icon="delete"
      >
        <div>
          Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
        </div>
      </q-timeline-entry>


      <q-timeline-entry heading>Sophomore Year</q-timeline-entry>
      <q-timeline-entry
        title="Initial Contact"
        :subtitle="baseDate"
        side="left"
      >
        <div>
          <ul>
            <li>Hi, we're a non-profit that wants to encourage you</li>
            <li>             in what ever you decide to do</li>
            <li>Cause someone once did that for us</li>
            <li>and even though it seemed like a fuss</li>
            <li>Our lives got better and more fun</li>
            <li>So until you've finished, we're not done</li>
          </ul>



        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Automated text messages"
        subtitle="Every SIX MONTHS"
        side="right"
        icon="delete"
      >
        <div>
          Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
        </div>
      </q-timeline-entry>


      <q-timeline-entry heading>Junior Year</q-timeline-entry>
      <q-timeline-entry
        title="Initial Contact"
        :subtitle="baseDate"
        side="left"
      >
        <div>
          <ul>
            <li>Hi, we're a non-profit that wants to encourage you</li>
            <li>             in what ever you decide to do</li>
            <li>Cause someone once did that for us</li>
            <li>and even though it seemed like a fuss</li>
            <li>Our lives got better and more fun</li>
            <li>So until you've finished, we're not done</li>
          </ul>



        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Automated text messages"
        subtitle="Every SIX MONTHS"
        side="right"
        icon="delete"
      >
        <div>
          Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
        </div>
      </q-timeline-entry>


      <q-timeline-entry heading>Senior Year</q-timeline-entry>
      <q-timeline-entry
        title="Initial Contact"
        :subtitle="baseDate"
        side="left"
      >
        <div>
          <ul>
            <li>Hi, we're a non-profit that wants to encourage you</li>
            <li>             in what ever you decide to do</li>
            <li>Cause someone once did that for us</li>
            <li>and even though it seemed like a fuss</li>
            <li>Our lives got better and more fun</li>
            <li>So until you've finished, we're not done</li>
          </ul>



        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Automated text messages"
        subtitle="Every SIX MONTHS"
        side="right"
        icon="delete"
      >
        <div>
          Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
        </div>
      </q-timeline-entry>


      <q-timeline-entry heading>Taking Off a Year?</q-timeline-entry>
      <q-timeline-entry
        title="Initial Contact"
        :subtitle="baseDate"
        side="left"
      >
        <div>
          <ul>
            <li>Hi, we're a non-profit that wants to encourage you</li>
            <li>             in what ever you decide to do</li>
            <li>Cause someone once did that for us</li>
            <li>and even though it seemed like a fuss</li>
            <li>Our lives got better and more fun</li>
            <li>So until you've finished, we're not done</li>
          </ul>



        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Automated text messages"
        subtitle="Every SIX MONTHS"
        side="right"
        icon="delete"
      >
        <div>
          Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
        </div>
      </q-timeline-entry>


    <q-timeline-entry heading>Retention Year 1</q-timeline-entry>
    <q-timeline-entry
      title="Initial Contact"
      :subtitle="baseDate"
      side="left"
    >
      <div>
        <ul>
          <li>Hi, we're a non-profit that wants to encourage you</li>
          <li>             in what ever you decide to do</li>
          <li>Cause someone once did that for us</li>
          <li>and even though it seemed like a fuss</li>
          <li>Our lives got better and more fun</li>
          <li>So until you've finished, we're not done</li>
        </ul>



      </div>
    </q-timeline-entry>

    <q-timeline-entry
      title="Automated text messages"
      subtitle="Every SIX MONTHS"
      side="right"
      icon="delete"
    >
      <div>
        Have you thought about what you want to do?  Enter the top few ideas and we'll send you some resources.
      </div>
    </q-timeline-entry>


    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: 'Timeline',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  data () {
    return {
      baseDate: new Date().toLocaleString(),
    }
  }
}
</script>
