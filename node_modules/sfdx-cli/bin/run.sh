#!/usr/bin/env bash
set -e

echoerr() { echo "$@" 1>&2; }

export SFDX_INSTALLER="false" BIN_NAME="run"
# @OVERRIDES@

NODE_FLAGS=()

# Process only cli flags that must be handled before invoking node
for arg in "$@"; do
    case "$arg" in
        --dev-suspend) NODE_FLAGS+=("--inspect-brk");;
          --dev-debug) DEV_DEBUG=true;;
    esac
done

get_script_dir () {
    SOURCE="${BASH_SOURCE[0]}"
    # While $SOURCE is a symlink, resolve it
    while [[ -h "$SOURCE" ]]; do
        DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
        SOURCE="$( readlink "$SOURCE" )"
        # If $SOURCE was a relative symlink (so no "/" as prefix, need to resolve it relative to the symlink base directory
        [[ "$SOURCE" != /* ]] && SOURCE="$DIR/$SOURCE"
    done
    DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    echo "$DIR"
}

DIR=$(get_script_dir)
CLI_HOME=$(cd && pwd)
XDG_DATA_HOME="${XDG_DATA_HOME:="$CLI_HOME/.local/share"}"
BIN_DIR="$XDG_DATA_HOME/$BIN_NAME/client/bin"

if [[ "$SFDX_REDIRECTED" != "1" && "${SFDX_INSTALLER:-}" == "true" && -x "$BIN_DIR/$BIN_NAME" && ! "$BIN_DIR" -ef "$DIR" ]]; then
    if [[ "$DEV_DEBUG" == "true" ]]; then
        echoerr "Executing:" "$XDG_DATA_HOME/$BIN_NAME/client/bin/$BIN_NAME" "$@"
    fi
    "$XDG_DATA_HOME/$BIN_NAME/client/bin/$BIN_NAME" "$@"
else
    MAIN_NAME="$BIN_NAME"
    NODE_PATH="node"
    if [[ "${SFDX_INSTALLER:-}" == "true" ]]; then
        MAIN_NAME="$MAIN_NAME.js"
        NODE_PATH="$DIR/$NODE_PATH"
    elif [[ -x "$(command -v node)" ]]; then
        NODE_PATH=node
    else
        echoerr 'Error: node is not installed.' >&2
        exit 1
    fi
    if [[ "$DEV_DEBUG" == "true" ]]; then
        echoerr "Executing:" "SFDX_BINPATH=$DIR/$BIN_NAME" "$NODE_PATH" "${NODE_FLAGS[@]}" "$DIR/$MAIN_NAME" "$@"
    fi
    SFDX_BINPATH="$DIR/$BIN_NAME" "$NODE_PATH" "${NODE_FLAGS[@]}" "$DIR/$MAIN_NAME" "$@"
fi
