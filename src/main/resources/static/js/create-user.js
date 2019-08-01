var Product = new Vue({
    el: '#account',

    data: {
        info: {}
    },
    created: function () {

    },
    methods: {
        saveData: function() {
            axios.post('/api/users', this.info,
            { 'headers':{'Content-Type': 'application/json'}})
            .then((response) => {
                console.log("Tạo thành công");
            })
         },
    }

})
;