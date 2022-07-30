<template>
  <h1>Passengers:</h1>
  <div class="home">
    <template v-for="event1 in events">
      <EventCard
        v-for="event2 in event1.data"
        :key="event2.id"
        :event="event2"
      />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'HomeView',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEventsPass()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
