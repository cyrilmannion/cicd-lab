# Use a slim Node base image
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer cache friendly)
COPY package*.json ./
RUN npm ci --omit=dev

COPY src/ ./src/

EXPOSE 3000
CMD ["node", "src/app.js"]