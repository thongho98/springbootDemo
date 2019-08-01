var Product = new Vue({
    el: '#account',

    data: {
        info: {}
    },
    created: function () {

    },
    methods: {
        saveData: function() {
            axios.post('http://localhost:8080/api/users', this.info,
            { 'headers':{'Content-Type': 'application/json'}})
            .then((response) => {
                console.log(response.data);
            })
         },
    }

})
;