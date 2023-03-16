FROM node:18.14.2-alpine3.17

ARG PORT=3000
ARG ORIGIN=http://localhost:3000
ARG PUBLIC_DOMAIN=localhost

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./

RUN npm run build && npm prune --production

EXPOSE ${PORT}

CMD ["node","build/index.js"]