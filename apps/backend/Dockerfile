# Use a Node.js base image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install dependencies
RUN yarn install

# Build the Nest.js application
RUN yarn build

# Use a smaller Node.js image for production
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy the build output and node_modules from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port that your app runs on
EXPOSE 3001

# Start the application
CMD ["node", "dist/main"]