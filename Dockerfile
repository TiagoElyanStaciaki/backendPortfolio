FROM node:20-alpine

WORKDIR /server

ENV CHOKIDAR_USEPOLLING=true

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

RUN npx prisma generate

CMD ["npm", "run", "dev"]
