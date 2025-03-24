Kepler Data Project
===================

This project loads and filters exoplanet data from the Kepler space telescope to find potentially habitable planets.

Features
--------

*   Reads Kepler exoplanet data from a CSV file
*   Filters planets based on habitability criteria
*   Uses Node.js streams for efficient file processing

Installation
------------

    npm install

Usage
-----

    node index.js

Project Structure
-----------------

    /project-folder
    ├── data/
    │   ├── kepler\_data.csv
    ├── utils/
    │   ├── index.mjs
    ├── index.mjs
    ├── package.json
    ├── README.html
    

Filtering Criteria
------------------

The project filters planets using the following conditions:

*   `koi_disposition` must be `CONFIRMED`
*   `koi_insol` (stellar flux) must be between `0.36` and `1.11`
*   `koi_prad` (planetary radius) must be less than `1.6`

Example Output
--------------

    File loaded successfully
    parsing is done
    total planets that meet the condition: 10
    planets: \[ 'Kepler-22b', 'Kepler-442b', 'Kepler-452b' \]
