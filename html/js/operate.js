//页面事件 操作等

function showPanelContent(flag) {
	if (flag) {
		$('#operPanel-content').css('display', 'block');
	} else {
		$('#operPanel-content').css('display', 'none');
	}
}

function showList(flag) {
	if (flag) {
		$('#list').css('display', 'block');
	} else {
		$('#list').css('display', 'none');
	}
}

function showSearchResult(flag) {
	if (flag) {
		$('#searchResult').css('display', 'block');
	} else {
		$('#searchResult').css('display', 'none');
	}
}

function showTitle(flag, title) {
	if (flag) {
		$('#ctrl-list').css('display', 'none');
		$('.searchbox').css('display', 'none');
		$('.searchTitle').css('display', 'block');
		$('.searchTitle').text(title);
	} else {
		$('.searchbox').css('display', 'block');
		$('.searchTitle').css('display', 'none');
		$('.searchTitle').text('');
		$('#ctrl-list').css('display', '');
	}
}

function showSelTitle(flag, title) {
	if (flag) {
		$('.searchbox').css('display', 'none');
		$('.searchTitle').css('display', 'block');
		$('.searchTitle').text(title);
	} else {
		$('.searchbox').css('display', 'block');
		$('.searchTitle').css('display', 'none');
		$('.searchTitle').text('');
	}
}

function openList() {
	// 判断通讯录是否已显示
	if ($('#list').css('display') == 'none') {
		showPanelContent(true);
		showList(true);
		showSearchResult(false);
		showSearchTrack(false);
	} else {
		showPanelContent(false);
		showList(false);
		showSearchResult(false);
		showSearchTrack(false);
	}

	showTitle(false, '');
}

function openSearchResult() {
	showPanelContent(true);
	showList(false);
	showSearchResult(true);
	showSearchTrack(false);
}

function openPanelContent() {
	if ($('#operPanel-content').css('display') == 'none') {
		$('#operPanel-content').css('display', 'block');
	} else {
		$('#operPanel-content').css('display', 'none');
	}
}

function bindEvttoCtrlList() {
	$('#ctrl-list').bind('click', openPanelContent);
}

function unbindEvttoCtrlList() {
	$('#ctrl-list').unbind('click');
}

function changeMapToolBtnStyle(styleName) {
	if (styleName == "hander") {
		$('#hander_map').addClass('BMapLib_box_def_blue');
		$('#hander_map').removeClass('BMapLib_box_def_white');
	} else {
		$('#hander_map').addClass('BMapLib_box_def_white');
		$('#hander_map').removeClass('BMapLib_box_def_blue');
		
	}
//	if (styleName == "circle") {
//		$('#circle_map').addClass('BMapLib_box_def_blue');
//		$('#circle_map').removeClass('BMapLib_box_def_white');
//	} else {
//		$('#circle_map').addClass('BMapLib_box_def_white');
//		$('#circle_map').removeClass('BMapLib_box_def_blue');
//	}
//	
//	if (styleName == "rectangle") {
//		$('#rectangle_map').addClass('BMapLib_box_def_blue');
//		$('#rectangle_map').removeClass('BMapLib_box_def_white');
//	} else {
//		$('#rectangle_map').addClass('BMapLib_box_def_white');
//		$('#rectangle_map').removeClass('BMapLib_box_def_blue');
//	}
//	
//	if (styleName == "polygon") {
//		$('#polygon_map').addClass('BMapLib_box_def_blue');
//		$('#polygon_map').removeClass('BMapLib_box_def_white');
//	} else {
//		$('#polygon_map').addClass('BMapLib_box_def_white');
//		$('#polygon_map').removeClass('BMapLib_box_def_blue');
//	}

	if (styleName == "setCenter") {
		$('#setCerter_map').addClass('BMapLib_box_def_blue');
		$('#setCerter_map').removeClass('BMapLib_box_def_white');
	} else {
		$('#setCerter_map').addClass('BMapLib_box_def_white');
		$('#setCerter_map').removeClass('BMapLib_box_def_blue');
	}
}

