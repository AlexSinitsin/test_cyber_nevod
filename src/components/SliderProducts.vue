<template>
  <div>
    <div class="products">
      <div class="slider">
        <h2>Может, ещё кое-что?</h2>
        <div class="slider_wrapper">
          <div class="slider_viewport" :style="{'left': updateleft}">
            <Slide class="slide" v-for="product in products" :slide="product" :key="product.id"></Slide>
          </div>
        </div>
        <div class="arrows">
          <div class="btn prev" @click="prev"></div>
          <div class="btn next" @click="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from '@/components/Slide.vue'
  export default {
    name: 'SliderProducts',
    components: {
      Slide
    },
    data() {
      return {
        left: 0,
        focusProduct: 5,
      }
    },
    props: ['slide'],
    computed: {
      products() {
        return this.$store.state.products
      },
      countProducts() {
  //      console.log(this.products.length)
        return this.products.length
      },
      updateleft() {
        return ('-' + this.left + 'px')
      }
    },
    methods: {
      prev() {
        if (this.left > 0) {
          this.left -= 216
          this.focusProduct -= 1
        }
      },
      next() {
        if (this.focusProduct < this.countProducts) {
          this.left += 216
          console.log(this.left)
          this.focusProduct += 1
        }
      }
    }
  }
</script>

<style scoped>
  .products {
    text-align: center;
    position: relative;
  }

  .products h2 {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    text-align: left;
  }

  .slider {
    display: inline-block;
    width: 1192px;
    height: 500px;
    text-align: center;
  }

  .slider_wrapper {
    display: inline-block;
    width: 1080px;
    height: 100%;
    overflow: hidden;
  }

  .slider_viewport {
    height: 100%;
    display: flex;
    position: relative;
    transition: 0.4s
  }

  .slide {
    width: 196px !important;
    height: 336px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 18px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 12px;
    margin: 0px 10px;
  }

  .arrows {
    position: absolute;
    top: 200px;
    width: 1192px;
  }

  .arrows .btn {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    transition: 0.3s;
  }

  .arrows .btn.prev {
    background: #009846 url(../assets/arrow-left.svg) 13px 14px no-repeat;
    position: absolute;
    left: 0px;
  }

  .arrows .btn.next {
    background: #009846 url(../assets/arrow-right.svg) 15px 14px no-repeat;
    position: absolute;
    right: 0px;
  }

  .arrows .btn:hover {
    opacity: 0.7;
  }
</style>