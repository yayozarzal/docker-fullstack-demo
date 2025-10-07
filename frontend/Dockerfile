# Etapa 1: build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: runtime (Nginx)
FROM nginx:stable-alpine
# borra default.conf y agrega la tuya (cache, SPA fallback opcional)
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# Config Nginx mínima
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]