function bindEvtToMapTools() {
	document.getElementById("hander_map").onclick = function() {
		changeMapToolBtnStyle('hander');
		drawingManager.deactivate();
		
	};

//	document.getElementById("circle_map").onclick = function() {
//		changeMapToolBtnStyle("circle");
//		drawingManager.activate("circle");
//		//drawingManager.open();
//	};
//
//	document.getElementById("rectangle_map").onclick = function() {
//		changeMapToolBtnStyle("rectangle");
//		drawingManager.activate("extent");
//		//drawingManager.open();
//	};
//
//	document.getElementById("polygon_map").onclick = function() {
//		changeMapToolBtnStyle("polygon");
//		drawingManager.activate("polygon");
//		//drawingManager.open();
//	};

	document.getElementById("screen_map_full").onclick = function() {
		$("#screen_map_full").css('display', 'none');
		$("#screen_map_back").css('display', 'block');
		window.external.MapFullScreenEvent(1);
		deleteCookie("full");
		setCookie("full", "1");
		fullScreenFlag = true;
	};

	document.getElementById("screen_map_back").onclick = function() {
		$("#screen_map_full").css('display', 'block');
		$("#screen_map_back").css('display', 'none');
		window.external.MapFullScreenEvent(0);
		deleteCookie("full");
		setCookie("full", "0");
		fullScreenFlag = true;
	};

	document.getElementById("setCerter_map").onclick = function() {
		diyConfirm();
	};
	
	document.getElementById("refresh_map").onclick = function() {
		$.fn.zTree.destroy();
		groups = null;
		operators = null;
		employees = null;
		videogroups = null;
		videos = null;

		setTimeout(reload, 1000);
		//window.location.reload();
	};
}

function reload() {
	window.location.reload();
}

function clearSearchText() {
	searchText='';
	$('.searchbox-text').val('');
	$('.searchbox-text').focus();
	$('.searchbox-text').blur();
}

function clearSearchTools() {
	$('#searchRes-tools').html('');
}

function backtoList() {
	nodeBySearch=[];
	mapClearDrawAll();
	clearSearchText();
	openList();
	setDrawTypeToHander();
	showOrHideTreeTools();
}

function showTelList() {
	selectListType = 'user';
	$('#telList').css('display', 'block');
	$('#videoList').css('display', 'none');
	$('#favirateList').css('display', 'none');
	showOrHideTreeTools();
}

function showVideoList() {
	selectListType = 'video';
	$('#telList').css('display', 'none');
	$('#videoList').css('display', 'block');
	$('#favirateList').css('display', 'none');
	showOrHideTreeTools();
}

function showFavirateList() {
	selectListType = 'favirate';
	$('#telList').css('display', 'none');
	$('#videoList').css('display', 'none');
	$('#favirateList').css('display', 'block');
}

function fullScreen() {
	if ($('#resize-max').css('display') == 'none') {
		$('#resize-max').css('display', 'block');
		$('#resize-back').css('display', 'none');
	} else {
		$('#resize-max').css('display', 'none');
		$('#resize-back').css('display', 'block');
	}

	var el = document.documentElement;
	var rfs = el.requestFullScreen || el.webkitRequestFullScreen
			|| el.mozRequestFullScreen || el.msRequestFullScreen;
	if (typeof rfs != 'undefined' && rfs) {
		rfs.call(el);
	} else if (window.ActiveXObject != 'undefined') {
		var wscript = new ActiveXObject('WScript.Shell');
		if (wscript != null) {
			wscript.SendKeys("{F11}");
		}
	}
}

function closeDetail() {
	$('#detail').css('display', 'none');
}

function showMarkInfoWindow(dHtml) {
	$('#detail').html(dHtml);
	$('#detail').css('display', 'block');
}

function setDefaultSearchText(text) {
	var val = '';
	if (!$('.searchbox-text').hasClass('searchbox-text-default')) {
		$('.searchbox-text').addClass('searchbox-text-default');
		val = $('.searchbox-text').val();
	}
	searchText=val;
	$('.searchbox-text').val(text + val);
	$('.searchbox-text').blur();
}

