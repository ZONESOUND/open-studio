#!/bin/bash
FILES=./*
echo "let useFiles = ["
for folder in $FILES
do
	# echo "-- $folder -- "
	for file in $folder/*
	do 
		echo "\"$file\","
	done

done
echo "];"