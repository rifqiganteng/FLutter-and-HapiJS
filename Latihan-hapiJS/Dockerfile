#FROM node:12
#WORKDIR /usr/app
#COPY package*.json ./
#RUN npm install
#COPY . .
#CMD node server.js
#EXPOSE 7070



# stage 1 building the code
#FROM node as builder
#WORKDIR /usr/app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
## stage 2
#FROM node
#WORKDIR /usr/app
#COPY package*.json ./
#RUN npm install --production
#
#COPY --from=builder /usr/app/dist ./dist
#
#COPY ormconfig.docker.json ./ormconfig.json
#COPY .env .
#
#EXPOSE 7070
#CMD node dist/src/server.js


#FROM node:12
## Create app directory
#WORKDIR /apps
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
## where available (npm@5+)
##COPY ./src ./src
#COPY ./dist ./
#COPY ./package*.json ./
#COPY ./package-lock.json ./
#RUN npm install
## If you are building your code for production
## RUN npm ci --only=production
## Bundle app source
#EXPOSE 7070
#CMD [ "npm", "run", "start:prod" ]


# copy this to apps
# copy package jesson
# npm install
# npm run start:



FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 7070
CMD [ "npm","run", "start" ]