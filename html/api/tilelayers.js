var roadmapTileLayer = new BMap.TileLayer({
    isTransparentPng: true
});
roadmapTileLayer.getTilesUrl = function(tile, zoom) {
    var x = tile.x,
        y = tile.y;
    return mapImgeUrl+"maptile/roadmap/" + zoom + "/" + x + "/" + y + ".png";
};
BMAP_NORMAL_MAP = new BMap.MapType('地图', roadmapTileLayer, {
    minZoom: 3,
    maxZoom: 19
});

var hybridTileLayer = new BMap.TileLayer({
    isTransparentPng: true
});
hybridTileLayer.getTilesUrl = function(tile, zoom) {
    var x = tile.x,
        y = tile.y;
    return mapImgeUrl+"maptile/overlay/" + zoom + "/" + x + "/" + y + ".png";
};

var satelliteTileLayer = new BMap.TileLayer({
    isTransparentPng: true
});
satelliteTileLayer.getTilesUrl = function(tile, zoom) {
    var x = tile.x,
        y = tile.y;
    return mapImgeUrl+"maptile/satellite/" + zoom + "/" + x + "/" + y + ".jpg";
};

BMAP_HYBRID_MAP = new BMap.MapType('影像', [satelliteTileLayer, hybridTileLayer], {
    minZoom: 3,
    maxZoom: 18
});

BMAP_SATELLITE_MAP = new BMap.MapType('BMAP_SATELLITE_MAP', [satelliteTileLayer], {
    minZoom: 3,
    maxZoom: 19
});