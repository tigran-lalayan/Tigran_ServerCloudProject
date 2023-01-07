from flask import Flask

import mysql.connector

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')


# Connect to the database
cnx = mysql.connector.connect(
    host='mysql',
    user='root',
    password='test1234',
    database='mydatabase'
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
