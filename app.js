const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: "",
      items: [
        {
          id: 1,
          name: "clothes",
          price: 100,
        },
        {
          id: 2,
          name: "electronics",
          price: 300,
        },
        {
          id: 1,
          name: "kitchen",
          price: 50,
        },
      ],
      isClicked1: false,
      isClicked2: false,
      isClicked3: false,
    };
  },
  watch: {
    // name(val) {
    //   if (val === "") {
    //     this.fullName = "";
    //   }
    //   return (this.fullname = val + "Koyun");
    // },

    counter(val) {
      if (val > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    totalPrice() {
      return this.items.reduce((total, curr) => total + curr.price, 0);
    },
  },
  methods: {
    getFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Koyun";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduceOne() {
      this.counter--;
    },
    setZero() {
      this.counter = 0;
    },
    submit(event) {
      // event.preventDefault();
    },
    addColor(val) {
      if (val === "1") {
        this.isClicked1 = !this.isClicked1;
      } else if (val === "2") {
        this.isClicked2 = !this.isClicked2;
      } else if (val === "3") {
        this.isClicked3 = !this.isClicked3;
      }
    },
    // addColor(val) {
    //   this[`isClicked${val}`] = !this[`isClicked${val}`];
    // },
  },
});

app.mount("#events");
