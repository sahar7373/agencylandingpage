#!/usr/bin/env bash
# Sets up a weekly cron job to run the GSC performance report.
# Runs every Monday at 9:00 AM.
#
# Usage:
#   bash scripts/setup_cron.sh
#   bash scripts/setup_cron.sh --remove   # removes the cron job

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$HOME/logs/gsc"
PYTHON="$(command -v python3)"

CRON_CMD="0 9 * * 1 cd \"$REPO_DIR\" && $PYTHON scripts/gsc_report.py --inspect >> \"$LOG_DIR/weekly_\$(date +\%Y-\%m-\%d).log\" 2>&1"
MARKER="# gsc-weekly-report"

if [[ "$1" == "--remove" ]]; then
    crontab -l 2>/dev/null | grep -v "$MARKER" | crontab -
    echo "Cron job removed."
    exit 0
fi

mkdir -p "$LOG_DIR"

# Append only if not already present
( crontab -l 2>/dev/null | grep -v "$MARKER" ; echo "$CRON_CMD $MARKER" ) | crontab -

echo "Cron job installed — runs every Monday at 9:00 AM"
echo "Logs: $LOG_DIR/"
echo ""
echo "To remove:  bash scripts/setup_cron.sh --remove"
echo "To test now: python3 scripts/gsc_report.py --inspect"
