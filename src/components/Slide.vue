<template>
    <div class="position">
        <div>
            <img :src="slide.image" alt="img">
        <p>{{slide.name}}</p>
        <p class="comment">{{slide.comment}}</p>
        <p class="price">{{`${slide.price} &#8399;`}}</p>
        </div>
        <div class="button">Заказать</div>
    </div>
</template>

<script>
    export default {
        name: 'SliderProducts',
        components: {},
        data() {
            return {

            }
        },
        props: ['slide'],
        computed: {
            products() {
                return this.$store.state.products
            },
            lengthArr() {
                return this.products.length
            }
        }
    }
</script>

<style scoped>
    img {
        width: 160px;
    }

    p {
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #000000;
        text-align: left;
        margin-top: 0px;
        margin-bottom: 8px;
    }

    p.comment {
        font-family: PT Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #555555;
        margin-bottom: 14px;
    }

    p.price {
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 22px;
        color: #C62734;
        text-align: left;
        margin-bottom: 12px;
    }

    .button {
        padding: 10px 36px;
        width: 160px;
        height: 42px;
        background: linear-gradient(180deg, #E15959 0%, #E96F54 100%);
        border: 1px solid #C62734;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.4);
        border-radius: 9px;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);;
        cursor: pointer;
        transition: 0.3s;
    }
</style>