<template>

    <div>

        <button>{{categories_data.title}}</button>
    </div>

</template>


<script>
export default{
    props:{
        categories_data:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>