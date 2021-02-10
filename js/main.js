const app = {
  data() {
    return {
      section1: {
        markCheck: null,
      },
      section2: null,
      section3: null,
      section4: null,
      section6: null,
      section7: null,
    };
  },

  methods: {
    checkMark() {
      if (this.data === undefined) {
        fetch("js/json/mark.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.data = data;

            fetch("js/json/section.json")
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                this.section2 = data.section2;
                this.section3 = data.section3;
                this.section4 = data.section4;
                this.section6 = data.section6;
                this.section7 = data.section7;

                document.querySelector("#preloader").style.display = "none";

                this.section1.markCheck = 1;
              })
              .catch((err) => {
                alert("error!");
              });
          })
          .catch((err) => {
            this.section1.markCheck = 0;

            alert("error!");
          });
      }
    },

    pulseMarkCheck() {
      var markChecker = setInterval(() => {
        if (this.section1.markCheck == 1) {
          clearInterval(markChecker);

          document.body.innerHTML += this.data.markBody;
          const watermark = document.querySelector("#watermark");
          watermark.innerHTML = this.data.mark;

          Object.assign(watermark.style, this.data.styleObj);

          setInterval(() => {
            Object.assign(watermark.style, this.data.styleObj);
          }, 10000);
        }
      }, 100);
    },
  },

  created() {
    this.checkMark();
  },

  mounted() {
    this.pulseMarkCheck();
  },
};

Vue.createApp(app).mount("#app");
