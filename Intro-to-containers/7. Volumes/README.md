# Volumes in Docker

1. Build the docker image:

```bash
docker build -t node-volumes-image .
```

2. Run the container with specified environment variable,volume type, docker volume and target. Here the target should be **data** because thats where the volume is mounted on the container

```bash
docker run --env DATA_PATH=/data/<filename> --mount type=volume,src=<volume name>,target=/data node-volumes-image:latest
```

```bash
docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=node-volume,target=/data node-volumes-image:latest
```

So every time we run the above command we will get incremented number, since the container is being stateful with the help of docker volumes, all the changes are persisted in the **docker volume** i.e. **node-volume**

We can check the docker volumes using the following command:

```
docker volume ls
```

Output:

```
DRIVER    VOLUME NAME
local     1694c7a3fb3da0ab486043e0ac681e601e95aa5523eff418a5e69f1f5d1b5337
local     node-volume
```
