#!/bin/bash

# quick and dirty script for creating basic RTMP nginx server with HLS support on Ubuntu/Debian systems

set -eou pipefail

apt-get update

apt-get upgrade -y

apt-get install -y nginx libnginx-mod-rtmp

cat <<EOF > /etc/nginx/nginx.conf

user  nginx;
worker_processes  auto;
 server_tokens off;
events {
    worker_connections  1024;
}
rtmp {
    server {
      listen 1935;
      chunk_size 4096;
      ping 30s;
      notify_method get;
      allow play all;
   application app {
          live on;
          hls on;   
          hls_path /usr/share/nginx/html;
          hls_nested on;  # create a new folder for each stream
          record off;
          on_publish http://localhost:1111/auth;

     }
 }
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    sendfile        on;
    tcp_nopush     on;
    keepalive_timeout  65;
    gzip  on;
    server {
        listen       80;
        server_name  _;
        location / {
            root   html;
            index  index.html index.htm;
        }
          # the http end point our web based users connect to see the live stream
          location /live {
            types {
                application/vnd.apple.mpegurl m3u8; 
             }
                 alias /usr/share/nginx/html;
                add_header Cache-Control no-cache;
       }
   }

EOF

cat <<EOF > /etc/nginx/sites-available/auth_proxy
server {
  listen 1111;
  location /auth {
  if ($arg_psk = 'verysecretpassword') {
    return 201;
  }
  return 404;
}
EOF


ln -s /etc/nginx/sites-available/auth_proxy /etc/nginx/sites-enabled/

systemctl restart nginx

NIC=$(pci=`lspci  | awk '/Ethernet/{print $1}'`; find /sys/class/net ! -type d | xargs --max-args=1 realpath  | awk -v pciid=$pci -F\/ '{if($0 ~ pciid){print $NF}}')

ADDRESS=$(ip addr show $NIC | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)

echo "RTMP is runn live at rtmp://$ADDRESS/live/user?psk=WhateverYourPasswordIs "

if (systemctl -q is-active nginx.service)
    then
    echo "RTMP is runn live at rtmp://$ADDRESS/live/user?psk=WhateverYourPasswordIs "
    exit 1
else
  echo "Installation has failed!"
fi