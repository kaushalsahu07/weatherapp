# Node Setup & Working Directory
FROM node:20-alpine
WORKDIR /WEATHERAPP

# Install the application dependencies
COPY package*.json ./
RUN npm ci

# Copying all the files in the project and exposing the port for the application
COPY . .
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]