docker run -d --restart always \
     --name restreamer \
     -e "RS_USERNAME=admin" -e "RS_PASSWORD=datarhei" \
     -p 8080:8080 -v /mnt/restreamer/db:/restreamer/db \
     datarhei/restreamer:latest