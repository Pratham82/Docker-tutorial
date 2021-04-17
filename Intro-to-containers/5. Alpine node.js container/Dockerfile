FROM alpine:3.12 

# Install nodejs on the container
RUN apk add --update nodejs npm

# Adding node user and user group in our container
RUN addgroup -S node && adduser -S node -G node

# Set the user to node
USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD [ "node", "index.js" ]
