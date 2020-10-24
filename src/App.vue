<template>
    <div class="container-fluid">
        <div id="app">
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
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import Swal from 'sweetalert2';
import SocketIO from 'socket.io-client';

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
        connect: function () {
            this.connected = true;


        },
        sendEvent: function (data) {
            this.$socket.emit(data.name, data.payload);

            this.$refs.log.addRow(data);
        },
        loadEvent: function (data) {
            this.$refs.builder.load(data);
        }
    },
    mounted: function () {
        Swal.fire({
            title: 'Connect to server',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
                placeholder: 'localhost:8080'
            },
            confirmButtonText: 'Connect',
            showLoaderOnConfirm: true,
            preConfirm: (serverUrl) => {
                return new Promise(resolve => {
                    let socket = SocketIO(serverUrl);

                    socket.on('connect_error', () => {
                        Swal.showValidationMessage(`Unable to connect to server`);
                        Swal.hideLoading();
                        socket.destroy();
                    });

                    socket.on('connect', () => {
                        this.serverUrl = serverUrl;

                        Vue.use(new VueSocketIO({
                            debug: true,
                            connection: socket,
                        }));

                        resolve();
                    });
                });
            },
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();

                Swal.fire({
                    title: `Connected to ${this.serverUrl}`,
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        })
    }
}
</script>

<style>

</style>
