# Bind mounts

## What is binding mounts ?

When you use a bind mount, a file or directory on the host machine is mounted into a container, bind mounts will create a tunnel between the **source** directory which is present in the host to the **target** directory in the container

## Where can we use it ?

It can be used while development, if you are working with a project with **a lot of dependencies** and new developer joins, they will have to go through all the steps for running the project with desired dependencies and configurations. But if we created a docker container with all the dependencies and configurations baked in then they can just mount their development working directory to the container and just run the project.

## Usage

Syntax:

```bash
docker run --mount type=bind,source=<working directory>, target =<container directory> -p HOST_PORT:CONTAINER_PORT <docker image>
```

Eg. Using a nginx docker image with the current react project that will just run without Dockerfile, here we are using "$(pwd)" for getting the absolute path and then append build directory which will have the final react build. We will bind the **build** directory from the host to the container directory i.e. **/user/share/nginx/html/**

```bash
docker run --mount type=bind,source="$(pwd)"/build, target =/user/share/nginx/html -p HOST_PORT:CONTAINER_PORT <docker image>
```
