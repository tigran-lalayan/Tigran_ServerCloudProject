FROM python:3.8-slim

# Copy the requirements file
COPY requirements.txt .
COPY cert.pem cert.pem
COPY key.pem key.pem
# Install the dependencies
RUN pip install -r requirements.txt

ENV FLASK_APP=hello-flask.py

# Copy the application code
COPY . .

# Run the app
CMD ["python", "-m", "flask", "run", "--cert=cert.pem", "--key=key.pem", "--host=0.0.0.0"]
