#### Build the application
FROM node:17-alpine AS build

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm run build

#### Run the application
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /frontend/build .
COPY --from=build /frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]