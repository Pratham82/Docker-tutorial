# Python with Docker

## Goal: Pull a docker image customize it and add our own python example application to it and run it inside a container

<br>

### Steps to run:

### 1. Build an image from the provided **Dockerfile**

<br>
Syntax:

```
docker build -t <image-name> <dockerfile location>
```

In our case:

```
docker build -t docker-python .
```

### 2. Run container from our own docker image

<br>
Syntax:

```
docker run <image name>
```

Our command:

```
docker run docker-python
```

Output:

```
Hello From Docker
```
