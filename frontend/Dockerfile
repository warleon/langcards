# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.js file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:22.17.0-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json* .npmrc* ./

RUN npm ci
# Install dependencies based on the preferred package manager
#COPY . .
#RUN npm i #--force

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DATABASE_URI
ARG PAYLOAD_SECRET
ARG REVALIDATE_SECRET
ARG MEDIA_PATH_PREFIX

ENV DATABASE_URI=$DATABASE_URI
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV REVALIDATE_SECRET=$REVALIDATE_SECRET
ENV MEDIA_PATH_PREFIX=$MEDIA_PATH_PREFIX
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run migrate
RUN npm run build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV HOSTNAME="0.0.0.0"
