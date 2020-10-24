import store from '../store/store';
import Swal from "sweetalert2";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import Vue from 'vue';

const connectionHelper = {
    connect: function() {
        Vue.use(new VueSocketIO({
            debug: true,
            connection: store.state.socket,
        }));
    },
    disconnect: function() {
        store.state.socket.destroy();
        store.state.connected = false;

        this.showModal();
    },
    showModal: function() {
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
                    store.state.socket = SocketIO(serverUrl);

                    store.state.socket.on('connect_error', () => {
                        Swal.showValidationMessage(`Unable to connect to server`);
                        Swal.hideLoading();
                        store.state.socket.destroy();

                        store.state.connected = false;
                    });

                    store.state.socket.on('connect', () => {
                        store.state.serverUrl = serverUrl;
                        store.state.connected = true;

                        this.connect();

                        resolve();
                    });
                });
            },
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();

                Swal.fire({
                    title: `Connected to ${store.state.serverUrl}`,
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        })
    }
}

export default connectionHelper;