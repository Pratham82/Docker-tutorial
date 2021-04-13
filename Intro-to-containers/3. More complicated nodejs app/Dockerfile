FROM node:12-stretch

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

# . . Means copy everything from this directory to the Work directory
COPY --chown=node:node . .

# Installing node modules inside of the container, npm ci will adhere to the package-lock.json and installs all the required modules
RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]