import axios from 'axios';

const ApiRequests = {

    get : function (callback, url) {

        return axios.get(url)
            .then(function (response) {
                callback(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    post : function (callback, url, args) {

        axios.post(url, args)
            .then(function () {
                callback(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    put :   function(callback, url, args) {

        axios.put(url, args)
            .then(function () {
                callback()
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    delete : function (callback, url, args) {

        axios.delete(url, args)
            .then(function () {
                callback(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

    export default ApiRequests

