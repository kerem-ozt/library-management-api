# # FROM node:lts-alpine
# FROM node:14
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --include-dev
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

# Use an existing image as a base
FROM node:14

# Install netcat for the wait script
RUN apt-get update && apt-get install -y netcat

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Copy the entrypoint script
COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

# Expose the port that the app listens on
EXPOSE 3000

# Set the entrypoint script
ENTRYPOINT ["./docker-entrypoint.sh"]
