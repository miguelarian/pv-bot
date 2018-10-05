# Fucking-Fighter pv-bot

This is Fucking-Fighter bot for Payvision Bots League.

## Build dev

1. npm install
2. npm start -> this will create a web server in localhost:3000

## Authentication

The bot is secured by basic authentication. Credentials are received via environment variables. However, you can use hardcoded credentials for development purposes by setting NODE_ENV=development.

## Deploy with docker

1. docker build . -t miguelvr88/pv-bot
2. docker run -d -p 3000:3000 miguelvr88/pv-bot:latest

(Optionally, you can override the NODE_ENV variable with parameter: -e NODE_ENV=environment)

## Payvision bots league documentation

Here you can find further details about PV Bot challenge:
[Payvision Bots League](https://toqueteos.github.io/picasion/#/mode_duel)