# cryptoTracker
Matrix-themed cryptocurrency price tracking application

# setup instructions

  1. Obtain API Key.
    - This small application will require an API key from crypotcompare.
    - You can sign up for one here: https://www.cryptocompare.com/

  2. Add this API key to the file titled "token.example.js"
    - replace "FILL_ME_IN" with your API key, as a string.
    - change this file name from "token.example.js" to "token.js"
    - confirm that "token.js" is properly in your .gitignore

  3. Install dependencies
    - run "npm install" from the root directory to install dev dependencies

  4. Build the bundle.js file
    - run the build command "npm run build-dev" from the root directory

  5. Start the server
    - run "npm run start-dev" from the root directory

  6. Open the app locally in your browser
    - open this application at localhost:5000 to track the prices of three major cryptocurrencies!