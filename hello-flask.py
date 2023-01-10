from flask import Flask
import os
import mysql.connector
import ssl

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', ssl_context=('cert.pem', 'key.pem'))

mysql_password = os.environ.get("MYSQL_PASSWORD", default=None)
if mysql_password is None:
    # MYSQL_PASSWORD environment variable not set.
    # Try to retrieve the password from the mysql-secret secret.
    mysql_password = open("/run/secrets/mysql-secret").read()


# Connect to the database
cnx = mysql.connector.connect(
    host='mysql',
    user='flask',
    password=mysql_password,
    database='mydatabase',
    ssl_ca='ca-cert.pem',  # Path to CA certificate
    ssl_cert='client-cert.pem',  # Path to client certificate
    ssl_key='client-key.pem',  # Path to private key
    ssl_verify_cert=True,  # Verify the server's certificate
)

# Run a query
cursor = cnx.cursor()
query = 'SELECT * FROM users'
cursor.execute(query)

# Print the results
for row in cursor:
   print(row)

# Close the connection
cnx.close()
