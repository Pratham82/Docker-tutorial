# New Useful commands:

1. Remove all docker containers which were created with specific image:

Syntax:

```bash
docker rm $(docker ps --filter ancestor=<Image Name> -a)
```

The following command will remove all docker containers which were created with image named **node-img:1** here 1 stands for 1st version, and **-a** stands for all.

```bash
docker rm $(docker ps --filter ancestor=node-img:1 -a)
```
