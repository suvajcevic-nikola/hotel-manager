FROM node:20-alpine
WORKDIR /app
ENV DATABASE_URL="file:./db/dev.db"
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate dev --name init
CMD sh -c "npm run test && npm run dev"