<template>
  <div class="sign_in_stap sign_in_stap_one">
    <div class="cross" @click="closePopaps"></div>
    <h2>Вход/регистрация</h2>
    <form action="">
      <p>Введите последние 4 цифры номера
        входящего звонка</p>
      <div class="capcha">
        <p class="tel">+7 (999) 999</p>
        <input type="text" ref="phone" pattern="[0-9]{1}[0-9]{1}-[0-9]{1}[0-9]{1}" @keyup="inputCode" v-model="code" placeholder="_ _-_ _">
      </div>
      <p class="green_text">{{`Позвонить ещё раз через ${updateTime} сек.`}}</p>
      <div class="button" @click="goBack">Вернуться назад</div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AutStepTwo',
    data() {
      return {
        code: '',
        dataStepTwo: {
          phone: "",
          code: "",
          guid: "2182b0cb-e0f7-442d-9d92-5b3424709645",
          os_type: "iOS",
          app_version: "v1"
        },
        time: 60,
      }
    },
    computed: {
      updateCapchaImg() {
        return this.$store.state.img
      },
      updateCode() {
        return this.code
      },
      updateTime() {
        return this.time
      },
    },
    methods: {
      inputCode() {
        console.log(this.code)
        const x = this.$refs.phone.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,1})(\d{0,1})(\d{0,1})/);
        this.code = x[1] + '' +  x[2] + '-' + x[3] + '' + x[4];
        if (this.code.length === 5) {
          this.dataStepTwo.code = x[1] + '' + x[2] + '' + x[3] + '' + x[4];
          this.dataStepTwo.phone = this.$store.state.dataStepOne.phone
          this.$store.dispatch('submitDataStepTwo', this.dataStepTwo)
          this.dataStepTwo.code = ''
        }
      },
      updateCapcha() {
        this.$store.dispatch('addImg')
      },
      closePopaps() {
        this.$store.commit('CLOSE_POPAPS')
      },
      goBack() {
          this.$store.dispatch('addImg')
          this.$store.commit('CLOSE_POPAPS')
          this.$store.commit('OPEN_AUT_STEP_ONE')
      }

    },
    mounted() {
      setInterval(() => {
        if (this.$store.state.goTimer) {
          this.time = 60
        }
        if (this.time <= 0) {
          this.time = 0;
        } else this.time -= 1
      }, 1000)
    }
  }
</script>


<style scoped>
  .sign_in_stap {
    display: inline-block;
    position: fixed;
    left: calc(50% - 255px);
    top: 50px;
    padding: 48px;
    width: 488px;
    height: 434px;
    background: #FFFFFF;
    border-radius: 12px;
    box-sizing: border-box;
  }

  .cross {
    width: 56px;
    height: 56px;
    position: absolute;
    right: -20px;
    top: -20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(81, 151, 181, 0.12);
    border-radius: 12px;
    cursor: pointer;
  }

  .cross:before {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 2px;
    top: 28px;
    left: 16px;
    background: #777777;
    transform: rotate(45deg);
  }

  .cross:after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 2px;
    top: 28px;
    left: 16px;
    background: #777777;
    transform: rotate(-45deg);
  }

  .sign_in_stap h2 {
    font-family: BebasNeue;
    font-style: normal;
    font-weight: normal;
    font-size: 58px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .sign_in_stap p {
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }

  .sign_in_stap p.tel {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 0px;
    margin-right: 10px;
  }



  .sign_in_stap input:focus {
    outline: none;
  }


  .capcha {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;
  }

  .capcha input {
    background: transparent;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 12px;
    width: 87px;
    height: 58px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    color: #777777;
    padding-left: 18px;
  }

  .button {
    padding: 24px 36px;
    width: 380px;
    height: 76px;
    background: white;
    border: 2px solid #009846;
    box-sizing: border-box;
    border-radius: 9px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #009846;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: #18b963;
    color: white;
    border: 2px solid #18b963;
  }

  p.green_text {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #009846;
  }
</style>