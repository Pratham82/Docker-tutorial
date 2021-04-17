# Alpine node.js image

1. Build the image with tag:

```
docker build -t alpine-nodejs-image .
```

2. Run the container with newly built image:

```
docker run --init --rm  -p 3000:3000 --name node-alpine-container alpine-nodejs-image
```

3. Run the container with newly built image in detached mode:

```
docker run -dit -p 3000:3000 --name node-alpine-container alpine-nodejs-image
```

4. Check the application running on the following PORT:

   [http://localhost:3000](http://localhost:3000)
