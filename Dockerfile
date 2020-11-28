FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./


# INstall app dependencies

# Awildcard is used to ensure both package.json and package-lock.json are copied 
# where available (npm@5+)

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
copy . .

# Bind the port 
EXPOSE 8080

# Run your app using CMD WHICH Defines node server.js
CMD [ "node", "server.js" ]
