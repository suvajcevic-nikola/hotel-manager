FROM node:20-alpine
COPY . /code
WORKDIR /code
COPY docker-build-entrypoint.sh /
RUN dos2unix ./docker-build-entrypoint.sh && chmod +x ./docker-build-entrypoint.sh
ENTRYPOINT ["/bin/sh", "/docker-build-entrypoint.sh"]
