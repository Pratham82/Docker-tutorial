# More complicated nodejs app

1. Building the image will be same as before

2. Running the container with port forwarding

The following command will run docker container named **node-app-container** created from **node-app** image which will be published on PORT 3000. -d will run it in detached mode.

```
docker run --init --rm --publish -d 3000:3000 --name node-app-container node-app
```

Check all running containers:
`docker ps -a`

```
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS                      PORTS                     NAMES
e08c5998cdfd   node-app          "docker-entrypoint.s…"   4 seconds ago   Up 4 seconds                0.0.0.0:49155->3000/tcp   node-app-container
```

Another way to run the same container:

The following command will run docker container named **node-app-container** created from **node-app** image. -d will run the container in detached mode. The difference is that we are using **-P** instead of --publish or -p, -P means Publish all exposed ports to random ports. So when we run the container our application will be served on random ports everytime. We can check the current container PORT is different.

```
docker run --init --rm --publish -d -P --name node-app-container node-app
```

Check all running containers:
`docker ps -a`

```
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS                      PORTS                     NAMES
3101a2b5f96e   node-app          "docker-entrypoint.s…"   4 seconds ago   Up 2 seconds                0.0.0.0:49154->3000/tcp   nifty_ramanujan
```
