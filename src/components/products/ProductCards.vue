<template>
    <div>
            <div class="product-cards-container__card">
                <img class="image" :src="require('@/assets/images/' + product.image)" >
                <h3>{{product.name}}</h3>
                <h5>{{product.price}}</h5>
                <p>{{product.description}}</p>
                <button class="view-product-button" @click="$emit('view-product' ,product)">Просмотр</button>
            </div>

            
    </div>
    

</template>

<script>




export default{
    props: ["product"],
    components: {  }
}

</script>
<style>

.image{
    height: 300px;
    width: 300px;
}

.view-product-button{
    padding: 10px;
    border-radius: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    background-color: yellow;
    border: 2px solid yellow;
    color: black;
    transition: all 1s;
}

.view-product-button:hover{
    color: green;
    transition: color 1s;
}

.view-product-button:active{
    border: 2px solid green;
}


.product-cards-container__card img{
    width: 300px;
}


</style>