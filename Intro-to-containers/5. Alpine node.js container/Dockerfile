# Building the app on first container
FROM node:12-stretch AS build
RUN mkdir /build
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .


# Runtime Stage only running the application
FROM alpine:3.12 

# Install nodejs on the container
RUN apk add --update nodejs 

# Adding node user and user group in our container
RUN addgroup -S node && adduser -S node -G node

# Set the user to node
USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --from=build --chown=node:node /build .

CMD [ "node", "index.js" ]
