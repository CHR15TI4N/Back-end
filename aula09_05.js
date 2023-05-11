const express = require("express");

const server = express();
server.use(express.json());

server.get("/health", (req,res)=>
    res.json({
        status : "Running"
    })
)

let products =[
    {
    id: 1,
    name: "PS4",
    price: 2500
},
{ 
    id: 2,
    name: "Nintendo Switch",
    price: 1500
},
{
    id: 3,
    name: "XBOX",
    price: 3000
}
]

server.get("/products",(req,res)=>{
    const moreThan = req.query.more_than?Number(req.query.more_than):0;
    res.json({
        products: products
            .filter((products)=>{
                return moreThan < products.price;
        })
    })
})

server.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find((product) => {
            return product.id ===id;
    });
    res.json({
        product
    })
})

server.post("/products",(req,res)=>{
    const newProduct = {
        id: products.length+1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.json({
        products: newProduct
    })
})

server.put("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find((product)=>{
        return product.id===id;
    })
    if(!product){
        return res.status(404).send("Product not found");
    }
    product.name = req.body.name;
    product.price = req.body.price;
    res.json({
        product
    })
})

server.delete("/products/:id", (req,res)=>{
    const id = Number(req.params.id);
    products = products.filter((product)=>{
        return product.id != id;
    }) 
    res.status(204).send();
})

const port = 8000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});