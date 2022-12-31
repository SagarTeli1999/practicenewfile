FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node newserver.js
EXPOSE 3001