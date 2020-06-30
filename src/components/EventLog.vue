<template>
    <div class="row flex-grow-1 overflow-auto">
        <h2 class="mb-4 mt-4">Event Log</h2>

        <div class="col-md-12">
            <b-tabs content-class="mt-3">
                <b-tab title="Inbound" active>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Event</th>
                            <th scope="col">Time</th>
                            <th scope="col">Payload</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in inbound" v-bind:key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.time }}</td>
                            <td>ToDo</td>
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
                            <th scope="col">#</th>
                            <th scope="col">Event</th>
                            <th scope="col">Time</th>
                            <th scope="col">Payload</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in outbound" v-bind:key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.time | moment("from", "now") }}</td>
                            <td>
                                <button class="btn btn-info" v-b-modal="'outbound-' + index">Show</button>

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
            }
        }
    };
</script>

<style scoped>
</style>
