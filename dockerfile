FROM node:8.12.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

RUN echo "NODE_ENV value is: $NODE_ENV"
ENV NODE_ENV=production

CMD ["node", "dist/"]