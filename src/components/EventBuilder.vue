<template>
  <div class="flex-grow-1 mt-2">
    <div class="form-group">
      <label for="eventName">Event Name</label>

      <div class="input-group">
        <input type="text" class="form-control" id="eventName" aria-describedby="eventNameHelp" placeholder="Enter event name">

        <div class="input-group-append">
          <button class="btn btn-primary" type="button">Send Event</button>
        </div>
      </div>

      <small id="eventNameHelp" class="form-text text-muted">Define event name here.</small>
    </div>

    <b-tabs content-class="mt-3">
      <b-tab title="Payload" active>
        <div class="form-group">
          <label for="eventPayload">Event Payload</label>
          <textarea class="form-control" id="eventPayload" rows="10" aria-describedby="eventPayloadHelp"></textarea>

          <small id="eventPayloadHelp" class="form-text text-muted">Define event payload here.</small>
        </div>
      </b-tab>

      <b-tab title="Settings">
        <p>Add settings</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'EventBuilder'
}
</script>

<style scoped>

</style>
