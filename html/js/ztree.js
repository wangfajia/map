//ztree

var setting_full = {
	view: {
		showLine: false,
		showIcon: false,
		addDiyDom:locationOnMap,
		nameIsHTML: true,
		showTitle:false
	}, 
	check:{
		enable:true,
		chkboxType: { "Y": "s", "N": "s" }
	}, 
	callback: {
		onClick: zTreeOnClick,
		onCheck: zTreeOnCheck,
		beforeExpand: zTreeBeforeExpand,
		onExpand: zTreeOnExpand
	},
	data:{
		key:{
			name:"name"
		},
		simpleData:
		{
			enable:true,
			idKey:"groupID",
			pIdKey:"parentID",
			rootPId:""
		}
	}
};

function zTreeOnClick(event, treeId, treeNode) {
	if(treeNode.type == 'operator') {
		if(treeNode.checked || treeId==null || treeId=='') {
			var info = getInfoByNode(treeNode);
			var detailHtml = getDetailHtml("operator", info, treeNode);
			showMarkInfoWindow(detailHtml);
			// 将选中的点移至可视范围
			mapPanToSelectedMarker(treeNode.type, treeNode.operatorID);
		}
	} else if(treeNode.type == 'employee') {
		if(treeNode.checked  || treeId==null || treeId=='') {
			var info = getInfoByNode(treeNode);
			var detailHtml = getDetailHtml("employee", info, treeNode);
			showMarkInfoWindow(detailHtml);
			mapPanToSelectedMarker(treeNode.type, treeNode.employeeID);
		}
	}else if(treeNode.type == 'group') {
		if(treeNode.checked || treeId==null || treeId=='') {
			var info = getInfoByNode(treeNode);
			var detailHtml = getDetailHtml("group", info, treeNode);
			showMarkInfoWindow(detailHtml);
			// 将选中的点移至可视范围
			mapPanToSelectedMarker(treeNode.type, treeNode.groupID);
		}
	} else if(treeNode.type == 'video') {
		if(treeNode.checked  || treeId==null || treeId=='') {
			var info = getInfoByNode(treeNode);
			var detailHtml = getDetailHtml("video", info, treeNode);
			showMarkInfoWindow(detailHtml);
			mapPanToSelectedMarker(treeNode.type, treeNode.videoID);
		}
	} else {
		closeDetail();
	}
}

function getCheckedNodeFilter(node) {
	if(node.type == 'operator' || node.type == 'employee' || node.type == 'video') {
		return node.checked;
	}
	return false;	
}

function showOrHideTreeTools() {
	var nodes;
	var nodes_user=[];
	var nodes_video=[];
	var treeObj;
	var video_len=0;
	if(selectListType == 'user') {
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		if(treeObj){
			nodes_user =treeObj.getNodesByFilter(getCheckedNodeFilter);
		}
		for(var i=0; i<nodes_user.length; i++){
			if(nodes_user[i].video && nodes_user[i].video.length>0){
				video_len++;
			}
		}
	} else if(selectListType == 'video') {
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
		if(treeObj){
			nodes_video = treeObj.getNodesByFilter(getCheckedNodeFilter);
		}
	}
	if(nodes_user && nodes_user.length>0) {
		$('#user_tree_tools').css('display','block');
		if(video_len>0){
			$('#user_tree_tools input.video').css('display','inline');
		}else{
			$('#user_tree_tools input.video').css('display','none');
		}
	} else {
		$('#user_tree_tools').css('display','none');
	}
	
	if(nodes_video && nodes_video.length>0) {
		$('#video_tree_tools').css('display','block');	
	} else {
		$('#video_tree_tools').css('display','none');	
	}
}

function zTreeOnCheck(event, treeId, treeNode) {
	var checked_flag = treeNode.chkDisabled?false:treeNode.checked;
	if(!checked_flag){
		var id;
		if(treeNode.type == "operator"){
			id = treeNode.operatorID;
		}else if(treeNode.type == "employee"){
			id = treeNode.employeeID;
		}else if(treeNode.type == "group"){
			id = treeNode.groupID;
		}
		if(id && id == callInGroupID){
			if(interval){                 //清除来电动画的定时器
	    		clearInterval(interval);
	    	}
	    	if(graphic_circle){                //清除来电动画的图像
	    		graphicLayer.remove(graphic_circle);
	    	}
	    	callInGroupID = "";
		}
	}
	//var start = new Date().getTime();
	showOrRmvMarkerOnMapByChecked(treeNode, checked_flag);
	//var end = new Date().getTime();
	showOrHideTreeTools();
	//alert(end-start);
}

