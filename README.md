# layerfilter

Remove vector tile layers from MBTiles.

## Install

```
# not published to npm yet
npm install layerfilter
```

## Usage

Use layerfilter to trim down large MBTiles so they suit exactly your needs!

```
layerfilter -i openmaptiles.mbtiles -l "water,place,boundary" -o openmaptiles_mobile.mbtiles
```

Or use Docker.

```
docker run --rm -v $(pwd):/mbtiles openmaptiles/layerfilter layerfilter -i /mbtiles/openmaptiles.mbtiles -l "water,place,boundary" -o /mbtiles/openmaptiles_mobile.mbtiles
```
