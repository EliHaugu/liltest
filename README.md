# lildog-kundestyrt

## How to run frontend
Make sure to change into the ` client ` directory before executing commands.
1. Installing the dependencies
```bash
npm i
```

### Running as a development server
2. Run the project as a development server
```bash
npm run dev
```

### Deploying the client side
2. Build the project
```bash
npm run build
```
3. Deploy the `dist` folder to a web server or container.

## How to run backend without Docker
### 1. Create and enter a venv
This is recommended to avoid issues with differing versions of packages in project and local environment. In addition, this avoids bloat not necessary for the project being added when freezing requirements.

1. If you don't have python3.10-venv already, install it
    - On Ubuntu: `sudo apt install python3-venv`
2. Create a venv
    - On Ubuntu: `python3 -m venv venv` (or whatever else you want to name your venv)
3. Enter your venv
    - On Ubuntu: `source venv/bin/activate`

### 2. Set up PostgreSQL database
1. Download PostgreSQL
2. Create a database
3. Create a .env file in the root folder using this format:

    `DJANGO_SECRET_KEY="your_django_secret_key"`

    `DJANGO_DEBUG="True"`

    `DB_NAME="your_database_name"`

    `DB_USER="postgres"`

    `DB_PASSWORD="your_database_password"`

    `DB_HOST="localhost"`

    `DB_PORT="5432""`

    `VITE_API_BASE_URL="http://localhost:8000"`

    Insert database name, password and django secret key.

### 3. Install requirements
1. Open the folder where you have this project
2. Open the `server` folder
3. Install the requirements by running `pip install -r requirements.txt`

### 4. Run server for websocket
1. Open the `server` folder 
2. Run `python3 -m server`
3. Verify that websocket is running 

### 5 Run server
1. Open the `server/server_comm` 
2. Run `python3 manage.py migrate`
3. Run `python3 manage.py runserver`

## How to run backend with Docker
### 1. Create and enter a venv
Same step as for running backend without docker

### 2. Set up PostgreSQL database
1. Download PostgreSQL
2. Create a database
3. Create a .env in root of project and insert the following:

    `DATABASE_URL=postgres://admin:admin@db:5432/kundestyrt_db`

    `DJANGO_SECRET_KEY=[add key]`

    `DJANGO_DEBUG='True'`

    `DB_NAME='kundestyrt_db'`

    `DB_USER='admin'`

    `DB_PASSWORD='admin'`

    `DB_HOST='db'`

    `DB_PORT='5432'`

    `VITE_API_BASE_URL='http://localhost:8000'`

### 3. Download Docker
Download and open Docker

### 4. Run server
In root folder of project run `docker-compose up --build`

## How to update requirements
If you have added new pip packages to the project and want to save them for everyone to use, when in your venv (ensure that you are in the venv so you don't freeze unnecessary packages), run the following command in the server folder: `pip freeze > requirements.txt`

## Swagger
The application has implemented swagger. View the API documentation at `http://localhost:8000/swagger/` after running the server.

## Testing
### How to write a test
pytest automatically looks for files that match the pattern `test_*.py` or `*_test.py` and within those files finds functions that begin with `test`. To create new tests, follow this pattern and create your file in the `server/tests` folder.

By default, all test functions run the `start_server()` fixture found in the `conftest.py` file to set up the server at the beginning of each test function. If you want to add more setup to your tests, you can do so by using `@pytest.fixture` decorator.

You can also add a `scope` argument to your fixture, like this `@pytest.fixture(scope="function")`, to define when you want to run this setup function (e.g. for each function (`function`)), for each test file (`module`), etc.).

### How to run tests
To run all tests, run `pytest server/tests`. To run a specific test, run `pytest server/tests/test.py`.
