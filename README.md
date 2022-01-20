# Docker Tutorial | Nodejs + Express + Mongodb + React + Redis + Nginx

> How to use Docker to build and develop Nodejs, Express, Mongodb, React, and Redis applications.  
> How to use Docker with Nginx and Gitlab to automatically deploy to DigitalOcean.  

## Author: Dev A.T Viet Nam

## Youtube: https://youtu.be/sN3bNQutCw4

## Getting started with docker-compose(dev):
> `docker-compose -f docker-compose.dev.yml up --build`

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

  8. Delete all <none> images.  
    - `docker rmi $(docker images -f dangling=true -q)` 

  9. Show all running containers.         
    - `docker ps`  

  10. Show all containers.         
    - `docker ps -a`  

  11. Delete a stopped container.         
    - `docker rm "container-name"`  

  12. Delete all stopped containers.         
    - `docker rm $(docker ps -a -q)`  

  13. Kill all running containers.         
    - `docker kill $(docker ps -q)`  

  14. List volumes.         
    - `docker volume ls`

  15. Remove all unused local volumes.         
    - `docker volume prune`

  16. Remove one or more volumes.         
    - `docker volume rm "volume-name"`

  17. Run commands in a docker container.         
    - `docker exec -it "container-name" sh`

  18. Push image to docker hub.         
    - `docker push "image-name:tag"`

  19. Pull image from docker hub.         
    - `docker pull "image-name:tag"`

## Commonly used commands in docker-compose:  
  1. Build and rebuild a image.    
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
