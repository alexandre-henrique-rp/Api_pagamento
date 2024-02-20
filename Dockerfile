FROM node:20.11.0-alpine

WORKDIR /home/node/app

RUN npm install -g @nestjs/cli

CMD [ "tail", "-f", "/dev/null" ]