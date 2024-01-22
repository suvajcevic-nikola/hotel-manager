#!/bin/sh
# docker-build-entrypoint.sh

set -e

npm i || exit 1
npm run build || exit 1
exec npm run start