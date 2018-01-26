function isFloatNumber(value) {
    return (!isNaN(value));
}

function getUniqueId() {
    var newDate = new Date;
    return newDate.getTime();
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function formatNumber(n) {
    var b = parseInt(n).toString(),
        len = b.length;
    if (len <= 3) {
        return b;
    }
    var r = len % 3;
    return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
}

function numberInbound(value, min, max) {
    return (value >= min) && (value <= max);
}

function formatCalculateResult(value, isArea) {
    if (isArea) {
        unit = "平方米";
        if (value > 1000000) {
            unit = "平方公里";
            value = parseFloat(value / 1000000).toFixed(3);
            if (value > 1000) {
                value = Math.floor(value);
            }
        } else {
            value = parseFloat(value).toFixed(3);
            if (value > 1000) {
                value = Math.floor(value);
            }
        }
         value = "面积:" + value + unit;
    } else {
        unit = "米";
        if (value > 1000) {
            unit = "公里";
            value = (value / 1000).toFixed(3);
            if (value > 1000) {
                value = Math.floor(value);
            }
        }
        value = "总长度:" + value + unit;
    }
    return value;
}
