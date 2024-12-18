# Coffee Shop Backend Testing

## Setup the project for the Backend development as follows:
- Admin Command Prompt (Terminal)
- cd OneDrive (only if you use this service on your computer)
- cd Desktop
- cd "folder name where all of your projects are saved"
- mkdir coffee-shop-backend
- cd coffee-shop-backend
- npm init -y
- npm install express mongoose
- code . to open vscode
- npm i gitignoew
- npm install --save-dev nodemon
- npm i express-rate-limit
- Make sure that "scripts": {"start": "node index.js", "dev": "nodemon index.js"} are in the package.json file or the server will not start. 
-Install other desired dependencies to your project. 

## Starting the Server
To ensure that you are able to run all testing properly. Be sure to run the command once the project is opened with npm run dev to start the server or postman will not run properly. 

## Get All Products
Use Get in the drop down with this link: http://localhost:3000/products. No body json raw needed to receive the following....
![Get All Products](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734409761/CoffeeShopBackendTestsScreenshots/coffeeshopbackendinitialgetproductstest_x91350.png)

## Post New Product
Use Post in the drop down with this link: http://localhost:3000/products with the following example of a body raw json to setup a new product entry (stock and imageUrl are not required for this entry):
{
    "name": "Enchinacea Plus Elderberry",
    "description": "Promote Immune Health with this fruity sweet and tart tea",
    "price": 4.99,
    "category": "tea",
    "stock": 16,
    "imageUrl": "https://images.pexels.com/photos/16228398/pexels-photo-16228398/free-photo-of-a-cup-of-tea-sits-on-a-table-with-a-saucer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
![Post New Product](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734409762/CoffeeShopBackendTestsScreenshots/coffeeshopbackendpostmanpostnewproduct_rnyphh.png)
![MongoDB Entries](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734410475/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-16_223834_jjraqk.png)

## Get Product by ID
Use the following link: http://localhost:3000/products/6760fbab9515593fb4c72220 the ID which follows the slash comes from the document entry from MongoDB. You will need that with a Get from the postman drop down to retrieve the item by ID. 
![Postman Get Item by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734410475/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-16_223807_cpui6q.png)

## Put Product by ID
Use Put from the drop down with the following link: http://localhost:3000/products/6760fbab9515593fb4c72220 of which as with getting the product by id requires you to get the ID from the MongoDB document entry.

Include the body json raw with the necessary details to be changed. In this one, the stock number was changed. 
{
    "_id": "6760fbab9515593fb4c72220",
    "name": "Enchinacea Plus Elderberry",
    "description": "Promote Immune Health with this fruity sweet and tart tea",
    "price": 4.99,
    "category": "tea",
    "stock": 10,
    "__v": 0
}
![Postman Put/Update Product by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734410986/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-16_224756_sgadz2.png)

## Delete Product by ID

Use Delete from the postman drop down with the following link to delete an item from your database: http://localhost:3000/products/6760fbab9515593fb4c72220. As before, you will need to get the product ID from the document entry from the database. 
![MongoDB Deleted Product](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734411959/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-16_230542_rptfv0.png)
![Postman Deleted Product](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734411960/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-16_230515_virmwq.png)

# Users...
## POST Register User
Use the below to setup the user registrations as outlined.

Method: POST
URL: http://localhost:3000/auth/register
Body: JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}

![Post Register User](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734488651/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-17_202343_rrgphn.png)

## Login a User:

Use the below to login a user and make sure to copy the token response received for the next testing step.

Method: POST
URL: http://localhost:3000/auth/login
Body: JSON
{
  "email": "john@example.com",
  "password": "password123"
}

![POST Login User](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734489336/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-17_203519_dfgosh.png)

# Access Protected Product Routes:

Use the below outline and link with the login token created with the previous login response. Don't forget to assign a header to this request with authorization being the key and the value being the words Bearer and that copied token from the login response. 

Method: GET
URL: http://localhost:3000/products
Header:
Authorization: Bearer <your_jwt_token>

![Product Route Request](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734489727/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-17_204146_wt7qtx.png)