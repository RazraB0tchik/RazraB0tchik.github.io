FROM node:16.17.0-bullseye-slim as build
WORKDIR /app
COPY ./package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
