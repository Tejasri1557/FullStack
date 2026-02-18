# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose app port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
