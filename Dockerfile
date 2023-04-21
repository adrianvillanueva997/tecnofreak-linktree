FROM node:20.0.0-bullseye as base
FROM base as dependencies
WORKDIR /build
COPY package*.json .
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN npm install

FROM base as build
WORKDIR /build
COPY --from=dependencies /build/node_modules ./node_modules
COPY src ./src
COPY public ./public
COPY package.json next.config.js jsconfig.json ./
RUN npm run build && npm run export

FROM nginx:1.23.4-alpine as prod
COPY --from=build /build/out /usr/share/nginx/html
EXPOSE 80