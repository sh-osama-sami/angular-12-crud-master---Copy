
### STAGE 1: Build ###
#FROM node:lts-alpine AS build
#FROM public.ecr.aws/bitnami/node:16.13.1-prod-debian-10-r36 AS build
#### make the 'app' folder the current working directory
#WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./

#### install angular cli
#RUN npm install -g @angular/cli

#### install project dependencies
#RUN npm install

#### copy things
#COPY . .

#### generate build --prod
#RUN ng build --prod vitorspace && ng run vitorspace:server:production

### STAGE 2: Run ###
#FROM nginxinc/nginx-unprivileged
#FROM public.ecr.aws/bitnami/nginx:latest
#### copy nginx conf
#COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
#COPY --from=build /usr/src/app/dist/vitorspace/browser /usr/share/nginx/html

#### don't know what this is, but seems cool and techy
#CMD ["nginx", "-g", "daemon off;"]



################
# Run in NGINX #
################
FROM public.ecr.aws/bitnami/node:16.13.1-prod-debian-10-r36 as builder
#FROM node:lts-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist
EXPOSE 80

FROM public.ecr.aws/bitnami/nginx:latest
#FROM nginxinc/nginx-unprivileged

COPY --from=builder /dist /usr/share/nginx/html
#RUN chmod 777 /usr/share/nginx/html/assets/env.js
CMD ["nginx", "-g", "daemon off;"]

################
# Run in NGINX #
################
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

