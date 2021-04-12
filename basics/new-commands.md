# New Useful commands:

1. Remove all docker containers which were created with specific image:

Syntax:

```bash
docker rm $(docker ps --filter ancestor=<Image Name> -a)
```

The following command will remove all docker containers which were created with image named **node-img:1** here 1 stands for 1st version, and **-a** stands for all.

```bash
docker rm $(docker ps --filter ancestor=node-img:1 -a)
```

2. Run a docker container with port forwarding and autoremoval after use

```bash
docker run --init --rm --publish [HOST PORT]:[CONTAINER PORT] <Image Name>
```

This command will run a docker image, **--init** will run and init inside a container which will help us to kill the process on Ctrl + C mainly for a nodejs-container.
**--rm** flag will automatically removes the container once we exit it.
**--publish** flag will publish a container's port to host port.
So if we wanted to expose port 8000 inside the container to port 3000 outside the container, we would pass 3000:8000 to the --publish flag.

```bash
docker run --init --rm --publish 3001:3000 nodejs-app
```
