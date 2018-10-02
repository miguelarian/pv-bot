FROM node:8.12.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "dist/"]