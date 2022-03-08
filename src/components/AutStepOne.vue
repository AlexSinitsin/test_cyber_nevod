<template>
  <div class="sign_in_stap sign_in_stap_one">
    <div class="cross" @click="closePopaps"></div>
    <h2>Вход/регистрация</h2>
    <form action="" @submit.prevent="submite">
      <p>Введите номер своего телефона</p>
      <div class="fieldset">
        <span class="legend">Номер телефона</span>
        <div class="input">
          <span>+7</span>
          <input type='tel' v-model="tel">
        </div>
      </div>
      <p>После нажатия на кнопку вам поступит звоно. Отвечать на звонокне нужно.</p>
      <div class="capcha">
        <button class="arrows" @click="updateCapcha"></button>
        <div class="img" :style="{ 'background-image': 'url(' + updateCapchaImg + ')' }"></div>
        <input type="text" placeholder="Введите капчу" v-model="code">
      </div>
      <input type="submit" class="button" value="Позвонить мне">
      <input class="checkbox" id="p-data" type="checkbox" v-model="personal" :true-value="personalTrue"
        :false-value="personalFalse">
      <label for="p-data">
        <p class="label">Нажимая на кнопку, вы даете согласие на обработку
          <span>персональных данных</span> и принимаете условия онлайн
          заказа на изготовление и доставку блюд</p>
      </label>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AutStepOne',
    data() {
      return {
        tel: '',
        code: '',
        personalTrue: true,
        personalFalse: false,
        personal: false,
        capchaImg: ''
      }
    },
    computed: {
      updateCapchaImg() {
        return this.$store.state.img
      },
    },
    methods: {
      submite() {
        if (this.personal) {
          this.$store.dispatch('submitCapcha', {
            phone: ('7' + this.tel),
            code: this.code
          })
          this.code = ''
          this.$store.commit('ADD_DATA_STEP_ONE', {phone: ('7' + this.tel)})
        } else alert('Подтвердите обработку персональных данных')
      },
      updateCapcha() {
        this.$store.dispatch('addImg')
      },
      closePopaps() {
        this.$store.commit('CLOSE_POPAPS')
      }

    },
  }
</script>


<style scoped>
  .sign_in_stap {
    display: inline-block;
    position: fixed;
    left: calc(50% - 255px);
    top: 50px;
    padding: 48px;
    width: 509px;
    height: 582px;
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

  .sign_in_stap .fieldset {
    display: inline-block;
    background: #FFFFFF;
    border: 1px solid #009846;
    box-sizing: border-box;
    border-radius: 12px;
    color: #009846;
    text-align: left;
    width: 380px;
    height: 58px !important;
    padding: 18px 16px 18px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;

  }

  .sign_in_stap .fieldset input {
    font-size: 18px;
    margin-bottom: 20px;
    border: 0px;
  }

  .sign_in_stap input:focus {
    outline: none;
  }

  .sign_in_stap .fieldset .legend {
    display: block;
    padding: 0px 5px;
    background: white;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #009846;
    position: absolute;
    top: -10px;

  }

  .sign_in_stap .fieldset span {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

  .capcha {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .capcha .arrows {
    width: 15px;
    height: 15px;
    padding: 0px;
    border: 5px solid #EAEAEA;
    border-radius: 30px;
    background: url('../assets/arrows.svg') -1px 1px no-repeat;
    background-color: #EAEAEA;
    box-sizing: content-box;
  }

  .capcha .img {
    width: 107px;
    height: 50px;
  }

  .capcha input {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 12px;
    width: 282px;
    height: 58px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #777777;
    padding-left: 18px;
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
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: linear-gradient(180deg, #df6b6b 0%, #e77e67 100%);
  }

  input[type='checkbox'] {
    display: none;
  }

  label {
    display: inline-block;
    text-align: left;
    padding-left: 56px;
    position: relative;
  }

  label p.label {
    text-align: left;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #444444;
    margin: 0px;
  }

  label p.label span {
    display: inline-block;
    color: #CD424D;
    text-decoration: underline;
  }

  label:before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    left: 22px;
    background: #009846;
    border-radius: 2px;
  }

  input[type='checkbox']:checked+label:before {
    background: #009846 url('../assets/check.svg') 3px 4px no-repeat;
    ;
  }
</style>