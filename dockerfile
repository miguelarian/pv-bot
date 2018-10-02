FROM node:8.12.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

# build image: $ docker build -t <your username>/node-web-app .
# check image: $ docker images
# run image: $ docker run -p 49160:8080 -d <your username>/node-web-app
# Get container ID: $ docker ps
# Print app output: $ docker logs <container id>