#!/usr/bin/env node
"use strict";
var TileGrinder = require('tilegrinder');
var argv = require('minimist')(process.argv.slice(2));
var program = require('commander');

program
  .option('-i, --input [input]', 'MBTiles to read tiles from')
  .option('-o, --output [output]', 'MBTiles to write filtered tiles to')
  .option('-l, --layers [layers]', 'Comma separated list of layer names to keep')
  .parse(process.argv);

if(program.input && program.output && program.layers) {
  var keepLayers = {};
  program.layers.split(',').forEach(function(layerName) {
    keepLayers[layerName] = true;
  });

  var grinder = new TileGrinder({maxZoom: 14});
  grinder.grind("tiles.mbtiles", "tiles.filtered.mbtiles", tile => {
    // Only keep the road, water and admin layers
    tile.layers = tile.layers.filter(function(layer) {
      return layer.name in keepLayers;
    });
  });
} else {
  program.help();
}
