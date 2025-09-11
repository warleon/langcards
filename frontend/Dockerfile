# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.js file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:22.17.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY . .
RUN npm i --force

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ARG  DATABASE_URI
ARG  PAYLOAD_SECRET
ARG  REVALIDATE_SECRET
ARG  MEDIA_PATH_PREFIX

ENV  DATABASE_URI=$DATABASE_URI
ENV  PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV  REVALIDATE_SECRET=$REVALIDATE_SECRET
ENV  MEDIA_PATH_PREFIX=$MEDIA_PATH_PREFIX

RUN npm run build