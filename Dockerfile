FROM python:3.8-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

ENV FLASK_APP=app/hello-flask.py

# Copy the application code
COPY app /app/hello-flask

# Run the app
CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]
