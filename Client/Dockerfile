FROM node:18-alpine

WORKDIR /app

# Copy only package files first (for faster Docker caching)
COPY package*.json ./

# Install only necessary dependencies
RUN npm install

# Now copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

EXPOSE 3000

# Start the static server
CMD ["serve", "-s", "build", "-l", "3000"]
