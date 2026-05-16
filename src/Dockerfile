# Use Node base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Expose port (optional)
EXPOSE 3000

# Run the app
CMD ["node", "src/app.js"]