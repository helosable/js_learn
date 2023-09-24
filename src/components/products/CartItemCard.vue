<template>
   <div class="cart_item_card">
    <div class="header" >
        <h3>{{product.name}}</h3>
        <h3> Цена: {{product.price}}</h3>
        <h4> Количество: {{product.quantity}}</h4>
        <h4> Общая стоимость продукта: {{item__cost.toFixed(2)}}</h4>
    </div>


   </div>


</template>

<script>
export default{

    props:['product'],
    computed:{
        item__cost(){
            return this.product.price * this.product.quantity;
        }
    }
}


</script>

<style>


.cart_item_card{
    width: 300px;
    margin: 50px;
    background-color: yellow;
    border-radius: 5px;
    padding: 5px;
    text-align: left;

}

.header{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart_hidden{
    display: none;
}

.cart-item-card__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>