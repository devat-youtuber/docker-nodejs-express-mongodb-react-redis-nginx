# Stage 1: build
FROM node:16-alpine as build

WORKDIR /app

COPY . .

RUN npm i && npm run build

# Stage 2: prod
FROM nginx:1.21.5-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]