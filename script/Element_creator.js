class Element_creator{
    constructor(arr){
        this.arr = arr
    }

    create_main_frame() {
        document.getElementById('root').insertAdjacentHTML("afterbegin", '<div id="main_frame"></div>')
    }

    vernut_norm_card(mark, desc, link) {
    return `<div class="car_card">
    <p class="car_text top_text">
    ${mark}
    </p>
    <img src="${link}" class="car_img">
    <p class="car_text">
    ${desc}
    </p>
</div>` }


        create_last_card(){
            document.getElementById('main_frame').insertAdjacentHTML("beforeend", `<div class="car_card" id="last_card" style="width: auto; height:auto; padding: 20px;"></div>`)
            for (let i of this.arr){
                console.log(i)
                document.getElementById('last_card').insertAdjacentHTML('beforeend', `<p>${JSON.stringify(i)} <br> <br> <br></p>`)
            }
            
        }

        create_card_from_fetch(){
            for (let i of this.arr){
                document.getElementById("main_frame").
                insertAdjacentHTML("beforeend", this.vernut_norm_card(i.car_mark, i.desc, i.pic_link))
            }
            this.create_last_card()  
        }

}



export default Element_creator