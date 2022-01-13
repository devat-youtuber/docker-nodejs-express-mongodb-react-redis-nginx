# Build a Restful API | Nodejs + Express + Mongodb 
> + C.R.U.D, Filter, Paginate, Sort and Search API
## Author: Dev A.T Viet Nam
## Youtube: https://youtu.be/lda2psSYT9Q
## Getting started: `npm install` -> `npm run dev`
## 🔥 Donate
> + 👉 Buy Me a Coffee . Thank You ! 💗 :
> + 👉 https://www.buymeacoffee.com/QK1DkYS
> + 👉 Paypal : https://paypal.me/tuananh251192

### 👻👻VietNam: 
> + 👉Vietcombank: 0061001044348 (LE TUAN ANH)
> + 👉Momo : 0374481936

I - Setup
  1. npm i express.    
    - A web framework for node

  2. npm i mongoose      
    - A Object Document Mapper - ODM for MongoDB

  3. npm i cors      
    - CORS is a node.js package for providing a Connect/Express middleware

  4. npm i dotenv         
    - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

  5. npm i morgan         
    - HTTP request logger middleware for node.js

  6. npm i -D typescript       
    - TypeScript is JavaScript with syntax for types

  7. npm i -D ts-node-dev       
    - It restarts target node process when any of required files changes

  8. Create a "tsconfig.json" file and copy:     
  
    {
      "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "rootDir": "src"
      },
      "lib": ["es2015"]
    }

  9. Updating the package.json File

II - How to use?
  1. Routes  

    > GET    /api/products
    > GET    /api/products/:id
    > POST   /api/products
    > PUT    /api/products/:id
    > DELETE /api/products/:id

  2. Filter        
    gt = greater than, gte = greater than or equal.       
    lt = lesser than, lte = lesser than or equal.    
    
    > GET /api/products?price=15
    > GET /api/products?price[gt]=15.99
    > GET /api/products?price[gte]=15.99
    > GET /api/products?price[lt]=15.99
    > GET /api/products?price[lte]=15.99
    > GET /api/products?title[regex]=men&price[lte]=15.99

  3. Paginate               
    Default page=1 and limit=5    
    
    > GET /api/products?page=2
    > GET /api/products?page=2&limit=7

  4. Sort       
    Default sort='-createdAt'         
    
    > GET /api/products?sort=price
    > GET /api/products?sort=createdAt

  5. Full-text search    
  
    > GET /api/products?search=men