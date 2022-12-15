FROM node:16.13-alpine as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginx:alpine
COPY --from=builder /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
#CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
#RUN mkdir -p /app

#WORKDIR /app

#COPY . .
#COPY ./package.json .

# Install Angular CLI to run Build #
#RUN npm install -g @angular/cli 
#RUN npm install 
#RUN ng build
#RUN npm run build --prod
#WORKDIR /apps
#COPY . .
#COPY package.json package-lock.json ./
#RUN npm install
#RUN npm install -g @angular/cli
#ARG configuration=production
#RUN npm run build --prod


#CMD ["npm", "start"]

#FROM nginx:alpine
#COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

#COPY --from=builder /apps/dist/Angular12Crud usr/share/nginx/html
# Copy the EntryPoint
#CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

#COPY ./entryPoint.sh /
#RUN chmod +x entryPoint.sh
#ENTRYPOINT ["sh","/entryPoint.sh"]
#CMD ["nginx", "-g", "daemon off;"]
#FROM nginx:alpine
#COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
#COPY --from=builder /app/dist/Angular12Crud usr/share/nginx/html

#COPY ./entryPoint.sh /
#RUN chmod +x entryPoint.sh
#ENTRYPOINT ["sh","/entryPoint.sh"]

#CMD ["nginx", "-g", "daemon off;"]

