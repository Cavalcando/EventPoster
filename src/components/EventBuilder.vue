<template>
  <div class="flex-grow-1 mt-2">
    <h2 class="mb-4 mt-4">Event Builder</h2>

    <div class="form-group">
      <label for="eventName">Event Name</label>

      <div class="input-group">
        <input v-model="name" type="text" class="form-control" id="eventName" aria-describedby="eventNameHelp" placeholder="Enter event name">

        <div class="input-group-append">
          <button class="btn btn-primary" type="button" v-on:click="send">Send Event</button>
        </div>
      </div>

      <small id="eventNameHelp" class="form-text text-muted">Define event name here.</small>
    </div>

    <b-tabs content-class="mt-3">
      <b-tab title="Payload" active>
        <div class="form-group">
          <label for="eventPayload">Event Payload</label>
          <textarea v-model="payload" class="form-control" id="eventPayload" rows="10" aria-describedby="eventPayloadHelp"></textarea>

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
  name: 'EventBuilder',
  data: () => {
    return {
      payload: '{}',
      name: ''
    };
  },
  methods: {
    send: function () {
      const payload = JSON.parse(this.payload);

      this.$emit('sendEvent', {
        name: this.name,
        payload: payload,
        time: new Date()
      });
    },
    load: function(item) {
      this.payload = JSON.stringify(item.payload);
      this.name = item.name;
    }
  }
}
</script>

<style scoped>

</style>
