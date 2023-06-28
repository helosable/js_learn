import Fetch_handler from "./Fetch_handler.js";
import Element_creator from "./Element_creator.js";

const link = 'https://api.npoint.io/a2b70b4c0ded4fe6fe16'
const data_getter = new Fetch_handler(link)
let car_arr = await data_getter.get_data()
const element_creator = new Element_creator(car_arr)


element_creator.create_main_frame() 
element_creator.create_card_from_fetch()
// element_creator.create_last_card()