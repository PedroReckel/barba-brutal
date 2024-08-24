# Use a Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install dependencies
RUN yarn install

# Expose the port Expo uses
EXPOSE 8081

# Start the Expo server
CMD ["yarn", "start"]