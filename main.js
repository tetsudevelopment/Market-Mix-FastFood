let app = new Vue({
  el: '#app',
  data: {
    cantida: 0,
    userId: "1234",
    userPin: "1234",
    viewMain: 0,
    viewEmployee:0,





  },
  methods: {
    getOut() {
      this.viewMain = 0;
    },
    login() {
      this.viewMain = 1;
    },
    waiter() {
      this.viewEmployee = 2;
    },
    cook() {
      this.viewEmployee = 1;
    }
  }
})
