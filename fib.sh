#!/bin/bash

first=$(( $1 % $4 ))
second=$(( $2 % $4 ))

if [ $3 -lt 1 ]
then
   echo $first

elif [ $3 -lt 2 ]
then
   echo $second

else
  int=1
  while [ $int -lt $3 ]
  do
    oldFirst=$first
    first=$second
    second=$(( ($oldFirst + $first) % $4 ))
    int=$(( $int + 1 ))
  done
  echo $second
fi
