#!/bin/bash
MYSQL_POD=$(kubectl get pods --no-headers -o custom-columns=":metadata.name" | grep mysql)
export PATH=$PATH:/usr/bin
kubectl exec $MYSQL_POD -- mysqldump -h mysql -u root -p$MYSQL_ROOT_PASSWORD mydatabase > /backup/backup.sql
