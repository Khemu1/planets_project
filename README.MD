<body>
    <h1>Kepler Data Project</h1>
    <p>This project loads and filters exoplanet data from the Kepler space telescope to find potentially habitable planets.</p>
    
    <h2>Features</h2>
    <ul>
        <li>Reads Kepler exoplanet data from a CSV file</li>
        <li>Filters planets based on habitability criteria</li>
        <li>Uses Node.js streams for efficient file processing</li>
    </ul>

    <h2>Installation</h2>
    <pre><code>npm install</code></pre>

    <h2>Usage</h2>
    <pre><code>node index.js</code></pre>

    <h2>Project Structure</h2>
    <pre>
    /project-folder
    ├── data/
    │   ├── kepler_data.csv
    ├── utils/
    │   ├── index.mjs
    ├── index.mjs
    ├── package.json
    ├── README.html
    </pre>

    <h2>Filtering Criteria</h2>
    <p>The project filters planets using the following conditions:</p>
    <ul>
        <li><code>koi_disposition</code> must be <code>CONFIRMED</code></li>
        <li><code>koi_insol</code> (stellar flux) must be between <code>0.36</code> and <code>1.11</code></li>
        <li><code>koi_prad</code> (planetary radius) must be less than <code>1.6</code></li>
    </ul>

    <h2>Example Output</h2>
    <pre>
    File loaded successfully
    parsing is done
    total planets that meet the condition: 10
    planets: [ 'Kepler-22b', 'Kepler-442b', 'Kepler-452b' ]
    </pre>

</body>
</html>
