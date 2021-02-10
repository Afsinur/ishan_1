const app = {
  data() {
    return {
      data: {
        mark: "Shahriar Afsin",
        markBody: "<!-- Watermark --><div id='watermark'></div>",
      },
      styleObj: {
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-45deg)",
        color: "rgba(175, 172, 172, 0.274)",
        zIndex: 99999,
        fontSize: "100px",
      },
      section2: {
        img: [
          { img: "img/section2/trusted_likes.png", alt: "brand-1" },
          { img: "img/section2/trusted_likes (1).png", alt: "brand-2" },
          { img: "img/section2/trusted_likes (2).png", alt: "brand-3" },
          { img: "img/section2/trusted_likes (3).png", alt: "brand-4" },
          { img: "img/section2/trusted_likes (4).png", alt: "brand-5" },
        ],
      },
      section3: {
        img: {
          img: "img/section3/Group 90.png",
          alt: "left-photo",
        },
        h2: "Awesome apps features",
        p:
          "Increase productivity with a simple to-do app.App for managing your parsonal budget",
        data: [
          {
            img: "img/section3/spd_1.png",
            alt: "speed",
            h5: "Fast Performance",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section3/tsk_1.png",
            alt: "task",
            h5: "prototyping",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section3/vctr_1.png",
            alt: "vector",
            h5: "Vector Editing",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
      },
      section4: {
        h2: "Smart ideas that you may love these anytime & anywhere",
        p:
          "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.",
        data: [
          {
            img: "img/section4/autometic payouts.png",
            alt: "autometic payouts",
            h5: "Autometic Payouts",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section4/network effect.png",
            alt: "network effect",
            h5: "Network Effect",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section4/bigger rewards methods.png",
            alt: "bigger rewards methods",
            h5: "Bigger Rewards Methods",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
      },
      section6: {
        data1: [
          {
            img: "img/section6/app development.png",
            alt: "app development",
            h5: "App Development",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/10 times award.png",
            alt: "10 times award",
            h5: "10 Times Award",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/cloud storage.png",
            alt: "cloud storage",
            h5: "Cloud Storage",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
        data2: [
          {
            img: "img/section6/customization.png",
            alt: "customization",
            h5: "Customization",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/ux planning.png",
            alt: "ux planning",
            h5: "UX Planning",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/customer support.png",
            alt: "customer support",
            h5: "Customer Support",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
      },
      section7: {
        data1: [
          {
            img: "img/section6/app development.png",
            alt: "app development",
            h5: "App Development",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/ux planning.png",
            alt: "ux planning",
            h5: "UX Planning",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
        data2: [
          {
            img: "img/section6/cloud storage.png",
            alt: "cloud storage",
            h5: "Cloud Storage",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
          {
            img: "img/section6/customer support.png",
            alt: "customer support",
            h5: "Customer Support",
            p:
              "Get your blood tests delivered at home collect a sample from the news your blood tests",
          },
        ],
      },
    };
  },

  methods: {
    checkMark() {
      if (this.data === undefined) {
        this.data = {
          mark: "Shahriar Afsin",
          markBody: "<!-- Watermark --><div id='watermark'></div>",
        };
        if (this.data === undefined) {
          this.section2 = null;
          this.section3 = null;
          this.section4 = null;
          this.section6 = null;
          this.section7 = null;
        }
      }
    },
  },

  beforeMount() {
    this.checkMark();
  },

  mounted() {
    document.body.innerHTML += this.data.markBody;
    const watermark = document.querySelector("#watermark");
    watermark.innerHTML = this.data.mark;
    const styleObj = this.styleObj;

    setTimeout(() => {
      Object.assign(watermark.style, styleObj);
    }, 2000);

    setInterval(() => {
      Object.assign(watermark.style, styleObj);
    }, 10000);
  },
};

Vue.createApp(app).mount("#app");
