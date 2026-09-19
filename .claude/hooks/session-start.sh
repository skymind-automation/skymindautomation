#!/bin/bash
# SessionStart hook: pin commit authorship to the repository owner.
#
# Claude Code web sessions run in throwaway containers whose git config
# defaults to the assistant identity. This re-applies the owner's identity
# on every session start, so a container reset can never cause a commit to
# be attributed to the wrong author.
set -euo pipefail

AUTHOR_NAME="skymind-automation"
AUTHOR_EMAIL="automationskymind@gmail.com"

cd "${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel)}"

# Repo-local config takes precedence over whatever global default the
# container ships with, so this is enough to fix authorship here.
git config user.name  "$AUTHOR_NAME"
git config user.email "$AUTHOR_EMAIL"

echo "git author pinned to: $(git config user.name) <$(git config user.email)>"
