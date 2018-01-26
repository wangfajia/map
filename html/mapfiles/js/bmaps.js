var app = {};
app.map = null;
app.label = null;
app.lng = 109.384;
app.lat = 31.425;
app.zoom = 8;
app.markers =[];
app.markerClusterer =null;
app.scaleControl = null;
app.drawingManager = null;
app.customPolygon = null;
app.visibleZoom = 10;
app.styleOptions = {
    //enableEditing: true,
    //enableClicking:true,
    strokeColor: "#009ad6",
    fillColor: "#009ad6",
    strokeWeight: 3,
    strokeOpacity: 0.95,
    fillOpacity: 0.15,
    strokeStyle: 'solid' //solid或dashed。
};

function initialize() {
    var roadmapTileLayer = new BMap.TileLayer({
        isTransparentPng: true
    });
    roadmapTileLayer.getTilesUrl = function(tile, zoom) {
        var x = tile.x,
            y = tile.y;
            return "maptile/roadmap/" + zoom + "/" + x + "/" + y + ".png";
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
         return "maptile/overlay/" + zoom + "/" + x + "/" + y + ".png";
    };

    var satelliteTileLayer = new BMap.TileLayer({
        isTransparentPng: true
    });
    satelliteTileLayer.getTilesUrl = function(tile, zoom) {
            var x = tile.x,
            y = tile.y;
        return "maptile/satellite/" + zoom + "/" + x + "/" + y + ".jpg";
    };

    BMAP_HYBRID_MAP = new BMap.MapType('卫星图', [satelliteTileLayer, hybridTileLayer], {
        minZoom: 3,
        maxZoom: 18
    });

    BMAP_SATELLITE_MAP = new BMap.MapType('BMAP_SATELLITE_MAP', [satelliteTileLayer], {
        minZoom: 3,
        maxZoom: 19
    });

    app.map = new BMap.Map('map_canvas', {
        mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]
    });
    app.map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT
        // offset: new BMap.Size(15, 46)
    }));


    app.map.enableScrollWheelZoom();
    app.map.enableContinuousZoom();
    app.map.enableInertialDragging();
    app.map.enableKeyboard();
    app.map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));    
    app.map.centerAndZoom(new BMap.Point(app.lng, app.lat), app.zoom);

    app.map.setMapType(BMAP_NORMAL_MAP);
    app.map.addControl(new BMap.ScaleControl({
        offset: new BMap.Size(20, 2),
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
    }));
    app.map.addControl(new BMap.OverviewMapControl({
        isOpen: false
    }));

    initDrawingManager();

    var mcOptions = {
        gridSize: 60,
        maxZoom: 12
    };
    app.markerClusterer = new BMapLib.MarkerClusterer(app.map, mcOptions);

}