function mergedSameNodebyID(nodes_user_tmp, nodes_user) {
	// 判断是否存在相同的employeeID
	var temp = {};
	var len = nodes_user_tmp.length;
	for ( var i = 0; i < len; i++) {
		var t;
		if (nodes_user_tmp[i].type == 'employee') {
			t = nodes_user_tmp[i].employeeID;
		} else if (nodes_user_tmp[i].type == 'operator') {
			var key = nodes_user_tmp[i].operatorID;
			temp[key]=nodes_user_tmp[i];
			continue;
		} else if(nodes_user_tmp[i].type == 'video'){
			t = nodes_user_tmp[i].videoID;
		}
		if (!temp.hasOwnProperty(t)) {
			var key = "";
			if(nodes_user_tmp[i].type=='employee'){
				key = nodes_user_tmp[i].employeeID;
			}else if(nodes_user_tmp[i].type=='video'){
				key = nodes_user_tmp[i].videoID;
			}
			temp[key]=nodes_user_tmp[i];
		}
	}
	len = 0;
	for ( var i in temp) {
		nodes_user[len++] = temp[i];
	}
}
function getNodeFromTreeByTypeAndID(type, id){
	var treeObj;
	var id_key;
	var nodes=[];
	var id_value = id;
	if(type == 'operator'){
		treeObj=$.fn.zTree.getZTreeObj("listTree");
		id_key = "operatorID";
	}else if(type == 'employee'){
		treeObj=$.fn.zTree.getZTreeObj("listTree");
		id_key = "employeeID";
	}else if(type == 'video'){
		treeObj=$.fn.zTree.getZTreeObj("videoTree");
		id_key = "videoID";
	}
	if(treeObj){
		nodes = treeObj.getNodesByParam(id_key, id_value, null);
	}
	return nodes;
}
function showOrHideResTools(){
	var checkedRes = $('.searchRstck:enabled:checked');
	if(checkedRes && checkedRes.length>0){
		$('#searchRes-tools').css('display', 'block');
		//当选中的用户没有关联的视屏时，或者不是视频用户时，不显示“查视频”按钮；当只有视频用户是，不显示呼叫按钮
		var video_len=0;
		var call_len=0;
		for(var i=0; i<checkedRes.length; i++){
			var tmp = checkedRes[i].value;
			var tmp1= tmp.substring(0, tmp.indexOf('},') + 1);
			if(tmp1 && tmp1.length>2){	
//				eval('tmp1='+tmp1);
//				var nodes_t = getNodeFromTreeByTypeAndID(tmp1.type, tmp1.ID);
//				if(nodes_t && nodes_t.length>0){
//					if((nodes_t[0].type=='operator' || nodes_t[0].type=='employee') && nodes_t[0].video && nodes_t[0].video.length>0){						
//						video_len++;
//					}
//				}
				call_len++;
			}
			var sub = tmp.substring(tmp.indexOf('},{') + 2);
			if (sub && sub.length > 2) {//如果小于2，说明没有视频信息
				video_len++;
			}
		}
		if(video_len==0 && call_len==0){
			$('#searchRes-tools').css('display', 'none');
			return;
		}
		if(video_len>0){
			$('#searchRes-tools').css('display', 'block');
			$('#searchRes-tools input.video').css('display', 'inline');
		}else{
			$('#searchRes-tools input.video').css('display', 'none');
		}
		if(call_len>0){
			$('#searchRes-tools').css('display', 'block');
			$('#searchRes-tools input.call').css('display', 'inline');
		}else{
			$('#searchRes-tools input.call').css('display', 'none');
		}
	}else{
		$('#searchRes-tools').css('display', 'none');
	}
}
function getSearchResult() {
	mapClearDrawBySearch();
	var treeObj_user = $.fn.zTree.getZTreeObj("listTree");
	var treeObj_video = $.fn.zTree.getZTreeObj("videoTree");
	var nodes;
	var nodes_video = [];
	var nodes_user = [];
	var nodes_user_tmp = [];
	
	if (treeObj_user) {
		nodes_user_tmp = treeObj_user.getNodesByFilter(userListTreeFilter);
		// 判断是否存在相同的employeeID
		mergedSameNodebyID(nodes_user_tmp, nodes_user);
	}
	if (treeObj_video) {
		nodes_video_tmp = treeObj_video.getNodesByFilter(userListTreeFilter);
		// 判断是否存在相同的videoID
		mergedSameNodebyID(nodes_video_tmp, nodes_video);
	}
	nodes = nodes_user.concat(nodes_video);
	
	var str = "";
	var len = nodes.length;
	if (len > 30000) {
		len = 30000;
	}
	for ( var i = 0; i < len; i++) {
		if (nodes[i].type == 'group') {
//			var value = '{"ID":"' + nodes[i].groupID + '","type":"group"}';
			var value ='{}';
			value += ',{}';
			var markerStr='';
			var checkboxStr='';
			if((nodes[i].pos_x && nodes[i].pos_y) || !mapLabelRight){
				markerStr = "<span style='display:none;' class='button icon01'>标注</span>";
				checkboxStr="";
			} else {
				markerStr = "<span class='button icon01'>标注</span>";
				checkboxStr=" disabled=true ";
			}
			str = str + "<li  class='"+nodes[i].groupID+nodes[i].type+IDMark_SEARLI+" dragSearchli'  onclick='showSelectedRes(&quot;"
						+ nodes[i].type + "&quot;, &quot;" + nodes[i].groupID
						+ "&quot;);'>"
						+ "<input class='searchRstck' type='checkbox' " + checkboxStr
						+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' />"	
						+ "<a>" + nodes[i].name + "</a></span>"
						+markerStr+"</li>";
		} else if (nodes[i].type == 'operator') {
			//value值	{"ID":"id",	"type":"type","deviceCode":"600"}{"ID":"id","type":"type"}
			var value = '{"ID":"' + nodes[i].operatorID + '","type":"operator","deviceCode":"' + nodes[i].mainTel + '"}';
			if (nodes[i].video && nodes[i].video.length > 0) {
				value += ',{"ID":"' + nodes[i].operatorID +'","type":"operator"}';
			} else {
				value += ',{}';
			}
			var markerStr='';
			var checkboxStr='';
			if((nodes[i].pos_x && nodes[i].pos_y) || !mapLabelRight){
				markerStr = "<span style='display:none;' class='button icon01'>标注</span>";
				checkboxStr="";
			} else {
				markerStr = "<span class='button icon01'>标注</span>";
				checkboxStr=" disabled=true ";
			}
			str = str + "<li  class='"+nodes[i].operatorID+nodes[i].type+IDMark_SEARLI+" dragSearchli'  onclick='showSelectedRes(&quot;"
						+ nodes[i].type + "&quot;, &quot;" + nodes[i].operatorID
						+ "&quot;);'>"
						+ "<input class='searchRstck' type='checkbox' " + checkboxStr
						+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' />"	
						+ "<a>" + nodes[i].name + "</a></span>"
						+markerStr+"</li>";
		} else if (nodes[i].type == 'employee') {
			var value = '{"ID":"' + nodes[i].employeeID + '","type":"employee","deviceCode":"' + nodes[i].number[0].device + '"}';
			if (nodes[i].video && nodes[i].video.length > 0) {
				value += ',{"ID":"' + nodes[i].employeeID +'","type":"employee"}';
			} else {
				value += ',{}';
			}
			var markerStr='';
			var checkboxStr='';
			if((nodes[i].pos_x && nodes[i].pos_y) || !mapLabelRight){
				markerStr = "<span style='display:none;' class='button icon01'>标注</span>";
				checkboxStr="";
			} else {
				markerStr = "<span class='button icon01'>标注</span>";
				checkboxStr=" disabled=true ";
			}
			str = str + "<li class='"+nodes[i].employeeID+nodes[i].type+IDMark_SEARLI+" dragSearchli' onclick='showSelectedRes(&quot;"
					+ nodes[i].type + "&quot;, &quot;" + nodes[i].employeeID
					+ "&quot;);'>" 
					+ "<input class='searchRstck' type='checkbox' " + checkboxStr
					+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' />"
					+ "<a>" + nodes[i].name + "</a></span>"
					+ markerStr+"</li>";
			
		} else if (nodes[i].type == 'videogroup') {
		} else if (nodes[i].type == 'video') {
			var value = '{}';
			value += ',{"ID":"' + nodes[i].videoID +'","type":"video"}';
			var markerStr='';
			var checkboxStr='';
			if((nodes[i].pos_x && nodes[i].pos_y) || !mapLabelRight){
				markerStr = "<span style='display:none;' class='button icon01'>标注</span>";
			} else {
				markerStr = "<span class='button icon01'>标注</span>";
				checkboxStr=" disabled=true ";
			}
			str = str + "<li class='"+nodes[i].videoID+nodes[i].type+IDMark_SEARLI+" dragSearchli' onclick='showSelectedRes(&quot;"
					+ nodes[i].type + "&quot;, &quot;" + nodes[i].videoID
					+ "&quot;);'>" 
					+ "<input class='searchRstck' type='checkbox' " + checkboxStr
					+ "value='" + value + "' /><span class='searchRst'><img src='images/video_24.png' />"
					+ "<a>" + nodes[i].name + "</a></span>"
					+ markerStr + "</li>";
		}
	}
	
	var str_script =
//		"<script type='text/javascript'>" +
		"	$('.allSelect').prop('checked', false);" + 
		"	$('.allSelect').click(function() {" +
		"		$('.searchRstck:enabled').prop('checked', this.checked);" +
		"		showOrHideResTools();" +
		"	});" +
		"	$('.searchRstck').click(function() {" +
		"		showOrHideResTools();" +
		"		$('.allSelect').prop('checked', $('.searchRstck:enabled').length == $('.searchRstck:checked').length);" +
		"	});" +
		"	$('.res-body li span.button.icon01').click(function() {" +
		"		setDrawTypeToMark();" +
		"		nodeBySearch=[];" +
		"		var tmp_value = '['+$(this).siblings('.searchRstck')[0].value+']';" +
		"		eval('tmp_value = '+tmp_value);" +
		"		var id;" +
		"		var type;" +
		"		if(tmp_value){" +
		"			if(tmp_value[0] && tmp_value[0].ID){" +
		"				id=tmp_value[0].ID;" +
		"				type=tmp_value[0].type;" +
		"			}else if(tmp_value[1] && tmp_value[1].ID){" +
		"				id=tmp_value[1].ID;" +
		"				type=tmp_value[1].type;" +
		"			}" +
		"		}" +
		"		getNodefromSearchByIDandType(id, type);" +
		"	});" + 
		"$('.dragSearchli').draggable({"+
		"	appendTo: 'body',"+
		"	cursorAt: { cursor: 'crosshair', top: -5, left: -5 },"+
		"	helper: function(event) {"+
		"		var txt = $(event.target).text();"+
		"		return $('<div class=\"ui-widget-header\">' + $(this).find('a').html() + '</div>');"+
		"	},"+
		"	drag: function(event) {"+
		"		if($(this).children('.icon01').css('display')=='none'){"+
		"			return false;"+
		"		}else{"+
		"			$(this).children('.icon01').click();"+
		"		}"+
		"	},"+
		"	start: function(event, ui) {"+
		"		"+
		"		$(this).css('cursor', 'move');"+
		"	},"+
		"	stop: function(event, ui) {"+
		"		setDrawTypeToHander();"+
		"	    $(this).css('cursor', 'pointer');"+
		"	}"+
		"});";
	//	"</script>";
	$('#allSelect').css('display', 'none');
	$('#search-result').html(str);
	eval(str_script);
	$('.total').html(nodes.length + '个结果');
	setDefaultSearchText('搜索结果:');
	
//	if(nodes.length > 0) {
//		$('#allSelect').css('display', 'block');
//		var tools =  "<input type=\"button\" class=\"def-btn call\" value=\"呼叫\" onclick=\"makeAudioCalls()\" /> "
//				+ "<input type=\"button\" class=\"def-btn video\" value=\"查视频\" onclick=\"showVideo()\" />";
//		$('#searchRes-tools').html(tools);
//		$('#searchRes-tools').css('display', 'none');
//	}
	
	//在地图上显示已标注的点
	for(var i=0; i < len; i++){
		if(nodes[i].pos_x && nodes[i].pos_y){
			var tmp_id='';
			if(nodes[i].type == 'operator'){
				tmp_id = nodes[i].operatorID;
			}else if(nodes[i].type == 'employee'){
				tmp_id = nodes[i].employeeID;
			}else if(nodes[i].type == 'video'){
				tmp_id = nodes[i].videoID;
			}
			var tmp_overlay = getListOverLayByTypeandID(nodes[i].type, tmp_id);
			if(tmp_overlay && tmp_overlay.marker && !tmp_overlay.marker.visible){
				tmp_overlay.marker.show();
				overlaysBySearch.push(tmp_overlay.marker);
			}
		}
	}
	
	var end2 = new Date().getTime();
}

