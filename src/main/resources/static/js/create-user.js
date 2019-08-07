var Product = new Vue({
    el: '#account',

    data: {
        info: {},
        isCheckRegister: false,
        error:'abc'
    },
    created: function () {

    },
    methods: {
        saveData: function() {
            if(this.info.password != this.info.confirmPassword){
                this.error='that bai!';
            }else{
                axios.post('/api/users', this.info,
                   { 'headers':{'Content-Type': 'application/json'}})
                this.error='thanh ccong';

            }

         }
         }
});