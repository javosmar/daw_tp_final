#!/bin/bash

contenedores = docker ps -a -q
docker stop $contenedores
./start_mysql.sh mysql-net "$PWD"/db
./run_phpadmin.sh mysql-net mysql-server 8085
./serve_node_app_net.sh "$PWD" ws/index.js 8000 mysql-net
