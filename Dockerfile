# Use the official Node.js 18 Alpine image as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight server to serve the built files
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]
