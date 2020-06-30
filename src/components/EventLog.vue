<template>
    <div class="row flex-grow-1 overflow-auto">
        <h2 class="mb-4 mt-4">Event Log</h2>

        <div class="col-md-12">
            <b-tabs content-class="mt-3">
                <b-tab title="Inbound" active>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Event</th>
                            <th scope="col">Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in inbound.slice().reverse()" v-bind:key="index">
                            <td>{{ item.name }}</td>
                            <td>{{ item.time | moment("from", "now") }}</td>
                            <td>
                                <button class="btn btn-info" v-b-modal="'outbound-' + index">Payload</button>
                                <button class="btn btn-primary ml-2">Replay</button>

                                <b-modal :id="'outbound-' + index" :title="'Payload of ' + item.name" ok-only>
                                    <pre><code>{{ JSON.stringify(item.payload) }}</code></pre>
                                </b-modal>
                            </td>
                        </tr>

                        <tr v-if="inbound.length === 0">
                            <td colspan="4" class="text-center">No entries</td>
                        </tr>
                        </tbody>
                    </table>
                </b-tab>

                <b-tab title="Outbound">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Event</th>
                            <th scope="col">Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in outbound.slice().reverse()" v-bind:key="index">
                            <td>{{ item.name }}</td>
                            <td>{{ item.time | moment("HH:mm:ss") }}</td>
                            <td>
                                <button class="btn btn-info" v-b-modal="'outbound-' + index">Payload</button>
                                <button class="btn btn-primary ml-2" v-on:click="replay(item)">Replay</button>

                                <b-modal :id="'outbound-' + index" :title="'Payload of ' + item.name" ok-only>
                                    <pre><code>{{ JSON.stringify(item.payload) }}</code></pre>
                                </b-modal>
                            </td>
                        </tr>

                        <tr v-if="outbound.length === 0">
                            <td colspan="4" class="text-center">No entries</td>
                        </tr>
                        </tbody>
                    </table>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventLog',
        data: () => {
            return {
                inbound: [],
                outbound: []
            }
        },
        methods: {
            addRow: function(data) {
                this.outbound.push(data);
            },
            replay: function(item) {
                let copy = JSON.parse(JSON.stringify(item));
                copy.time = new Date();

                this.$emit('sendEvent', copy);
            }
        }
    };
</script>

<style scoped>
</style>
