FROM node:14.17.3-alpine
WORKDIR /app/backend
COPY package.json package.json 
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY . .
RUN npm install
EXPOSE 3000:3000
CMD ["npm", "run", "start"]