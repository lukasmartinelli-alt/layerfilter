# layerfilter [![Docker Automated build](https://img.shields.io/docker/automated/openmaptiles/layerfilter.svg?maxAge=2592000)]() [![](https://images.microbadger.com/badges/image/openmaptiles/layerfilter.svg)](https://microbadger.com/images/openmaptiles/layerfilter)

Remove vector tile layers from MBTiles.

## Install

```bash
# not published to npm yet
npm install layerfilter
```

## Usage

Use **layerfilter** to trim down large MBTiles so they suit exactly your needs!

```bash
layerfilter -l "water,place,boundary" -i openmaptiles.mbtiles -o openmaptiles_mobile.mbtiles
```

Or use Docker.

```bash
docker run --rm -v $(pwd):/mbtiles openmaptiles/layerfilter layerfilter \
  -l "water,place,boundary" \
  -i /mbtiles/openmaptiles.mbtiles \
  -o /mbtiles/openmaptiles_mobile.mbtiles
```
