#!/bin/sh

max=10
for i in `seq 2 $max`
do
    timestamp=$(date +%s)
    mosquitto_pub -h localhost -t demo -m $timestamp
    sleep 5
done
