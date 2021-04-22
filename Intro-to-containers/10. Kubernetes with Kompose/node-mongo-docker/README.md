# Node-mongo-docker

## This application will run on our internal docker network and connected to the mongod server which is running on the same docker network

1 . Build the Image

```
docker build -t node-mongo .
```

2. Make sure you have the mongodb server running the docker's internal network

```
docker run -d -p 2717:27017 --network=app-net --name=mongo-server-docker mongo:3
```

3. Running our node application with correct credentials. Here we are providing the mongodb connection string to the node application as an environment variable.

```
docker run -p 3000:3000 --init --rm --network=app-net --env MONGO_CONNECTION_STRING=mongodb://mongo-server-docker:27017 node-mongo
```

4. Check the output on [localhost:3000](http://localhost:3000/)

```
{
"success": true,
"count": 0
}
```
