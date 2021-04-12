# Building a nodejs application with docker

## Steps to run:

1. Build a docker image from the current Dockerfile:

```bash
docker build -t nodejs-app .
```

2. Execute an instance of that docker image:

**Syntax:**

```
docker run --init --rm --publish [HOST PORT]:[CONTAINER PORT] <Image Name>
```

```
docker run --init --rm --publish 3001:3000 nodejs-app
```

This command will run a docker image, **--init** will run and init inside a container which will help us to kill the process on Ctrl + C mainly for a nodejs-container.
**--rm** flag will automatically removes the container once we exit it.
**--publish** flag will publish a container's port to host port.
So if we wanted to expose port 8000 inside the container to port 3000 outside the container, we would pass 3000:8000 to the --publish flag.

Output:

```
Server started...🟢
```
