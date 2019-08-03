var Product = new Vue({
    el: '#account',

    data: {
        info: {},
        errors:[]
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
         checkRegister(){
            if(this.info.password === this.info.confirmPassword){
                this.isCheckRegister = true;
            }
            else{
                this.error.push("Sai mật khẩu");
            }
         }
    }

})
;