function showOrRmvMarkerOnMapByChecked(treeNode, flag) {
	var checked_flag = flag;
	if(!treeNode.chkDisabled){
		if(treeNode.type == 'operator'){
			if(checked_flag){
				var info = getInfoByNode(treeNode);
				showListOverlay(treeNode.type, treeNode.operatorID, treeNode.name);
			}else{
				closeDetail();
				hideListOverlay(treeNode.type, treeNode.operatorID);
			}
			
		}else if(treeNode.type == 'employee'){
				if(checked_flag){
					var info = getInfoByNode(treeNode);
					showListOverlay(treeNode.type, treeNode.employeeID, treeNode.name);
				}else{
					closeDetail();
					hideListOverlay(treeNode.type, treeNode.employeeID);
				}
		}else if(treeNode.type == 'video'){
			if(checked_flag){
				var info = getInfoByNode(treeNode);
				showListOverlay(treeNode.type, treeNode.videoID, treeNode.name);
			} else {
				closeDetail();
				hideListOverlay(treeNode.type, treeNode.videoID);
			}
		}else if(treeNode.type == 'group' ){
			if(checked_flag){
				var info = getInfoByNode(treeNode);
				showListOverlay(treeNode.type, treeNode.groupID, treeNode.name);
			} else {
				closeDetail();
				hideListOverlay(treeNode.type, treeNode.groupID);
			}
			if(treeNode.children && treeNode.children.length>0){
				for(var i=0; i<treeNode.children.length; i++){
					showOrRmvMarkerOnMapByChecked(treeNode.children[i], checked_flag);
				}
			}	
		}else if(treeNode.type == 'videogroup'){
			if(treeNode.children && treeNode.children.length>0){
				for(var i=0; i<treeNode.children.length; i++){
					showOrRmvMarkerOnMapByChecked(treeNode.children[i], checked_flag);
				}
			}
		}
	}
}

function getGroupsNamesByGroupIDs(groupIDs, type) {
	var groupNames ="";
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(type == 'operator' || type == 'employee')
	{
		treeObj = $.fn.zTree.getZTreeObj("listTree");
	}
	else if(type == 'video')
	{
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
	}
	if(groupIDs && groupIDs.length>0)
	{
		for(var a=0; a<groupIDs.length; a++)
		{
			var tmp = treeObj.getNodesByParam("groupID", groupIDs[a].groupID, null);
			if(tmp && tmp.length>0)
			{
				if(a == groupIDs.length-1)
				{
					groupNames = groupNames+tmp[0].name;
				}
				else
				{							
					groupNames = groupNames+tmp[0].name+',';
				}
			}
		}
	}
	return groupNames;
}

function userListTreeFilter(node) {
	var condition = $('.searchbox-text').val();
	if(condition){
		condition = condition.replace(/\s+/g,"");
	}else{
		condition = '';
	}
	
	if((node.type=='operator' || node.type=='employee'
		|| node.type=='video' || node.type=='group') && node.name && node.name.indexOf(condition) > -1){
	 	return true;
	}
	
	return false;
}

function showSelectedRes(type, id) {
	var node;
	var key;
	var treeObj;
	if(type=='video') {
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
		key = "videoID";	
	} else if(type == 'operator' ) {
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		key = "operatorID";
	} else if(type == 'employee') {
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		key = "employeeID";
	} else if(type == 'group') {
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		key = "groupID";
	}
	
	if(treeObj) {
		node = treeObj.getNodesByParam(key, id, null);
		if(node && node.length>0 && node[0].pos_x && node[0].pos_y) {
			zTreeOnClick(null, 0, node[0]);
		}
	} else {
		closeDetail();
	}
}

