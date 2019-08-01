var aseData = new Vue({
    el: "#app",

    data: {
      listUser: [],
      info:{},
      data:{}
    },

    created: function() {
      this.getListUser("/api/users");
    },

    methods: {
      getListUser: function(param) {
        this.$http.get(param).then(response => {
          this.listUser = response.data;
          for (i = 0; i < this.k; i++) listUser[i] = fMoTa(listUser[i]);
        });
      },
      fetchData: function (id) {
          this.$http.get("/api/users/" + id)
                   .then(response => {
                     this.info = response.data;
           })
       },
       updateData: function (id){
           axios.put('/api/users/'+id, this.info,
                       {'headers':{'Content-Type': 'application/json'}}
                       )
           .then((response) => {console.log(response.data);})
       },
      deleteData: function (id) {
           this.$http.delete("/api/users/"+id);
           console.log("Success");
       },
      fMoTa(str) {
        var k = 0,
          x = 0,
          m = 120,
          n = 50,
          l = 0;
        l = str.length;
        k = str.indexOf(".", n);
        if (k < m && k < l) k = str.indexOf(".", k + 1);

        if (k == -1 || k > m) k = str.indexOf(" ", m - 10);

        if (k == -1) k = l;
        return str.slice(0, k);
      }
    }
  });




