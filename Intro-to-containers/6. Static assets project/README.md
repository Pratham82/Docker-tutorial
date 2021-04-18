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

4. Binding the code(build folder) from our host to the nginx container
   So we are not building the project in another container we are using the already built project from the host and making a bind between host and container using binding, which will make a tunnel between **build** directory from the host to the **/usr/share/nginx/html** So that the nginx container can directly access the **build** folder.
   **No Dockerfile is involved** we are directly running our react project inside a nginx container.

```bash
docker run --mount type=bind,source="$(pwd)"/build,target=/usr/share/nginx/html -p 8080:80 nginx
```

Bind mounts

5. Check the application running on the following PORT:

   [http://localhost:8080](http://localhost:8080)
