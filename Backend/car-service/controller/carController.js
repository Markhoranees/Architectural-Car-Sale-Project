import cars from "../data/carDatabase.js"

export const getCars=(req,res)=>{
    res.json(cars)
}

export const createCar=(req,res)=>{
    const car=req.body
    cars.push(car);
    res.status(201);
}