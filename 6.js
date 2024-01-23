let products = [
    {id: 1, name: 'samsung', price: 7000000},
    {id: 2, name: 'iPhone ', price: 80000000},
    {id: 3, name: 'redmi', price: 90000000},
];
function sortProductsByPrice() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
}
function displayProducts() {
    console.log("Danh sách sản phẩm sau khi sắp xếp:");
    products.forEach(function(product) {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}`);
    });
}
sortProductsByPrice();
displayProducts();
