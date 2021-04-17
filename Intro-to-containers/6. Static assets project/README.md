# Static assets project with react and nginx

1. Build the image with tag:

```
docker build -t react-nginx-image .
```

2. Run the container with newly built image:

```
docker run --init --rm  -p 8080:80 --name react-nginx-container react-nginx-image:latest
```

3. Run the container with newly built image in detached mode:

```
 docker run -dit --name react-nginx-app -p 8080:80 react-nginx-image
```

4. Check the application running on the following PORT:

   [http://localhost:8080](http://localhost:8080)
