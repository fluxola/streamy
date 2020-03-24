FROM ubuntu:bionic

RUN apt-get update -y

RUN apt-get install -y nginx libnginx-mod-rtmp

RUN rm -rf /var/www/html/*

COPY index.html /var/www/html/

CMD ["nginx", "-g", "daemon off;"]