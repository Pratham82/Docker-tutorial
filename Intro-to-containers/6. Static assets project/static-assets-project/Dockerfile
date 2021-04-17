# This container will build the react project for us using node:12 stretch
FROM node:12-slim AS build

WORKDIR  /app

COPY .  .

# Simultaneously running npm install and npm run build, npm run build will give us the build/ directory which will have all the static files for running the application
RUN npm ci && npm run build


# This container will only run our application on nginx container 
FROM nginx:latest

# Copy the static build directory from the /app/build directory from the abive container to the nginx folder for serving
COPY --from=build /app/build /usr/share/nginx/html 