function getNodefromSearchByIDandType(id, type){
	var treeObj;
	var key;
	var value;
	if(type == 'operator'){
		treeObj=$.fn.zTree.getZTreeObj("listTree");
		key='operatorID';
		value=id;
	}else if(type == 'employee'){
		treeObj=$.fn.zTree.getZTreeObj("listTree");
		key='employeeID';
		value=id;
	}else if(type == 'group'){
		treeObj=$.fn.zTree.getZTreeObj("listTree");
		key='groupID';
		value=id;
	}else if(type == 'video'){
		treeObj=$.fn.zTree.getZTreeObj("videoTree");
		key='videoID';
		value=id;
	}
	if(treeObj){
		var nodes = treeObj.getNodesByParam(key, id, null);
		nodeBySearch=nodes;
	}
}

function getResultByCicle(marks_slt) {
	var treeObj_user = $.fn.zTree.getZTreeObj("listTree");
	var treeObj_video = $.fn.zTree.getZTreeObj("videoTree");
	var str = "";
	var nodes;
	for ( var i = 0; i < marks_slt.length; i++) {
		if (marks_slt[i].type == 'group') {
			nodes = treeObj_user.getNodesByParam("groupID", marks_slt[i].id,
					null);
			if(nodes.length > 0) {
				//var value = '{"ID":"' + nodes[0].groupID + '","type":"group"}';
				var value = '{}';
					value += ',{}';
				
				str = str + "<li onclick='showSelectedRes(&quot;"
					+ nodes[0].type + "&quot;, &quot;" + nodes[0].groupID
					+ "&quot;);'>"
				 	+ "<input class='searchRstck' type='checkbox' " 
					+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' />" 	
					+ "<a>" + nodes[0].name + "</a></span></li>";
			}
		} else if (treeObj_user && marks_slt[i].type == 'operator') {
			nodes = treeObj_user.getNodesByParam("operatorID", marks_slt[i].id,
					null);
			if(nodes.length > 0) {
				var value = '{"ID":"' + nodes[0].operatorID + '","type":"operator","deviceCode":"' 
							+ nodes[0].mainTel + '"}';
				if (nodes[0].video && nodes[0].video.length > 0) {
					value += ',{"ID":"' + nodes[0].operatorID +'","type":"operator"}';
				} else {
					value += ',{}';
				}
				str = str + "<li onclick='showSelectedRes(&quot;"
					+ nodes[0].type + "&quot;, &quot;" + nodes[0].operatorID
					+ "&quot;);'>"
				 	+ "<input class='searchRstck' type='checkbox' " 
					+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' />" 	
					+ "<a>" + nodes[0].name + "</a></span></li>";
			}
		} else if (treeObj_user && marks_slt[i].type == 'employee') {
			nodes = treeObj_user.getNodesByParam("employeeID", marks_slt[i].id,
					null);
			if(nodes.length > 0) {
				var value = '{"ID":"' + nodes[0].employeeID + '","type":"employee","deviceCode":"'
							+ nodes[0].number[0].device + '"}';
				if (nodes[0].video && nodes[0].video.length > 0) {
					value += ',{"ID":"' + nodes[0].employeeID +'","type":"employee"}';
				} else {
					value += ',{}';
				}
				
				str = str + "<li onclick='showSelectedRes(&quot;"
						+ nodes[0].type + "&quot;, &quot;" + nodes[0].employeeID
						+ "&quot;);'>"
						+ "<input class='searchRstck' type='checkbox' "
						+ "value='" + value + "' /><span class='searchRst'><img src='images/member_24.png' /><a>"
						+ nodes[0].name + "</a></span></li>";
			}
		} else if (treeObj_user && marks_slt[i].type == 'videogroup') {
		} else if (treeObj_video && marks_slt[i].type == 'video') {
			nodes = treeObj_video.getNodesByParam("videoID", marks_slt[i].id,
					null);
			if(nodes.length > 0) {
				var value = '{}';
				value += ',{"ID":"' + nodes[0].videoID +'","type":"video"}';
				
				str = str + "<li onclick='showSelectedRes(&quot;"
						+ nodes[0].type + "&quot;, &quot;" + nodes[0].videoID
						+ "&quot;);'>"
				 		+ "<input class='searchRstck' type='checkbox' " 
						+ "value='" + value + "' /><span class='searchRst'><img src='images/video_24.png' />"
						+ "<a>" + nodes[0].name + "</a></span></li>";
			}
		}
	}
	
	str = str +
		"<script type='text/javascript'>" +
		"	$('.allSelect').prop('checked', false);" + 
		"	$('.allSelect').click(function() {" +
		"		$('.searchRstck:enabled').prop('checked', this.checked);" +
		"		showOrHideResTools();" +
		"	});" +
		"	$('.searchRstck').click(function() {" +
		"		showOrHideResTools();" +
		"		$('.allSelect').prop('checked', $('.searchRstck').length == $('.searchRstck:checked').length);" +
		"	});" +
		"</script>";

	$('#allSelect').css('display', 'none');
	
	openSearchResult();
	$('#search-result').html(str);
	$('.total').html(marks_slt.length + '个结果');
	//setDefaultSearchText('圈选结果');
	showSelTitle(true, '圈选结果');
	
//	if(marks_slt.length > 0) {
//		$('#allSelect').css('display', 'block');
//		var tools =  "<input type=\"button\" class=\"def-btn call\" value=\"呼叫\" onclick=\"makeAudioCalls()\" /> "
//				+ "<input type=\"button\" class=\"def-btn video\" value=\"查视频\" onclick=\"showVideo()\" />";
//		$('#searchRes-tools').html(tools);
//		$('#searchRes-tools').css('display', 'none');
//	}else{
//		$('#searchRes-tools').css('display', 'none');
//	}

}

