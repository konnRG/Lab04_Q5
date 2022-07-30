<template>
  <div v-for="event in event.airline" :key="event.id">
    <p>Airline Name:{{ event.name }}</p>
    <p>Country:{{ event.country }}</p>
    <img :src="event.logo" />
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>
