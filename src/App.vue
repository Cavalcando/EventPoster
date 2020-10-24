<template>
    <div id="app">
        <nav-bar @disconnect="disconnect"></nav-bar>

        <div class="container-fluid mt-4">
            <div class="row">
                <div class="col-md-6">
                    <event-builder @sendEvent="sendEvent" ref="builder"/>
                </div>

                <div class="col-md-6">
                    <event-log @loadEvent="loadEvent" @sendEvent="sendEvent" ref="log"/>
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
import NavBar from "@/components/NavBar";
import connectionHelper from "@/helper/ConnectionHelper";

export default {
    name: 'App',
    components: {
        NavBar,
        EventLog,
        EventBuilder,
    },
    methods: {
        sendEvent: function (data) {
            this.$socket.emit(data.name, data.payload);

            this.$refs.log.addRow(data);
        },
        loadEvent: function (data) {
            this.$refs.builder.load(data);
        },
    },
    mounted: function () {
        connectionHelper.showModal();
    }
}
</script>

<style>

</style>
