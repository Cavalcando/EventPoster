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
                        <tr>
                            <th scope="row">1</th>
                            <td>foo:bar</td>
                            <td>blaaa</td>
                            <td>ToDo</td>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>foo:bar</td>
                            <td>blaaa</td>
                            <td>ToDo</td>
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
    };
</script>

<style scoped>
</style>
