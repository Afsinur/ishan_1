const app = {
  data() {
    return {
      data: "Shahriar Afsin",
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
    };
  },
  mounted() {
    document.body.innerHTML += "<!-- Watermark --><div id='watermark'></div>";
    const watermark = document.querySelector("#watermark");
    watermark.innerHTML = this.data;
    const styleObj = this.styleObj;
    setTimeout(() => {
      Object.assign(watermark.style, styleObj);
    }, 1000);
  },
};
Vue.createApp(app).mount("#app");
