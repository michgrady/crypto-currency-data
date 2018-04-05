# crypto-currency-data
A Javascript program which provides the price and market cap of a given crypto-currency.  Containerized with Docker.

Makes use of https://coinmarketcap.com/api/ API. 

## Docker Build Instructions
From the repository root directory, build the docker image: 

    $ docker build -t crypto:latest .

Verify that crypto:latest image was built:

    $ docker images

Ensure that crypto (with tag 'latest') is in your list of images.

## Docker Run Instructions
Run without any parameters to provide usage instructions:

    $ docker run crypto:latest

Use the **CRYPTO_NAME** environment variable to specify the crypto-currency for which to retrieve information:

    $ docker run -e CRYPTO_NAME=‘bitcoin’ crypto:latest

