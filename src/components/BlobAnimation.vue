<template>
  <div id="blobContainer">
    <vue-p5 v-on="{ setup, draw }"></vue-p5>
  </div>
</template>

<script>
// https://p5js.org/examples/color-radial-gradient.html

import VueP5 from "vue-p5";

export default {
  name: "BlobAnimation",
  components: {
    VueP5
  },
  data: function() {
    return {
      inc: 0.01,
      xOff1: 0,
      xOff2: 10000,
      start: 0,
      color1: null,
      color2: null
    };
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(window.innerWidth, window.innerHeight);
      sketch.background("rgba(0,0,0,0)");

      this.c1 = sketch.color("#E7B8F0");
      this.c2 = sketch.color("#CFBDF3");
      this.setGradient(sketch);
    },
    draw(sketch) {
      this.setGradient(sketch);

      // ======= PERLIN NOISE 1st EXAMPLE
      // let x = sketch.random(sketch.width);
      let x = sketch.map(sketch.noise(this.xOff1), 0, 1, 0, sketch.width);
      let y = sketch.map(sketch.noise(this.xOff2), 0, 1, 0, sketch.width);
      this.xOff1 += 0.002;
      this.xOff2 += 0.002;
      sketch.fill("#D0F4CF");
      //   sketch.stroke(0);
      sketch.ellipse(x, y, 280, 220);

      // ======= GRAPH
      // stroke(255)
      // noFill()
      // beginShape()
      // let xOff = start
      // for (let x = 0; x < width; x++) {
      // 	stroke(255)

      // 	// let n = map(noise(xOff), 0, 1, 0, height)
      // 	// let s = map(sin(xOff), -1, 1, -50, 50)
      // 	// let y = s + n // adding some sin wave pattern to perlin noise

      // 	let y = noise(xOff) * height

      // 	vertex(x, y)

      // 	xOff += inc
      // }
      // endShape()

      this.start += this.inc;
      //   sketch.noLoop();
    },
    setGradient(sketch) {
      // noprotect
      sketch.noFill();
      for (let x = 0; x < sketch.width; x++) {
        let inter = sketch.map(x, 0, sketch.width, 0, 1);
        let c = sketch.lerpColor(this.c1, this.c2, inter);
        sketch.stroke(c);
        sketch.line(x, 0, x, sketch.height);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#blobContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