function initListPanel() {
	var height = $(this).height();
	var listPanelH = height * 2 / 3;
	$('.operPanel-content').css('height', listPanelH + 'px');
}

function initDetailPosition() {
	var width = $(this).width();
	var detailWidth = $('#detail').width();
	var detail_pos_left = width / 2 - detailWidth / 2;
	$('#detail').css('left', detail_pos_left + 'px');
}

function resize() {
//	initListPanel();
//	initDetailPosition();
	initListPanel();
	initDetailPosition();
	if(!fullScreenFlag){
		setTimeout("resetMapSetCenter()", 500);
	}
	fullScreenFlag = false;
}

function resetMapSetCenter(){
//	mapSetZoom(default_zoom);
//	var location = createPoint(default_center_pos_x,default_center_pos_y);
//	mapPanTo(location);
	var location = new esri.geometry.Point(default_center_pos_x, default_center_pos_y, map.spatialReference);
	map.centerAndZoom(location, default_zoom);
}

function operatorMore() {
	if ($('#moreContent').css('display') == 'none') {
		$('#moreContent').css('display', 'block');
		$('#moreBtn').removeClass('detail-btn-last-up');
		$('#moreBtn').addClass('detail-btn-last-down');
		hideMoreTels();
	} else {
		$('#moreContent').css('display', 'none');
		$('#moreBtn').removeClass('detail-btn-last-down');
		$('#moreBtn').addClass('detail-btn-last-up');
		hideMoreTels();
	}
}

