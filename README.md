# email-finder

This project is a web application built with Node.js that uses the **Tomba API** to find professional email addresses based on a person's first name, last name, and company domain.

## Features

  - Finds professional email addresses using the Tomba API.
  - Requires a first name, last name, and company domain for a search.
  - Displays the email, verification status, confidence score, and optional job title and country from the API response.
  - User-friendly interface built with EJS.

## Prerequisites

Before you begin, ensure you have the following installed:

  - Node.js
  - npm (Node Package Manager)

You will also need a Tomba API key and secret. These can be obtained by signing up on the Tomba website.

## Installation

1.  Clone this repository.
2.  Navigate to the project directory.
3.  Install the required dependencies by running the following command:
    ```sh
    npm install
    ```

## Configuration

The application uses environment variables for configuration. You must create a `.env` file in the root directory of the project with the following variables:

```sh
TOMBA_KEY=ta_a827iqsbr2nguoazoh4oxqbejsv0l03tam1f6
TOMBA_SECRET=ts_65cae75e-17d6-43e3-b6ed-ec83b385965b
PORT=3000
TOMBA_URL=https://api.tomba.io/v1/email-finder
```

  * `TOMBA_KEY`: Your Tomba API key. You can get this from your Tomba account dashboard.
  * `TOMBA_SECRET`: Your Tomba API secret. You can get this from your Tomba account dashboard.
  * `PORT`: The port on which the server will run. (Optional, defaults to 3000)
  * `TOMBA_URL`: The URL for the Tomba email finder API endpoint. (Optional, defaults to `https://api.tomba.io/v1/email-finder`)

## Usage

1.  Start the server by running the following command:

    ```sh
    npm start
    ```

    This will start the server on the specified `PORT` (e.g., `http://localhost:3000`).

2.  Open your web browser and navigate to `http://localhost:3000`.

3.  Enter the first name, last name, and company domain into the form and click "Find Email" to retrieve the email address.

## Dependencies

The following npm packages are used in this project:

  * `axios`: `^1.11.0`
  * `dotenv`: `^17.2.1`
  * `ejs`: `^3.1.10`
  * `express`: `^5.1.0`

## License

This project is licensed under the **ISC** License.
