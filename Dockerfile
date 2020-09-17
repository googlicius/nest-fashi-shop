# docker build -t fashishop:v1 .

FROM node:13-alpine

WORKDIR /app

COPY package*.json yarn.lock tsconfig*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3002

# CMD ["yarn", "start"]

# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
CMD ["node", "./dist/main"]
