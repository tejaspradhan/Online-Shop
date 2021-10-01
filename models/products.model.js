const fs = require('fs')
const products = [];

class Product{
    constructor(t){
        this.title =t;  
    }
    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}

exports.Product = Product;