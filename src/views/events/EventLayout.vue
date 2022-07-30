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

var count = 0

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
            if (obj._id == this.id) {
              this.event = obj
              count += 1
            }
            if (count + Object.keys(obj).length == Object.keys(obj).length) {
              this.$router.push({
                name: '404Resource',
                params: { resource: this.id }
              })
            }
          })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
