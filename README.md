# product-management-system

### Live Link :

### Introduction :

- This application allows user to create new product, update existing product and user is able to filter product by product id and able to sort it by productId, Product Name and Price. Used local storage for storing data.

### Technologies Used :

- HTML
- CSS
- JavaScript
- Bootstrap

### Features :

- Product has four attributes : ProductName ,Image,Price,Description.

- Name and price are required attributes.

- Description and Image can be avoided.

- ProductList table contains all the products.

- Products can be deleted using delete button.

- User can edit or view the product by routing to view-edit page of specific ID.

- validations for name price and Image are added.

- custom Alert messages for invalid details.

### Validations :

- ProductName : It must start with alphabet and then It can contain alphabets,numbers, and some symbols like /,(,),\_,-.
  It should not be empty.

- Price : It must be a number, should not be empty and can't contain "e".

- Photo : Size should be less than 200kb. Type must be either Jpeg,jpg or png.

### Folder Structure :

    .
    ├── CSS
    │   └── style.css
    ├── images
    │   ├── favicon.ico
    │   └── img.png
    ├── index.html
    ├── README.md
    ├── Scripts
    │   ├── script.js
    │   ├── validation.js
    │   └── view-edit.js
    └── view-edit.html
