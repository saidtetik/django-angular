FROM node:13.10-alpine as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.15.7-alpine
COPY --from=builder /usr/src/app/dist/travel-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf