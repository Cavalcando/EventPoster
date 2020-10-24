<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between">
        <span class="navbar-brand mb-0 h1">EventPoster</span>

        <div>
            <connection-info></connection-info>
        </div>
    </nav>
</template>

<script>
import ConnectionInfo from "@/components/ConnectionInfo";
export default {
    name: 'NavBar',
    components: {ConnectionInfo}
}
</script>

<style scoped>

</style>
