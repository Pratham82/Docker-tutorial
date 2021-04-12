# Running every command as a ROOT user
# FROM node:12-stretch
#
# # Copy the index.js from the local directory and paste it into container's directory
# COPY index.js index.js
#
# CMD ["node", "index.js"]


# Running command as node user
FROM node:12-stretch

# For better security, Set the current user and usergroup as node which comes within the node container
USER node

# Creating a working directory for our applicaiton, if the direcory doesn't exist then it will create for you
WORKDIR /home/node/src

# Copy files with node user and user group
COPY --chown=node:node index.js index.js

# Add file (Add is used to download some file over the network or unzip the file)
ADD --chown=node:node index.js index.js

CMD ["node", "index.js"]
