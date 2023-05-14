// To see how prototype is linked, check it in browser console.

/* prototype - it is a mechanism using which Javascript object inherits features from one another
Every object by default has a prototype attached to it. */

function Product(n, p, c){
    this.name = n;
    this.price = p;
    Category.call(this, c);
}

function Category(c){
    return this.categoryName = c;
}

Category.prototype.getCategoryName = function(){
    console.log("called")
    console.log(this.CategoryName);
}
Product.prototype = Object.create(Category.prototype);


let p = new Product('mobile',3522,'Android')


p.getCategoryName();

console.log(p.__proto__ == Product.prototype)