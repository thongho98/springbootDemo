var aseData = new Vue({
    el: "#app",

    data: {
      listUser: []
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
      getOne: function(param) {
        this.$http.get(aseUrl.listHot + param).then(response => {
          var data;
          //data = response.data.Data;
          data = response.data;
          this.listHot = data.splice(0, 1);
        });
      },

      formatDay(value) {
        if (value) {
          return moment(String(value)).format("DD-MM-YY");
        }
      },
      showValue(value) {
        if (value != "") {
          return ", " + value;
        }
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


