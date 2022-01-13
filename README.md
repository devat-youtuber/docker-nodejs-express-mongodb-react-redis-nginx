# Docker Tutorial | Nodejs + Express + Mongodb + React + Redis + Nginx

> How to use Docker to develop apps with Nodejs, Express, Mongodb, React and Redis.  
> How to use Docker with Nginx and Gitlab to automatically deploy to DigitalOcean.  

## Author: Dev A.T Viet Nam

## Youtube: https://youtu.be/Cl0lXkzMuuo

## Getting started: 
> `cd api`   
> `docker build -t devatvietnam/rest-api:v1 .`     
> `docker run -it --rm --name rest-api -p 5000:5000 devatvietnam/rest-api:v1`   

## 🔥 Donate
> + 👉 Buy Me a Coffee . Thank You ! 💗 :
> + 👉 https://www.buymeacoffee.com/QK1DkYS
> + 👉 Paypal : https://paypal.me/tuananh251192

### 👻👻VietNam: 
> + 👉Vietcombank: 0061001044348 (LE TUAN ANH)
> + 👉Momo : 0374481936

## Commonly used commands in docker:
  1. Build a image.    
    - `docker build -t "image-name" .`     
    - `docker build -f "Dockerfile.dev" -t "image-name" .`       

  2. Run a container.      
    - `docker run -it --rm --name "container-name" -p 5000:5000 "image-name"`     
    - `docker run -it -d --rm --name "container-name" -p 5000:5000 "image-name"`   
    - with -d: detach -> run a container in the background.     

  3. Stop a container.      
    - `docker stop "container-name"`       

  4. Stop all running containers.      
    - `docker stop $(docker ps -a -q)`      

  5. Show all images.  
    - `docker images`     

  6. Delete a image.  
    - `docker rmi "image-id|image-name"`  

  7. Delete all images.  
    - `docker rmi $(docker images -q)`  

  8. Show all running containers.         
    - `docker ps`  

  9. Show all containers.         
    - `docker ps -a`  

  10. Delete a stopped container.         
    - `docker rm "container-name"`  

  11. Delete all stopped containers.         
    - `docker rm $(docker ps -a -q)`  

  12. Kill all running containers.         
    - `docker kill $(docker ps -q)`  

## Commonly used commands in docker-compose:  
  1. Build aand rebuild a image.    
    - `docker-compose up --build`  
    - `docker-compose -f "docker-compose.dev.yml" up --build`  

  2. Run and start containers.    
    - `docker-compose up`   
    - `docker-compose -f "docker-compose.dev.yml" up`  

  3. Stop and clear containers.    
    - `docker-compose down`  
    - `docker-compose -f "docker-compose.dev.yml" down`  
 
  4. Stop and clear containers, volumes.    
    - `docker-compose down -v`  
    - `docker-compose -f "docker-compose.dev.yml" down -v`   
