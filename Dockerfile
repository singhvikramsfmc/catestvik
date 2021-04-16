FROM node:12
RUN npm config set strict-ssl false

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm config set registry https://repo1.uhc.com:443/artifactory/api/npm/npm-virtual

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]
