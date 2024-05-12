# Use an official Node.js runtime as the base image
FROM node:20

# Set environment variables to non-interactive
ENV DEBIAN_FRONTEND=noninteractive

# Update apt-get and install necessary packages
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && update-ca-certificates\
    wget \
    gnupg2 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Download Google's official GPG key to a file
RUN wget --no-check-certificate -q -O google-signing-key.pub https://dl-ssl.google.com/linux/linux_signing_key.pub


# Add the key from the file
RUN apt-key add google-signing-key.pub && rm google-signing-key.pub

# Add the Chrome repository
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list

# Install Google Chrome
RUN apt-get update && apt-get install -y google-chrome-stable && rm -rf /var/lib/apt/lists/*

# Set up ChromeDriver environment variable
ENV CHROMEDRIVER_VERSION 89.0.4389.23
ENV CHROMEDRIVER_DIR /chromedriver
RUN mkdir $CHROMEDRIVER_DIR

# Download and install ChromeDriver
RUN wget -q --continue -P $CHROMEDRIVER_DIR "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip" \
    && unzip $CHROMEDRIVER_DIR/chromedriver* -d $CHROMEDRIVER_DIR \
    && rm $CHROMEDRIVER_DIR/*.zip

# Put ChromeDriver into the PATH
ENV PATH $CHROMEDRIVER_DIR:$PATH

# Set working directory
WORKDIR /app

# Install Node.js dependencies defined in package.json
COPY package*.json ./
RUN npm install

# Copy the rest of the application's source code from the host to the container
COPY . .

# Default command to run on container start (run your WebdriverIO tests)
CMD ["npm", "run", "wdio"]
