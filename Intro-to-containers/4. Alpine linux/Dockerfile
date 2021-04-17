FROM node:12-alpine

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

# Copying the package.json and pacakage-lock.json from the current directory to the working directory
COPY --chown=node:node package.json package-lock.json ./

# Doing the install before so that it will keep the cached version of this step and when we make changes in file and build the image it will be faster, because the installation is done before copying new files.

# Installing node modules inside of the container, npm ci will adhere to the package-lock.json and installs all the required modules
RUN npm ci

# . . Means copy everything from this directory to the Work directory
COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "index.js"]