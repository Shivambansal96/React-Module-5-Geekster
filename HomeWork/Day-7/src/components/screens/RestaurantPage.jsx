import Nav from "../Nav";
import {resData} from "../RestaurantData.js"
import Footer from "../Footer";

function RestaurantPage() {

    return(
        <div id="restaurant-page">

            <Nav />

            <br /><br /><br /><br /><br />

            <div id="serch-section" className="flex h-20 w-full justify-between">
                <div className=" w-60">
                    <input type="text" className=" w-full border-2 text-center"/>
                </div>

                <div className="flex">
                    <p>Minimum Rating:</p>
                    <input type="number" className="w-10 h-10 border-2 text-center" id="" value={0} />
                </div>
            </div>

            <div id="restaurant-datas-container" className="w-full flex flex-wrap gap-28 p-16">
                {resData.map((item) => {

console.log(item.URL);

                    return(
                        <div id="restaurant-page-main" className="h-40 w-1/4 rounded-md border-2 scale-125">

                        <div className="outer h-full flex flex-col justify-around">
                            <div className="top h-3/4 p-3 flex flex-col justify-center">
                                <div className="name flex">
                                    <p className="text-xl font-semibold ">{item.name}</p>
                                    <p className="text-center text-yellow-400"> 
                                    &nbsp;
                                        <span>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                    </p>
                                </div>

                                <div className="address text-xs flex flex-col justify-center">
                                    
                                    
                                    <p><i className="fa-solid fa-location-dot"></i>&nbsp;{item.address}, &nbsp;{item.address_line_2}</p>

                                    <p>{item.outcode} {item.postcode}</p>
                                </div>

                            </div>

                            <div className="below bg-slate-200 1/4 px-3">
                               <div className="type-of-food text-green-600 flex items-center">
                                    <i className="fa-solid fa-utensils"></i>
                                     &nbsp;
                                    <p className="text-sm">{item.type_of_food}</p>
                               </div>

                               <div className="visit-menu">
                                <a href={item.URL} className=" text-blue-700 cursor-pointer" target="_blank">Visit Menu</a>
                               </div>
                            </div>
                        </div>
                            
                        </div>
                    )
                })}
            </div>

            <Footer />

        </div>
    )
}

export default RestaurantPage;