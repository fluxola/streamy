# streamy

just a way to stream

### Requirements

- Docker
- docker-compose
- node

#### Development

- Copy PHP backend files into ```php-backend```
- adjust php.Dockerfile CMD to reflect the name of your script


Run:
```
docker-compose -f dev.docker-compose.yml up
```
 to bring up the dev stack.

 - CTRL-c to stop it
 
Run:
```
docker-compose -f dev.docker-compose.yml down
```
to clean up old containers
