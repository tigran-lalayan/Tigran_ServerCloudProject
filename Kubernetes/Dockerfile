FROM mysql:8.0-debian

ENV MYSQL_ROOT_PASSWORD test1324

COPY my.cnf /etc/mysql/my.cnf

RUN apt-get update && apt-get install -y mysql-client

RUN apt-get update && apt-get install -y curl

RUN apt-get update && apt-get install -y libssl-dev libmysqlclient-dev

COPY ca-cert.pem /etc/mysql/ssl/ca-cert.pem
COPY server-cert.pem /etc/mysql/ssl/server-cert.pem
COPY server-key.pem /etc/mysql/ssl/server-key.pem

# Enable SSL support
RUN sed -i -e 's/exec "$@"/exec "$@" --ssl/' /entrypoint.sh

RUN curl -sSL https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
    && chmod +x /usr/local/bin/kubectl
