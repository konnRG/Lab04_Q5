<template>
  <h1>Passenger Details:</h1>
  <div class="details" v-if="event">
    <h1>{{ event.name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetailView', params: { id } }"
        >Passenger Details</router-link
      >
      |
      <router-link :to="{ name: 'EventAirlineView', params: { id } }"
        >Airline Details</router-link
      >
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEventsPass()
      .then((response) => {
        response.data.forEach((obj) => {
          obj.data.forEach((obj) => {
            this.event = obj
          })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