function closeMoreContent() {
	$('#moreContent').css('display', 'none');
}

function showDetail(type,id)
{
	var data = "{\"ID\":\""+id+"\"}";
	window.external.MapShowDetailEvent(type,data);
}

function makeAudioCalls() {
	var len = $('.searchRstck:checked:enabled').length;
	if (len == 0) {
		return;
	}
	var j=0;
	var data = '{"data":[';
	for(var i = 0; i < len; i++) {
		var tmp = $('.searchRstck:checked:enabled')[i].value;
		var tmp1= tmp.substring(0, tmp.indexOf('},') + 1);
		if(tmp1 && tmp1.length>2){	
			if (j > 0) {
				data += ',';
			}
			data += tmp1;
			j++;
		}
	}
	data += ']}';
	makeCalls('audio', data);
}

function makeCalls(callType, data){
	var tmp_data = data.replace(/\|/g, "'");
	window.external.MapMakeCallEvent(callType, tmp_data);
}
	
function makeCall(callType, id, userType, deviceCode){	
	var data = "{\"data\":[{\"ID\":\""+id+"\",\"type\":\""+userType+"\",\"deviceCode\":\""+deviceCode+"\"}]}";
	window.external.MapMakeCallEvent(callType, data);
}

function makeCallsByChecked(callType){
	var treeObj;
	var nodes;
	var nodes_user=[];
	var nodes_user_tmp=[];
	var nodes_null=[];
	var nodes_video=[];
	var str_call = "{\"data\":[";
	if(selectListType == 'user'){
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		nodes_user_tmp =treeObj.getCheckedNodes(true);
		//判断是否存在相同的employeeID
		mergedSameNodebyID(nodes_user_tmp, nodes_user);
	} else if(selectListType == 'video') {
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
		nodes_video = treeObj.getCheckedNodes(true);
	}
	nodes = nodes_user.concat(nodes_video);
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].type == 'operator'){
			if(i==nodes.length-1){
				str_call = str_call + "{\"ID\":\""+nodes[i].operatorID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].mainTel+"\"}";	
			} else {
				str_call = str_call + "{\"ID\":\""+nodes[i].operatorID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].mainTel+"\"},";
			}
		} else if(nodes[i].type == 'employee'){
			if(i==nodes.length-1){
				str_call = str_call + "{\"ID\":\""+nodes[i].employeeID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].number[0].device+"\"}";
			}else{
				str_call = str_call + "{\"ID\":\""+nodes[i].employeeID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].number[0].device+"\"},";
			}
		}else if(nodes[i].type == 'video'){
//			if(i==nodes.length-1){
//				str_call = str_call + "{\"ID\":\""+nodes[i].videoID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].puid+"\"}";
//			} else {
//				str_call = str_call + "{\"ID\":\""+nodes[i].videoID+"\", \"type\":\""+nodes[i].type+"\",\"deviceCode\":\""+nodes[i].puid+"\"},";
//			}
		}
	}
	str_call = str_call + "]}";
	window.external.MapMakeCallEvent(callType, str_call);
}

