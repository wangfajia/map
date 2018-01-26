var xmlHttp;
function createXMLHttpRequest() {
	if(window.ActiveXObject){
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
}
function MarkTrack(xx, yy) {
    //清除原先的标记
	for (var i = trackMarkers.length - 1; i >= 0; i--) {
        map.removeOverlay(trackMarkers[i]);
    }
	trackMarkers.splice(0, trackMarkers.length);
    
	var point = new BMap.Point(xx, yy);

   	var marker = new BMap.Marker(point, {
					icon: new BMap.Icon("images/marker-green.png", new BMap.Size(24, 24))
				});
    marker.setOffset(new BMap.Size(0, -12));

    map.setCenter(point);
 
    map.addOverlay(marker); //添加标注

    trackMarkers.push(marker);
}

function showTrack(deviceCode) {
	showPanelContent(false);
	showList(false);
	showSearchResult(false);
	showSearchTrack(true);
	$('#gpsbh').val(deviceCode);
	$('#searchRes-tools').html('');
}

function getTodyBegin(format) {
	var oDate = new Date();
	format = format.replace("yyyy", oDate.getFullYear());
	var month = oDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	format = format.replace("MM", month);
	var day = oDate.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	format = format.replace("dd", day);
	
	return format;
}

function formatDate(oDate, format) {
	format = format.replace("yyyy", oDate.getFullYear());
	var month = oDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	format = format.replace("MM", month);
	var day = oDate.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	format = format.replace("dd", day);
	var hours = oDate.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	format = format.replace("HH", hours);
	var min = oDate.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	format = format.replace("mm", min);
	var seconds = oDate.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	format = format.replace("ss", seconds);
	
	return format;
}

function showSearchTrack(flag) {
    if(flag) {
		$('#searchTrack').css('display', 'block');
		showTitle(true, '轨迹查询');
		$('#start_time').val(getTodyBegin("yyyy-MM-dd 00:00:00"));
		$('#end_time').val(formatDate(new Date(), "yyyy-MM-dd HH:mm:ss"));
	} else {
		$('#start_time').val("");
		$('#end_time').val("");
		$('#searchTrack').css('display', 'none');
		showTitle(false, '');
	}
}

function showLocationTrace()
{
    var deviceCode = $('#gpsbh').val();
    var start = $("#start_time").val();
    var end = $("#end_time").val();
//    if(null == start || '' == start){
//    	window.external.MapShowMsgEvent("请选择开始时间");
//    	return;
//    }
    if(null ==  end || '' == end){
    	window.external.MapShowMsgEvent("请选择结束时间");
    	return;
    }
    start = start.replace(/\s|:|-/g, "");
    end = end.replace(/\s|:|-/g, "");
	if(deviceCode)
	{
    	var url = pgisserverUrl+'LocationTraceQuery?deviceCode='+deviceCode + '&start=' + start + '&end=' + end +'&time='+new Date();
    	createXMLHttpRequest();
    	xmlHttp.onreadystatechange = handleTrace;
    	xmlHttp.open('POST', url, true);
    	xmlHttp.send(null);
    	/*
    	$.ajax({
    		type:"GET", 
    		url:url,
    		timeout:15000,
    		success:function(data){
    		try {
				eval('data='+data);
			} catch (e) {
				//diyAlert("解析轨迹信息出错：" + data);
				window.external.MapShowMsgEvent("解析轨迹信息出错：" + data);
			}
	    	var trace = data;
	    	var path = [];
	    	var marker_start;
	    	var marker_end;
	    	var str = "<table style='width: 380px; margin: 2px 0 0 0;' cellpadding='0' cellspacing='0' >";
	    	for(var i=0; i < trace.data.length; i++)
	    	{
	    		var point = new BMap.Point(trace.data[i].posX, trace.data[i].posY);
	    		var time = trace.data[i].time;
	    		if (time.length == 14) {
	    			var year = time.substring(0, 4);
	    			var month = time.substring(4, 6);
	    			var day = time.substring(6, 8);
	    			var hour = time.substring(8, 10);
	    			var minute = time.substring(10, 12);
	    			var second = time.substring(12);
	    			time = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
	    		}
	    		str += "<tr onclick='MarkTrack(" + trace.data[i].posX + ", " + trace.data[i].posY + ")' " +
	    			"	style='height: 40px; width: 100%; background-color: #E3E3E3; border-bottom: 2px solid white; " +
	    			"	cursor: pointer; font-size: 12px;'><td style='width:30px;'>&nbsp;</td>" +
		    		"		<td><img src='images/marker-green.png' /></td>" +
		    		"		<td>" + "X:" + trace.data[i].posX + "&nbsp;&nbsp;Y:" + trace.data[i].posY + 
		    		"		<br />time：" + time + "</td>" + 
		    		"	</tr>";
	    				
	    		if(0 == i)
	    		{
	    			marker_start = new BMap.Marker(point);
	    			//var label = new BMap.Label('起', { offset: new BMap.Size(20, -10) });
					var content = "<div class='diyLabel'>"+'起'+"</div>" 
					+ "<div class='transparent-down diyTrans-border'></div>"
					+ "<div class='transparent-down diyTrans'></div>";
					var label = new BMap.Label(content, { offset: new BMap.Size(-5, -30)});
					label.setStyle({color:'block',backgroundColor: 'none', border: 'grey 0px solid'});
	           		marker_start.setLabel(label);
	    		}
	    		
	    		if(i == trace.data.length-1)
	    		{
	    			marker_end = new BMap.Marker(point);
	    			//var label = new BMap.Label('终', { offset: new BMap.Size(20, -10) });
					var content = "<div class='diyLabel'>"+'终'+"</div>" 
					+ "<div class='transparent-down diyTrans-border'></div>"
					+ "<div class='transparent-down diyTrans'></div>";
					var label = new BMap.Label(content, { offset: new BMap.Size(-5, -30)});
					label.setStyle({color:'block',backgroundColor: 'none', border: 'grey 0px solid'});
	           		marker_end.setLabel(label);
	    		}
	    		path.push(point);
	    	}
	    	
	    	str += "</table>";
	    	
	    	var polyline = new BMap.Polyline(path, {strokeColor:"#2279b5", strokeOpacity:1});
	    	
	    	map.addOverlay(polyline);
	    	map.addOverlay(marker_start);
	    	map.addOverlay(marker_end);
	    	
	    	overlays.push(polyline);
	    	overlays.push(marker_start);
	    	overlays.push(marker_end);
	    	
	    	$('#allSelect').css('display', 'none');

	    	openSearchResult();
			$('#search-result').html(str);
			$('.total').html(trace.data.length+'个结果');

			$('.searchbox').css('display', 'none');
			$('.searchTitle').css('display', 'block');
			$('.searchTitle').text('轨迹查询结果');
    	},
    	error:function(XMLHttpRequest, textStatus, errorThrown){
    		window.external.MapShowMsgEvent("查询轨迹失败，请检查定位服务器， 原因：" + textStatus);
    	}
    	});
    	*/
    	
	} else {
		//diyAlert("对象无号码，无法查询");
		window.external.MapShowMsgEvent("对象无号码，无法查询");
	}
}
function handleTrace(){
	if((xmlHttp.readyState == 4)&&(xmlHttp.status == 200)) {		
		var data = xmlHttp.responseText;
		try {
			eval('data='+data);
		} catch (e) {
			//diyAlert("解析轨迹信息出错：" + data);
			window.external.MapShowMsgEvent("解析轨迹信息出错：" + data);
		}
    	var trace = data;
    	var path = [];
    	var marker_start;
    	var marker_end;
    	var str = "<table style='width: 380px; margin: 2px 0 0 0;' cellpadding='0' cellspacing='0' >";
    	for(var i=0; i < trace.data.length; i++)
    	{
    		var point = new BMap.Point(trace.data[i].posX, trace.data[i].posY);
    		var time = trace.data[i].time;
    		if (time.length == 14) {
    			var year = time.substring(0, 4);
    			var month = time.substring(4, 6);
    			var day = time.substring(6, 8);
    			var hour = time.substring(8, 10);
    			var minute = time.substring(10, 12);
    			var second = time.substring(12);
    			time = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    		}
    		str += "<tr onclick='MarkTrack(" + trace.data[i].posX + ", " + trace.data[i].posY + ")' " +
    			"	style='height: 40px; width: 100%; background-color: #E3E3E3; border-bottom: 2px solid white; " +
    			"	cursor: pointer; font-size: 12px;'><td style='width:30px;'>&nbsp;</td>" +
	    		"		<td><img src='images/marker-green.png' /></td>" +
	    		"		<td>" + "X:" + trace.data[i].posX + "&nbsp;&nbsp;Y:" + trace.data[i].posY + 
	    		"		<br />time：" + time + "</td>" + 
	    		"	</tr>";
    				
    		if(0 == i)
    		{
    			marker_start = new BMap.Marker(point);
    			//var label = new BMap.Label('起', { offset: new BMap.Size(20, -10) });
				var content = "<div class='diyLabel'>"+'起'+"</div>" 
				+ "<div class='transparent-down diyTrans-border'></div>"
				+ "<div class='transparent-down diyTrans'></div>";
				var label = new BMap.Label(content, { offset: new BMap.Size(-5, -30)});
				label.setStyle({color:'block',backgroundColor: 'none', border: 'grey 0px solid'});
           		marker_start.setLabel(label);
    		}
    		
    		if(i == trace.data.length-1)
    		{
    			marker_end = new BMap.Marker(point);
    			//var label = new BMap.Label('终', { offset: new BMap.Size(20, -10) });
				var content = "<div class='diyLabel'>"+'终'+"</div>" 
				+ "<div class='transparent-down diyTrans-border'></div>"
				+ "<div class='transparent-down diyTrans'></div>";
				var label = new BMap.Label(content, { offset: new BMap.Size(-5, -30)});
				label.setStyle({color:'block',backgroundColor: 'none', border: 'grey 0px solid'});
           		marker_end.setLabel(label);
    		}
    		path.push(point);
    	}
    	str += "</table>";
    	var polyline = new BMap.Polyline(path, {strokeColor:"#2279b5", strokeOpacity:1});
    	map.addOverlay(polyline);
    	map.addOverlay(marker_start);
    	map.addOverlay(marker_end);
    	overlays.push(polyline);
    	overlays.push(marker_start);
    	overlays.push(marker_end);
    	$('#allSelect').css('display', 'none');
    	openSearchResult();
		$('#search-result').html(str);
		$('.total').html(trace.data.length+'个结果');

		$('.searchbox').css('display', 'none');
		$('.searchTitle').css('display', 'block');
		$('.searchTitle').text('轨迹查询结果');
	}else{
		//window.external.MapShowMsgEvent("查询轨迹失败，请检查定位服务器， 原因：" + xmlHttp.status);
	}
}