# Networks and Docker with MongoDB containers

## Running two mongo containers which will communicate with each other on bridged network

1. Check the current docker networks

```
docker network ls
```

Output:

```
NETWORK ID     NAME      DRIVER    SCOPE
717caaa5f3a5   bridge    bridge    local
cabf5cc5d600   host      host      local
d48c91e8e2fc   none      null      local
```

2. Creating out own standalone network with bridge drivers

```bash
docker network create --driver=bridge <name of the network>
```

```bash
docker network create --driver=bridge app-net
```

3. Running a mongod server on our newly created network.
   Here we are creating a container which will run in detached mode, we are providing our standalone network in **--network** and using **mongo:3** as our base image

```
docker run -d -p 2717:27017 --network=app-net --name=mongo-server-docker mongo:3
```

1. Running a mongo server on the same network. Here we are running a container in interactive shell, using the same network i.e **app-net**, we are providing **mongo** after **mongo:3** the mongo command will run the mongo shell inside the container with respect to the **mongo-server-docker** as a host.

```
docker run -it --network=app-net --name=mongo-client-docker mongo:3 mongo --host mongo-server-docker
```
