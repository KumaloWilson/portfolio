# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS dependencies
WORKDIR /app
ENV COREPACK_HOME=/tmp/corepack
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN corepack pnpm install \
    --frozen-lockfile \
    --ignore-scripts

FROM node:22-alpine AS builder
WORKDIR /app
ENV COREPACK_HOME=/tmp/corepack
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=app_env,target=/app/.env \
    corepack pnpm build

FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=10001

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

RUN cp -a /app/.next/server /app/.next-server-template \
    && chown -R node:node /app/.next-server-template

USER node
EXPOSE 10001
CMD ["sh", "-c", "cp -a /app/.next-server-template/. /app/.next/server/ && exec node server.js"]
