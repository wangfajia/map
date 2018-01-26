/**
 * 百度坐标系转换为WGS_84
 * 
 */
var pi = 3.1415926535897932384626;
var a = 6378245.0;
var ee = 0.00669342162296594323;
function Gps(lat,lon){
	this.wgLat = lat;
	this.wgLon = lon;
	this.getLat = function(){
		return this.wgLat;
	};
	this.getLon = function(){
		return this.wgLon;
	};
	this.setLat = function(lat){
		this.wgLat = lat;
	};
	this.setLon = function(lon){
		this.wglon = lon;
	};
	this.toString = function(){
		return this.wgLat+","+this.wgLon;
	};
};



function bd09_To_gcj02(bd_lat,bd_lon){
	var x = bd_lon - 0.0065;
	var y = bd_lat - 0.006;
	var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi);
	var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi);
	var gg_lon = z * Math.cos(theta);
	var gg_lat = z * Math.sin(theta);
	return new Gps(gg_lat, gg_lon);
}

function gcj_To_gps84(lat, lon) {
	var gps = transform(lat, lon);
	var lontitude = lon * 2 - gps.getLon();
	var latitude = lat * 2 - gps.getLat();
	return new Gps(latitude, lontitude);
}

function bd09_To_gps84(bd_lat,bd_lon){
	var gcj02 = bd09_To_gcj02(bd_lat, bd_lon);
	var map84 = gcj_To_gps84(gcj02.getLat(),gcj02.getLon());
	return map84;
}

function transform(lat, lon) {
	if (outOfChina(lat, lon)) {
		return new Gps(lat, lon);
	}
	var dLat = transformLat(lon - 105.0, lat - 35.0);
	var dLon = transformLon(lon - 105.0, lat - 35.0);
	var radLat = lat / 180.0 * pi;
	var magic = Math.sin(radLat);
	magic = 1 - ee * magic * magic;
	var sqrtMagic = Math.sqrt(magic);
	dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
	dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
	var mgLat = lat + dLat;
	var mgLon = lon + dLon;
	return new Gps(mgLat, mgLon);
}

function outOfChina(lat, lon) {
	if (lon < 72.004 || lon > 137.8347){
		return true;
	}
	if (lat < 0.8293 || lat > 55.8271){
		return true;
	}
	return false;
};

function transformLat(x, y) {
	var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y
	+ 0.2 * Math.sqrt(Math.abs(x));
	ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
	ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
	
	return ret;
}
	
function transformLon(x, y) {
	var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
	ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
	ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
	return ret;
}

function test(){
	var point = bd09_To_gps84(30.296985, 120.123452);
	console.log("lon::"+point.getLon()+"  lat"+point.getLat());
};
