FROM mhart/alpine-node:6.9.1

MAINTAINER Vladimir Dmitrovskiy "dmitrovskiyvl@gmail.com"

WORKDIR /var/www/html

COPY . /var/www/html

RUN npm install \
    && npm run build


CMD ["npm", "start"]
