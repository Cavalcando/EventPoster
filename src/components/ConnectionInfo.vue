<template>
    <div>
        <span :class="connected ? 'badge-success' : 'badge-danger'" class="badge mr-2">
            <template v-if="connected">{{ serverUrl }}</template>
            <template v-else>Disconnected</template>
        </span>

        <button
                class="btn btn-danger my-2 my-sm-0"
                type="submit"
                v-if="connected"
                @click="disconnect">
            Disconnect
        </button>
    </div>
</template>

<script>
import connectionHelper from "@/helper/ConnectionHelper";

export default {
    name: 'ConnectionInfo',
    computed: {
        connected: function () {
            return this.$store.state.connected
        },
        serverUrl: function () {
            return this.$store.state.serverUrl;
        }
    },
    methods: {
        disconnect: function () {
            connectionHelper.disconnect();
        }
    }
}
</script>

<style scoped>

</style>
