FROM node:14.17.3-alpine
WORKDIR /app/backend
COPY package.json package.json 
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
ENV DATABASE_ADRESS='mongodb+srv://admin:admin123@cluster0.ewwpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
ENV PORT=3000
ENV NODE_ENV='development'
ENV SECRET='keyboard cat'
ENV JWT_SECRET='jwtsecret'
COPY . .
RUN npm install
EXPOSE 3000:3000
CMD ["npm", "run", "start"]