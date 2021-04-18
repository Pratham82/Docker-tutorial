# Containers and Dev environments

## Running the go project inside a container

here the mount type is bind, source directory for project is the **current directory** and the target directory is **/src** , **-u** stands for the user we are passing hugo as the user and **jguyomard/hugo-builder:0.55** as the docker image which will be pulled from docker hub. And in the end we are binding the container on **0.0.0.0** so it can be accessible to the host as well.

```bash
docker run --init --rm --mount type=bind,src="$(pwd)",target=/src -p 1313:1313 -u hugo jguyomard/hugo-builder:0.55 hugo server --bind=0.0.0.0
```

This can be very useful for someone who does not know how to setup a development environment for a specific stack/ project, with using prebuilt docker images they can directly run their application inside that container, without going though the hassle of installing dependencies and even the Dockerfile.
