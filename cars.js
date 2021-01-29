function car(brand, model, year) {
    this.brand_ = brand;
    this.model_ = model;
    this.year_ = year;
}

var TOTAL_CARS = 30;

var car_array = [];



function create_cars(total, array_dest)
{
    for(let idx = 0; idx < total; idx++)
    {
        array_dest.push(new car("brand_" + idx, "model_" + idx, 2000 + idx));
    }
}

function print_cars_data(car_input)
{
    for (var car_idx of car_input)
    {
        console.log(car_idx.brand_ + " " + car_idx.model_ + " " + car_idx.year_+"\r\n");
    } 
}
/* APP */ 
create_cars(TOTAL_CARS, car_array);
print_cars_data(car_array);
