FROM node:20.11.0-alpine

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]
