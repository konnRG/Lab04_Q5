<template>
  <p>Passenger ID: {{ event._id }}</p>
  <p>Trips: {{ event.trips }}</p>
</template>

<script>
export default {
  props: ['event']
}
</script>