function showVideo() {
	var len = $('.searchRstck:checked:enabled').length;
	if (len == 0) {
		return;
	}
	var data = '{"data":[';
	var j=0;
	for(var i = 0; i < len; i++) {
		var tmp = $('.searchRstck:checked:enabled')[i].value;
		var sub = tmp.substring(tmp.indexOf('},{') + 2);
		if (sub && sub.length > 2) {//如果小于2，说明没有视频信息
			if (j > 0) {
				data += ',';
			}
			data += sub;
			j++;
		}
	}
	data += ']}';
	showVideos("", data);
}

function showVideos(dataType, data){
	var tmp_data = data.replace(/\|/g, "'");
	window.external.MapShowVideoEvent(dataType, tmp_data);
}

function ShowVideo(dataType, id , userType){
	var data = "{\"data\":[{\"ID\":\""+id+"\", \"type\":\""+userType+"\"}]}";
	window.external.MapShowVideoEvent(dataType, data);
}

var dIntervalShow;
var dIntervalHidd;

var timeOutHidd;

//从下往上显示
function slideShow(id, height, speed, max, inc, delayTime) {
	var begin = 0;
	var times = 1;
	$('#' + id).css('opacity', '0.8');//透明度置为0
	$('#' + id).css('display', 'block');//显示该层
	$('#' + id).css('bottom', '-120px');//透明度置为0
	dIntervalShow = setInterval(function(){
		begin = - height + speed * times;
		$('#' + id).css('bottom', '' + begin + 'px');
		times++;
		if(begin >= 0) {
			clearInterval(dIntervalShow);
		}
	}, 1);
	
	timeOutHidd = setTimeout(
			function(){
				var hiddenTime =  delayTime / max * inc * 1000;
				dIntervalHidd = setInterval(function(){
					max -= inc;
					$('#' + id).css('opacity', '' + max);
					if(0 >= max) {
						clearInterval(dIntervalHidd);
						$('#' + id).css('display', 'none');//隐藏该层
					}
				}, hiddenTime);
			}, delayTime * 1000 + 2000);
	
}

