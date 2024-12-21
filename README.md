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
- npm i gitignore
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

![POST Login User](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734489336/CoffeeShopBackendTestsScreenshots/
Screenshot_2024-12-17_203519_dfgosh.png)

# Admin Processes.....

## Access Protected Product Routes:

Use the below outline and link with the login token created with the previous login response. Don't forget to assign a header to this request with authorization being the key and the value being the words Bearer and that copied token from the login response. 

Method: GET
URL: http://localhost:3000/products
Header:
Authorization: Bearer <your_jwt_token>

![Product Route Request](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734489727/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-17_204146_wt7qtx.png)

## Get All Users (Admin Only):

In the admin role, use this token in the header to be able to complete the getting of the users. If the profile for the admin has not be created nor logged into yet, please create an admin profile. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

Method: GET
URL: http://localhost:3000/users
Header:
Authorization: Bearer <admin_jwt_token>

![Create Admin User Postman](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734573287/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_194938_jjuaha.png)
![Login Admin User Postman](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734573289/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_195033_lsevb8.png)
![Created Admin User MongoDB](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734573287/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_195421_ogvouu.png)
![Admin Get All Users](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734573287/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_195250_dnmwc9.png)

## Get a Single User by ID:

To retrieve a single user by ID. Use the below to test in postman if you are able to get to them. 

Method: GET
URL: http://localhost:3000/users/<user_id>
Header:
Authorization: Bearer <user_jwt_token>

User ID: 67623217fe866f3cd0f081b7

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![Get a Single User Admin Only](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734573926/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_200342_nlgcza.png)

## Update a User by ID:

Use the below to update a user via Admin in postman.

Method: PUT
URL: http://localhost:3000/users/<user_id>
Header:
Authorization: Bearer <user_jwt_token>
Body: JSON
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}

User ID: 6763805443e72d86449b919c

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![User as Registered MongoDB](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734574610/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_201415_xqjy1t.png)
![User Updated MongoDB](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734574610/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_201441_s2ld6z.png)
![Put Update User Postman](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734574610/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_201605_g5cty3.png)

## Delete a User by ID (Admin Only):

Use the below to delete the user by ID using the Admin.

Method: DELETE
URL: http://localhost:3000/users/<user_id>
Header:
Authorization: Bearer <admin_jwt_token>

User ID: 6763805443e72d86449b919c

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![Admin Delete User by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734574870/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_202040_esefgd.png)

## Get All Products or Filter by Category:

Have the category in mind that you would like to get all of the products for. <category> is to be replaced in the link with the category name. 

Method: GET
Category: Mugs
URL: http://localhost:3000/products?category=<category>

![Get All Products](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734575576/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_203201_lb54rd.png)

## Get a Single Product by ID:

Admin login token will be needed for this process. Use the below to retrieve the product via ID.

Method: GET
URL: http://localhost:3000/products/<product_id>

Product ID: 6763853f43e72d86449b91a1

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![Get Product by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734576079/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_204108_e8ndid.png)

## Update a Product by ID:

Follow the steps below and make sure to have the login token for it to work properly for authentication.

Method: PUT
URL: http://localhost:3000/products/<product_id>
Body: JSON
{
  "name": "Large Coffee Mug",
  "description": "A large coffee mug, perfect for your morning coffee.",
  "price": 14.99,
  "category": "mugs",
  "stock": 60,
  "imageUrl": "http://example.com/mug.jpg"
}

Product ID: 6763853f43e72d86449b91a1

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![Admin Update Product by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734576369/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_204552_xc5l2n.png)

## Delete a Product by ID:

Follow the steps below and make sure to have the login token for it to work properly for authentication.

Method: DELETE
URL: http://localhost:3000/products/<product_id>

Product ID: 6763853f43e72d86449b91a1

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1NzMwMTAsImV4cCI6MTczNDU3NjYxMH0.6wYteEv9M9id0IUJn1d8oF35JUHFdLwSKgOszQMLcrc

![Admin Delete Product by ID](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734576635/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-18_204955_sorifb.png)

## Create a Product with Image Upload:

Method: POST
URL: http://localhost:3000/products
Headers:
Authorization: Bearer <your_jwt_token>
Body: Form Data

{
    "name": "Fur Parent Mug",
    "description": "Now Fur Parents can Unite",
    "price": 14.99,
    "category": "mug",
    "stock": 100,
    "imageUrl": "/uploads/image-1734663429989.webp",
    "_id": "6764dd06bd2fb18593b05685",
    "__v": 0
}
![MongoDB Entry](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734664819/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-19_211218_iz5uoj.png)
![Postman Put Product with Image](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734664819/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-19_211233_ffhtr8.png)

## Get All Products with Pagination and Filtering:
Follow the steps below to pull the product via pagination, filtering, and sorting. 

Method: GET
URL: http://localhost:3000/products?page=1&limit=10&category=mug&sortBy=price&sortOrder=asc

Just in case Auth Header Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzYzN2JhNTQzZTcyZDg2NDQ5YjkxOTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ2NjMwODEsImV4cCI6MTczNDY2NjY4MX0.VmdeVSa-y7oLlvschLk29fHLR3eIAQf2e5Ga388oncU

![Filtered Results](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734666326/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-19_214340_tcm0lu.png)

# Rendered Application (render.com) Admin Tasks

## Login Admin User

Use this link within postman to login: https://coffee-shop-backend-auth.onrender.com/auth/login. You will need the login details for the admin to complete this process.

![Admin Login](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734800716/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-21_110432_milwu6.png)

## Add Product to Database

Use this link to post documents to the MongoDB: https://coffee-shop-backend-auth.onrender.com/products. You will need the Bearer token received from the admin login. The following details about the post will be needed in the body as form-data...
name, description, price, category, stock, and image. With all fields required except for the stock and image. Image will come from upload of the image from your storage.

![Admin Add Product](https://res.cloudinary.com/dgls7u3iq/image/upload/v1734805970/CoffeeShopBackendTestsScreenshots/Screenshot_2024-12-21_121721_bahxjf.png)