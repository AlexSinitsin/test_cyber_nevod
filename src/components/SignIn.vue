<template>
  <div>
    <div class="start_page" v-if="updateSignIn">
      <div class="sign_in" v-if="updateSignIn"><button class="button" @click="openAut">Войти</button></div>
      <AutStepOne v-show="updateAutStepOne" />
      <AutStepTwo v-show="updateAutStepTwo" />
    </div>
    <SliderProducts v-else />
  </div>
</template>

<script>
  import AutStepOne from '@/components/AutStepOne'
  import AutStepTwo from '@/components/AutStepTwo'
  import SliderProducts from '@/components/SliderProducts'

  export default {
    name: 'SignIn',
    components: {
      AutStepOne,
      AutStepTwo,
      SliderProducts
    },
    computed: {
      updateSignIn() {
        return this.$store.state.openedSignIn
      },
      updateAutStepOne() {
        return this.$store.state.openedAutStepOne
      },
      updateAutStepTwo() {
        return this.$store.state.openedAutStepTwo
      }
    },
    methods: {
      openAut() {
        this.$store.commit('OPEN_AUT_STEP_ONE')
      }
    },
    mounted() {
      this.$store.dispatch('addImg')
    }
  }
</script>


<style scoped>
  .start_page {
    text-align: center;
  }

  .sign_in {
    padding: 40px;
    display: inline-block;
    /*  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15); */
    border-radius: 3px;
    margin-top: 50px;
    background: white;
  }

  .button {
    padding: 24px 36px;
    width: 380px;
    height: 76px;
    background: linear-gradient(180deg, #E15959 0%, #E96F54 100%);
    border: 1px solid #C62734;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.4);
    border-radius: 9px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
</style>