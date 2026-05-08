# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the AmazingKira Vite/React static site.
# Final image is nginx:alpine serving the built /dist as static files.

FROM node:20-alpine AS build
WORKDIR /src/my-app
COPY my-app/package.json my-app/package-lock.json ./
RUN npm ci
COPY my-app/ ./
RUN npm run build

FROM nginx:alpine AS app
COPY --from=build /src/my-app/dist /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