function initDrawingManager() {
    //回调获得覆盖物信息
    var overlaycomplete = function(e) {

        if (e.drawingMode != BMAP_DRAWING_MARKER) {
            clearOverlay();
        }
        var latlngs = "";
        if (e.drawingMode == BMAP_DRAWING_MARKER) {
            var marker = e.overlay,
                latlng = marker.getPosition();
            app.map.removeOverlay(marker);
            app.tempMarkerCount = app.tempMarkerCount + 1;
            var id = getUniqueId(),
                title = "我的标记 " + (getPOICount() + 1).toString();
            addPOI(id, title, latlng.lat, latlng.lng, "", true, false);

        } else if (e.drawingMode == BMAP_DRAWING_CIRCLE) {
            latlngs = e.overlay.getCenter().lng + "," + e.overlay.getCenter().lat + ',' + e.overlay.getRadius();
        } else if (e.drawingMode == BMAP_DRAWING_POLYLINE || e.drawingMode == BMAP_DRAWING_POLYGON || e.drawingMode == BMAP_DRAWING_RECTANGLE) {
            var paths = e.overlay.getPath();
            if (e.drawingMode == BMAP_DRAWING_RECTANGLE) {
                latlngs = paths[0].lng.toFixed(5) + "," + paths[0].lat.toFixed(5) + "," + paths[2].lng.toFixed(5) + "," + paths[2].lat.toFixed(5);
            } else {
                for (var i = paths.length - 1; i >= 0; i--) {
                    if (latlngs)
                        latlngs = latlngs + "," + paths[i].lng.toFixed(5) + "," + paths[i].lat.toFixed(5);
                    else
                        latlngs = paths[i].lng.toFixed(5) + "," + paths[i].lat.toFixed(5);
                }
            }
            app.customPolygon = e.overlay;
        }

        if (app.label)
            app.map.removeOverlay(app.label);
        app.label = e.label;
        if (e.drawingMode != BMAP_DRAWING_MARKER) {
            e.overlay.enableEditing();
            e.overlay.addEventListener("lineupdate", function() {
            });
        }
        app.drawingManager.close();
    };

    //实例化鼠标绘制工具 http://developer.baidu.com/map/library.htm
    app.drawingManager = new BMapLib.DrawingManager(app.map, {
        isOpen: false, //是否开启绘制模式
        enableCalculate: true,
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(26, 11), //偏离值
            scale: 0.45, //工具栏缩放比例
            drawingModes: [
                //BMAP_DRAWING_CIRCLE,
                BMAP_DRAWING_MARKER,
                BMAP_DRAWING_POLYLINE,
                BMAP_DRAWING_POLYGON,
                BMAP_DRAWING_RECTANGLE
            ]
        },
        enableDrawingTool: true, //是否显示工具栏
        circleOptions: app.styleOptions, //圆的样式
        polylineOptions: app.styleOptions, //线的样式
        polygonOptions: app.styleOptions, //多边形的样式
        rectangleOptions: app.styleOptions //矩形的样式
    });

    //添加鼠标绘制工具监听事件，用于获取绘制结果
    app.drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    app.map.addEventListener("moveend", function() {
        var center = app.map.getCenter();
    });
    app.map.addEventListener("rightclick", clearAllOverlays);
    app.map.addEventListener("mousemove", function(e) {
        var lat = e.point.lat,
            lng = e.point.lng;
    });
    app.map.addEventListener("zoomend", function() {
        var zoom = this.getZoom();
    });
}

function addLabel(point, content) {
    var label = new BMap.Label(content, {
        position: point,
        enableMassClear: false,
        offset: new BMap.Size(-45, -25)
    });
    label.setStyle({
        borderColor: "#808080",
        color: "#333",
        padding: "1px 3px 1px 3px",
        borderRadius: "3px",
        backgroundColor: "#F4F4F4"
    });
    app.map.addOverlay(label);
    app.label = label;
}

function calculateAera(overlay, point) {
    var result = 0;
    if (BMapLib.GeoUtils) {
        var center = point;
        var isArea = false;
        var type = overlay.toString();
        //不同覆盖物调用不同的计算方法
        switch (type) {
            case "[object Polyline]":
                result = BMapLib.GeoUtils.getPolylineDistance(overlay);
                break;
            case "[object Polygon]":
                result = BMapLib.GeoUtils.getPolygonArea(overlay);
                center = overlay.getBounds().getCenter();
                isArea = true;
                break;
            case "[object Circle]":
                var radius = overlay.getRadius();
                result = Math.PI * radius * radius;
                center = overlay.getCenter();
                isArea = true;
                break;
        }
        //一场情况处理
        if (!result || result < 0) {
            result = 0;
        } else {
            //保留3位小数位
            result = result.toFixed(3);
        }
        //this._addLabel(center, result);
        addLabel(center, formatCalculateResult(result, isArea));
    }
}

function getOverlayLatlngs(overlay) {
    var result = 0,
        latlngs = "",
        isArea = true,
        center = null,
        paths = null,
        type = overlay.toString();
    switch (type) {
        case "[object Polyline]":
            isArea = false;
            paths = overlay.getPath();
            center = paths[paths.length - 1];
            result = BMapLib.GeoUtils.getPolylineDistance(overlay);
            break;
        case "[object Polygon]":
            center = overlay.getBounds().getCenter();
            result = BMapLib.GeoUtils.getPolygonArea(overlay);
            paths = overlay.getPath();
            if (paths.length < 0) {
                latlngs = paths[0].lng.toFixed(5) + "," + paths[0].lat.toFixed(5) + "," + paths[2].lng.toFixed(5) + "," + paths[2].lat.toFixed(5);
            } else {
                for (var i = paths.length - 1; i >= 0; i--) {
                    if (latlngs)
                        latlngs = latlngs + "," + paths[i].lng.toFixed(5) + "," + paths[i].lat.toFixed(5);
                    else
                        latlngs = paths[i].lng.toFixed(5) + "," + paths[i].lat.toFixed(5);
                }
            }

            break;
        case "[object Circle]":
            var radius = overlay.getRadius();
            center = overlay.getCenter();
            result = Math.PI * radius * radius;
            latlngs = overlay.getCenter().lng + "," + overlay.getCenter().lat + ',' + overlay.getRadius();
            break;
    }
    if (app.label) {
        app.label.setContent(formatCalculateResult(result, isArea));
        app.label.setPosition(center);
        app.label.setOffset(new BMap.Size(-45, -25));
    }
    return latlngs;
}

