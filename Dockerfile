FROM oven/bun:1.1 AS base
WORKDIR /usr/src/srv

FROM base AS install
RUN mkdir -p /tmp/srv-dev
COPY package.json bun.lockb /tmp/srv-dev/
RUN cd /tmp/srv-dev && bun install --frozen-lockfile

FROM base AS prerelease
COPY --from=install /tmp/srv-dev/node_modules node_modules
COPY . .

USER bun
EXPOSE 2312/tcp
ENTRYPOINT [ "bun", "run", "server.ts" ]
