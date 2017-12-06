FROM node:6.3
MAINTAINER frantzdy romain frantzdyromain@gmail.com
EXPOSE 8080
ARG NPM_TOKEN
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
RUN npm install 
RUN rm -f .npmrc
CMD ["npm", "start"]