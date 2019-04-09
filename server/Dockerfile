FROM node:9.1.0
WORKDIR /app
ADD ./ /app
RUN npm i
RUN npm i -g nodemon
RUN npm i -g babel-cli
EXPOSE 3001
CMD ["babel-node","index.js"]

