<template>
  <div class="container-fluid">
    <div id="app" class="row">
      <div class="col-md-6">
        <event-builder />
      </div>

      <div class="col-md-6">
        <event-log />
      </div>
    </div>
  </div>
</template>

<script>
import EventBuilder from './components/EventBuilder';
import EventLog from './components/EventLog';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    EventLog,
    EventBuilder,
  }
}
</script>

<style>

</style>
