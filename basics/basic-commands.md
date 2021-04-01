# Basic Commands

### **Goal:** Getting started with pulling an ubuntu image and running a instance of image as a container and finally getting into the container and performing some basic linux commands.

---

### 1. Pulling an image from dockerhub:

```
docker pull <image name>
```

Eg.

```
docker pull ubuntu
```

Check our image by checking all docker images in our machine using `docker images -a`:

```
docker images -a

Eg. Output:

REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
mongo        latest    f03be0dc25f8   6 days ago   448MB
ubuntu       latest    8e428cff54c8   6 days ago   72.9MB
```

### 2. Creating a container with the docker image:

```
docker run -dit --name <new container name> <image name: tag>
```

Eg.

```
docker run -dit --name ubuntu_container ubuntu:latest
```

<details>

**<summary> -dit breakdown:</summary>**
i. `-d` : **detached mode** the container will run in background and print container ID,

ii. `-i` : **interative** This will keep STDIN oepn even if not attached.

iii.` -t` : **tty** Allocate a pseudo-TTY

iv. `-name`: **name** Assign a name to the container

**tty** is short of teletype, but popularly known as a terminal it allows you to interact with the system by passing on the data (you input) to the system, and displaying the output produced by the system.

</details>

<br>

Check if our container is created or not using `docker ps -a`:

```
docker ps -a

Eg. output:

CONTAINER ID   IMAGE           COMMAND       CREATED         STATUS         PORTS     NAMES
7997bb300bbc   ubuntu:latest   "/bin/bash"   4 seconds ago   Up 3 seconds             ubuntu_container
```

<br>

### 3. Executing created container:

```
docker exec -it <container name> <command>
```

The `docker exec` command runs a new command in a running container.

This will execute a our ubuntu_new and start a Bash session.

Eg.

```
docker exec -it ubuntu_new bash
```

### 4. Perform basic linux commands

After successfully running the interactive tty you will get a shell like below:

We will be perform some basic linux commands and exit the container.

```
pratham82@raptorx ~  docker exec -it ubuntu_container bash
root@7997bb300bbc:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@7997bb300bbc:/# touch testfile && echo "hello world" > testfile
root@7997bb300bbc:/# cat testfile
hello world
root@7997bb300bbc:/# exit
exit
pratham82@raptorx ~
```