function clearOverlay() {
    var overlays = app.map.getOverlays();
    for (var i = 0; i < overlays.length - 3; i++) {
        if (overlays[i].toString() != "[object Marker]") {
            app.map.removeOverlay(overlays[i]);
        }
    }
    overlays.length = 0;
}

function clearAllOverlays() {
    app.map.clearOverlays();
    app.markers = [];
    app.markerClusterer.clearMarkers();
}

function setCenterAndZoom(lat, lng, zoom) {
    app.map.centerAndZoom(new BMap.Point(lng, lat), zoom);
}

function getPOIMarker(id) {
    var i = 0,
        marker = null;
    for (i = 0; i < app.markers.length; i++) {
        marker = app.markers[i];
        if (marker.id === id) {
            return marker;
        }
    }
    return null;
}

function deletePOIMarker(id) {
    var i = 0,
        marker = null;
    for (i = app.markers.length - 1; i >= 0; i--) {
        marker = app.markers[i];
        if ((marker) && (marker.id === id)) {
            app.map.removeOverlay(marker.label);
            app.map.removeOverlay(marker);
            app.markers.splice(i, 1);
        }
    }
}

function deleteTempPOIMarkers() {
    if (app.tempMarkerCount === 0) return;
    var i = 0,
        marker = null;
    for (i = app.markers.length - 1; i >= 0; i--) {
        marker = app.markers[i];
        if ((marker) && (marker.isTemp)) {
            app.map.removeOverlay(marker.label);
            app.map.removeOverlay(marker);
            app.markers.splice(i, 1);
        }
    }
    app.tempMarkerCount = 0;
}

function getPOICount() {
    return app.markers.length;
}

function addPOI(id, name, lat, lng, content, isTemp, center) {
    var location = new BMap.Point(lng, lat),
        marker = getPOIMarker(id);
    if (marker) {
        if (marker.isTemp) {
            marker.setIcon(new BMap.Icon("mapfiles/icons/marker-red.png", new BMap.Size(32, 32)));
        }
        marker.setTitle(name);
        marker.setPosition(location);
        marker.isTemp = false;
        marker.content = content;
        marker.label.setContent(name);
        marker.label.setPosition(location);
    } else {
        var iconUrl = (isTemp) ? "mapfiles/icons/marker-blue.png" : "mapfiles/icons/marker-red.png";
        marker = new BMap.Marker(location, {
            enableMassClear: false,
            enableDragging: true,
            raiseOnDrag: false,
            icon: new BMap.Icon(iconUrl, new BMap.Size(32, 32)),
            title: name
        });
        marker.id = id;
        marker.isTemp = isTemp;
        marker.content = content;
        app.markers.push(marker);
        app.map.addOverlay(marker);

        marker.label = new BMap.Label(name, {
            position: location,
            enableMassClear: false,
            offset: new BMap.Size(-35, -35)
        });
        marker.label.setStyle({
            borderColor: "#808080",
            color: "#333",
            padding: "1px 3px 1px 3px",
            borderRadius: "3px",
            backgroundColor: "#F4F4F4"
        });
        app.map.addOverlay(marker.label);
    }
    marker.addEventListener("click", function() {
        var latlng = this.getPosition();
    });
    marker.addEventListener("dragend", function() {
        var latlng = this.getPosition();
    });
    marker.addEventListener("dragging", function() {
        this.label.setPosition(this.getPosition());
    });
    marker.addEventListener("dragstart", function() {
        this.label.setPosition(this.getPosition());
    });
    if (center) {
        var zoom = app.map.getZoom();
        app.map.centerAndZoom(location, (zoom < 14) ? 14 : zoom);
    }
}