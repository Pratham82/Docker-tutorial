# Creating Docker Images

1. Create a Dockerfile

```
touch Dockerfile
```

2. Add the following lines to docker

```docker
FROM node:12-stretch

CMD [ "node", "-e" , "console.log(\"Hello from Docker\")"  ]
```

3. Building the docker image from Dockerfile

```docker
docker build --tag<Image Name>:<Image version> <source for Dockerfile>


```

Here we are building a **docker image** named **node-img** which will source its **Dockerfile** from the current directory, because of the **"."** at the end.

```docker
docker build --tag node-img:1 .

```

Example output:

```bash
Sending build context to Docker daemon  2.048kB
Step 1/2 : FROM node:12-stretch
 ---> 29be39bd6917
Step 2/2 : CMD [ "node", "-e" , "console.log(\"Hello from Docker\")"  ]
 ---> Running in a43713221825
Removing intermediate container a43713221825
 ---> 10ebe8652ec3
Successfully built 10ebe8652ec3
Successfully tagged node-img:1
```

4. Running the instance of that docker image as a container:

```
docker run -it node-img
```

Output:

```
Hello from Docker
```
