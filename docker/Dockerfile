FROM node:14.18.0-alpine as base
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --registry=https://registry.npm.taobao.org

FROM node:14.18.0-alpine as build
WORKDIR /app
COPY . .
COPY --from=base /app/node_modules /app/node_modules
RUN npm run build:prod

FROM nginx:alpine as prod
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /app
CMD ["nginx", "-g", "daemon off;"]
