FROM php:7.4-fpm
WORKDIR /usr/src/php-backend
# change script name to your own!
CMD [ "php", "./your-script.php" ]