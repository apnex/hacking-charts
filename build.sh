#!/bin/bash
docker rmi -f apnex/charts 2>/dev/null
docker build --no-cache -t apnex/charts -f charts.docker .
