<template>
    
<div class="drawer-background" :class="{show: active, hide: !active}" >

        <div class="drawer" :class="{show: active, hide: !active}">
            <div class="drawer-close" @click="$emit('close_product_drawer') ">X</div>
            <div class="product">
                <h3>{{product.name}}</h3>
                <p>{{product.description}}</p>
                <h3>цена товара</h3>
                <h3>{{product.price}}</h3>
            </div>

            <div>
                <h3>количество в корзине</h3>
                <p class="price_all">{{product_total}}</p>
            </div>

            <div class="button-container">
                <button class="add" @click="addToCart()">увеличить количество</button>
                <button class="remove" @click="removeToCart()">уменьшить количество</button>

            </div>
        </div>
</div>

</template>

<script>
export default{
    props:['product', 'active', ],
    computed:{
            product_total(){

            return  this.$store.getters.productQuantity(this.product)
            }
         },

    methods: {
        addToCart(){
            this.$store.commit('addToCart', this.product)

        },

        removeToCart(){
                this.$store.commit('removeToCart', this.product)
        },
        
    },
}

</script>

<style>
h3{margin: 14px 0;}

@keyframes apear {
    from{
        opacity: 0;
    }
        
    to{
        opacity: 1;
    }
}

@keyframes back{
    from{
        opacity: 0;
    }

    to{
        opacity: 0.3;
    }
}



.button-container{
    display: inline-block;
    margin-top: 10px;
}

.price_all{
    display: inline-block;
    margin: 0;
}


.drawer-background{
    height: 400px;
    width: 300px;
    background-color: yellow;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
}

.drawer{
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100%;
    cursor:default;
}

.show_back{
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    /* animation: back 1s; */
}

.show{
    display: flex;
    animation: apear 1s;
}

.hide{
    display: none;
    animation: apear 1s;
    animation-direction: reverse;
}

.drawer-close{
    align-self: flex-end;
    color: black;
    width: 15px;
    padding: 5px;
    position: relative;
    top: 10px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: red;
    transition: all 1.5s;
}

.drawer-close:hover{
    cursor: pointer;
    color: red;
     background-color: white;
    transition: all 1s;
}

button{
width: 150px;
border-radius: 15px;
padding: 10px;
cursor: pointer;
margin:5px;
background-color: white;
transition: background-color 1s;
}

.add{
    border: 2px solid green;
}
.remove{
    border: 2px solid red;
}

.add:hover{
    background-color: green;
    transition: background-color 1s;
}

.add:active, .remove:active{
        border: 2px solid white;
}

.remove:hover{
    background-color: red;
    transition: background-color 1s;
}

@media (max-width: 450px){
    .drawer-background, .drawer{
     height: 80%;
   } 
   .drawer{
    justify-content: space-between
   }

}

</style>