#!/bin/bash
envsubst < /etc/nginx/conf/app.conf.template > /etc/nginx/conf/default.conf && nginx -g 'daemon off;'
envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'