function showVideosByChecked(dataType) {
	var treeObj;
	var nodes;
	var nodes_user=[];
	var nodes_video=[];
	var j=0;
	var str_video = "{\"data\":[";
	if(selectListType == 'user') {
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		nodes_user =treeObj.getCheckedNodes(true);
	} else if(selectListType == 'video') {
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
		nodes_video = treeObj.getCheckedNodes(true);
	}
	nodes = nodes_user.concat(nodes_video);
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].type == 'operator' && nodes[i].video && nodes[i].video.length>0){
//			if(i==nodes.length-1){
//				str_video = str_video + "{\"ID\":\""+nodes[i].operatorID+"\", \"type\":\""+nodes[i].type+"\"}";					
//			}else{
//				str_video = str_video + "{\"ID\":\""+nodes[i].operatorID+"\", \"type\":\""+nodes[i].type+"\"},";
//			}
			if(j>0){
				str_video = str_video + ",";	
			}
			str_video = str_video + "{\"ID\":\""+nodes[i].operatorID+"\", \"type\":\""+nodes[i].type+"\"}";
			j++;
		} else if(nodes[i].type == 'employee' && nodes[i].video && nodes[i].video.length>0){
//			if(i==nodes.length-1){
//				str_video = str_video + "{\"ID\":\""+nodes[i].employeeID+"\", \"type\":\""+nodes[i].type+"\"}";
//			} else {
//				str_video = str_video + "{\"ID\":\""+nodes[i].employeeID+"\", \"type\":\""+nodes[i].type+"\"},";
//			}
			if(j>0){
				str_video = str_video + ",";
			}
			str_video = str_video + "{\"ID\":\""+nodes[i].employeeID+"\", \"type\":\""+nodes[i].type+"\"}";
			j++;
		} else if(nodes[i].type == 'video') {
//			if(i==nodes.length-1){
//				str_video = str_video + "{\"ID\":\""+nodes[i].videoID+"\", \"type\":\""+nodes[i].type+"\"}";
//			} else {
//				str_video = str_video + "{\"ID\":\""+nodes[i].videoID+"\", \"type\":\""+nodes[i].type+"\"},";
//			}
			if(j>0){
				str_video = str_video + ",";
			}
			str_video = str_video + "{\"ID\":\""+nodes[i].videoID+"\", \"type\":\""+nodes[i].type+"\"}";
			j++;
		}
	}
	str_video = str_video + "]}";
	window.external.MapShowVideoEvent(dataType, str_video);
}
function zTreeExpandFirstLevel(){
	var treeObj_user = $.fn.zTree.getZTreeObj("listTree");
	var treeObj_video = $.fn.zTree.getZTreeObj("videoTree");
	if(treeObj_user){
		treeObj_user.expandAll(true);
		treeObj_user.expandAll(false);
		var nodes = treeObj_user.getNodes();
		if(nodes && nodes.length>0){
			for(var i=0; i<nodes.length;i++){
				treeObj_user.expandNode(nodes[i], true, false, true);
			}
		}
	}
	if(treeObj_video){
		treeObj_video.expandAll(true);
		treeObj_video.expandAll(false);
		var nodes = treeObj_video.getNodes();
		if(nodes && nodes.length>0){
			for(var i=0; i<nodes.length;i++){
				treeObj_video.expandNode(nodes[i], true, false, true);
			}
		}
	}
}
var start_expand;
var end_expand;
function zTreeBeforeExpand(treeId, treeNode){
	var icoObj = $("#" + treeNode.tId + IDMark_Icon);
	//icoObj.removeClass('noline_open_loading');
	//icoObj.removeClass('noline_close_loading');
	//icoObj.removeClass('noline_close');
	//icoObj.removeClass('ico_close');
	//icoObj.removeClass('ico_open');
	//icoObj.addClass('ico_loading');
	start_expand = new Date().getTime();
	return true;
}
function zTreeOnExpand(event, treeId, treeNode){
	var icoObj = $("#" + treeNode.tId + IDMark_Icon);
	//icoObj.removeClass('ico_loading');
	end_expand = new Date().getTime();
	//alert(end_expand-start_expand);
}
