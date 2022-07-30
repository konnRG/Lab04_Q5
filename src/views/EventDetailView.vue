<template>
  <div class="details" v-if="event">
    <h1>Name: {{ event.name }}</h1>
    <p>Trips: {{ event.trips }}</p>
    <template v-for="event in event.airline" :key="event.id">
      <p>Airline Name:{{ event.name }}</p>
      <p>Country:{{ event.country }}</p>
      <img :src="event.logo" />
    </template>
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
