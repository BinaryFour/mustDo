# Use the latest LTS version of Node.js
FROM node:20-bullseye-slim
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and yarn-lock
COPY package*.json yarn.lock ./
 
# Install dependencies
RUN yarn
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["yarn", "run", "dev"]