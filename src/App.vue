<template>
  <div class="container-fluid">
    <div id="app">
      <div class="row" v-if="!connected">
        <div class="col-md-12">
          <div class="form-group">
            <label for="socketServer">Websocket Server</label>

            <div class="input-group">
              <input v-model="serverUrl" type="text" class="form-control" id="socketServer" aria-describedby="socketServerHelp" placeholder="Enter server url">

              <div class="input-group-append">
                <button class="btn btn-primary" type="button" v-on:click="connect">Connect</button>
              </div>
            </div>

            <small id="socketServerHelp" class="form-text text-muted">Where 2 connect.</small>
          </div>
        </div>
      </div>

      <div class="row" v-if="connected">
        <div class="col-md-6">
          <event-builder @sendEvent="sendEvent" />
        </div>

        <div class="col-md-6">
          <event-log @sendEvent="sendEvent" ref="log" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBuilder from './components/EventBuilder';
import EventLog from './components/EventLog';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';

export default {
  name: 'App',
  components: {
    EventLog,
    EventBuilder,
  },
  data: () => {
    return {
      serverUrl: '',
      connected: false
    };
  },
  methods: {
    connect: function() {
      this.connected = true;

      Vue.use(new VueSocketIO({
        debug: true,
        connection: this.serverUrl,
      }));
    },
    sendEvent: function(data) {
      this.$socket.emit(data.name, data.payload);

      this.$refs.log.addRow(data);
    }
  }
}
</script>

<style>

</style>
