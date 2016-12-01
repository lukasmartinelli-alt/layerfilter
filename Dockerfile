FROM node:5

RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential \
      pkg-config \
      libprotobuf-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install -g

VOLUME /mbtiles
CMD ['layerfilter']
