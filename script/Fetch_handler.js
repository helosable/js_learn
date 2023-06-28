class Fetch_handler{
    constructor(link){
        this.fetch_link = link
    }

    async get_data(){
        let data = await fetch(this.fetch_link)
        data = await data.json()
        return data
    }

}


export default Fetch_handler