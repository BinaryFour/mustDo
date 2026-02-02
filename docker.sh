#!/bin/bash

#If any of these commands fail, exit the script
set -e

#$1 is a variable.  This is setting CMD to the first argument passed to the script
CMD=$1
#$0 is the absolute path of the directory where this script is located
#dirname gets the directory name from that path
#cd changes to that directory
#pwd gets the absolute path of that directory
#The whole command sets ROOT_DIR to the absolute path of the directory where this script is located.  ROOT_DIR get the output of the pwd command.
#This allows you to run the script from any location and still have it work correctly.  You still need to provide relative paths from the script's location.
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

#If user doesn't provide a legal command as the first argument, print usage and exit
if [[ "$CMD" != "up" && "$CMD" != "down" ]]; then
  echo "Usage: ./docker.sh [up|down]"
  echo "The up flag will spin up both containers in parallel.  The down flag will stop both containers in parallel."
  exit 1
fi

#Function to run docker compose command in a given directory in the background
#Runs the command in a subshell to avoid changing the current shell's directory
#The & at the end runs both commands in parallel when called sequentially
run () {
  (
    cd "$ROOT_DIR/$1"
    if [ "$CMD" == "down" ]; then
      docker compose $CMD
      exit 0
    fi
    docker compose $CMD -d
  ) &
}

echo "Running docker compose $CMD in parallel..."

run backend
run frontend

#Wait for both background processes to finish.  Don't continue until all background jobs complete
wait

echo "✅ Done"
