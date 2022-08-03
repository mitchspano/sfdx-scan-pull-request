#!/usr/bin/env bash
set -e

if [[ -z "${SFDX_ENV:-}" ]]; then export SFDX_ENV=development; fi
if [[ -z "${NODE_ENV:-}" ]]; then export NODE_ENV=development; fi

DIR="$(cd "$(dirname "$0")" && pwd)"

"$DIR/run.sh" "$@"