//延迟全部显示，渐显, max 最大显示透明度 inc每次递增透明度 delayTime延迟显示时间（秒）
function delayShow(id, max, inc, delayTime) {
	var begin = 0;
	var intervalTime =  delayTime / max * inc * 1000;
	$('#' + id).css('opacity', '0');//透明度置为0
	$('#' + id).css('display', 'block');//显示该层
	dIntervalShow = setInterval(function(){
		begin += inc;
		$('#' + id).css('opacity', '' + begin);
		if(begin >= max) {
			clearInterval(dIntervalShow);
		}
	}, intervalTime);
	//
	timeOutHidd = setTimeout(
			function(){
				var hiddenTime =  delayTime / max * inc * 1000;
				dIntervalHidd = setInterval(function(){
					max -= inc;
					$('#' + id).css('opacity', '' + max);
					if(0 >= max) {
						clearInterval(dIntervalHidd);
						$('#' + id).css('display', 'none');//隐藏该层
					}
				}, hiddenTime);
			}, delayTime * 1000 + 2000);
}

//延迟全部显示，渐隐
function delayHidden(id, max, dec, delayTime) {
	timeOutHidd = setTimeout(function(){
		var intervalTime =  delayTime / max * dec * 1000;
		dIntervalHidd = setInterval(function(){
			max -= dec;
			$('#' + id).css('opacity', '' + max);
			if(0 >= max) {
				clearInterval(dIntervalHidd);
				$('#' + id).css('display', 'none');//隐藏该层
			}
		}, intervalTime);
	}, 1000);
}

function diyAlert(msg) {
	$('#alertMsg').text(msg);
	clearInterval(dIntervalShow);
	clearInterval(dIntervalHidd);
	clearTimeout(timeOutHidd);
	//delayShow('alert', 0.8, 0.1, 1);
	slideShow('alert', 84, 3, 0.9, 0.1, 1);
}

function closeAlert() {
	$('#alert').css('display', 'none');
}

function diyConfirm() {
	$('#confirm').css('display', 'block');
}

function closeConfirm() {
	$('#confirm').css('display', 'none');
}
dojo.require("esri/SpatialReference");
function setCenter() {
	closeConfirm();
	var point =new esri.geometry.Point((map.extent.xmin+map.extent.xmax)/2,(map.extent.ymin+map.extent.ymax)/2,map.spatialReference);
	default_center_pos_x = point.x;
	default_center_pos_y = point.y;
	//alert(point.x+":"+point.y);
	default_zoom = map.getZoom();
	window.external.MapDefaultCenterEvent(point.x, point.y,
			default_zoom);
	window.external.MapShowMsgEvent("设置成功");
}

function initDatePicker(){
	var startTime = document.getElementById('start_time');
	startTime.maxdate = "#F{document.getElementById('end_time').value}";
	startTime.mindate = "1970-01-01 00:00:00";
	var endTime = document.getElementById('end_time');
	endTime.maxdate = "%y-%M-%d";//"#Year#-#Month#-#Day#";
	endTime.mindate = "#F{document.getElementById('start_time').value}";
	$(".Wdate").each(function() {
		this.onfocus = function() {
			var opts = null;
			opts = {dateFmt:'yyyy-MM-dd HH:mm:ss', readOnly:true, skin:'whyGreen', lang:'zh-cn'};
			opts.minDate = this.mindate;
			opts.maxDate = this.maxdate;
			//alert(opts.minDate);
			//alert(document.getElementById('end_time').value);
			WdatePicker( opts );
		};
	});
}