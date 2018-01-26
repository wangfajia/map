/**
 * 职员，操作员，摄像头，单位详细信息
 */

function showMoreDetailWindowByType(type, id){
	var treeObj = null;
	var node = null;
	if(type == "group" || type == "operator" || type == "employee"){
		treeObj = $.fn.zTree.getZTreeObj("listTree");
	}else if(type == "videogroup" && type == "video"){
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
	}
	
	if(type=="group"){
		node = treeObj.getNodeByParam("groupID", id, null);
	}else if(type == "operator"){
		node = treeObj.getNodeByParam("operatorID", id, null);
	}else if(type == "employee"){
		node = treeObj.getNodeByParam("employeeID", id, null);
		
	}else if(type == "videogroup"){
		node = treeObj.getNodeByParam("videogroupID", id, null);
	}else if(type == "video"){
		node = treeObj.getNodeByParam("videoID", id, null);
	}
	
	if(node != null){
		var html = getMoreDetailInfoHtml(node, treeObj);
		if(type == "group" || type == "videogroup"){
			$("#moreDetailWinForGroup").html(html);
		}else{
			$("#moreDetailWinForUser").html(html);
		}
		
		showMoreDetailInfoWin(type);
	}
	treeObj = null;
}

function getMoreDetailInfoHtml(node, treeObj){
	var str = "";
	var type = node.type;
	if(type == "group"){
		str = getMoreDetailInfoForGroup(node, treeObj);
	}else if(type == "employee"){
		str = getMoreDetailInfoForEmployee(node, treeObj);
	}else if(type == "operator"){
		str = getMoreDetailInfoForOperator(node, treeObj);
	}
	
	return str;
}
function getMoreDetailInfoForGroup(node, treeObj){
	var parentNode = treeObj.getNodeByParam("groupID", node.parentID, null);
	var parentName = parentNode?parentNode.groupName:"";
//	parentName = getTreeNodeName(parentName, 20);
	var children = node.children;
	var userList = [];
	var num_user = 0;
	if(children && children.length>0){
		var len = children.length;
		for(var i=0; i<len;i++){
			var child = children[i];
			if(child.type != "group"){
				userList.push(child);
				num_user++;
			}else{
				var grandSon = child.children;
				if(grandSon && grandSon.length>0){
					for(var j=0; j<grandSon.length; j++){
						getAllChildren(grandSon[j],userList);
					}
				}
			}
		}
	}
	var str = '<div class="detailWin-body">'+
			'<form>'+
			'<div class="formRow"  >'+
				'<label class="rowName">单位：</label>'+
				'<div class="rowValue">'+getTreeNodeName(parentName, 40)+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName">名称：</label>'+
				'<div class="rowValue">'+getTreeNodeName(node.groupName, 40)+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName" >职员：</label>'+
				'<div class="rowValue">';
			for(var i=0; i<userList.length;i++){
				var user = userList[i];
				if(user.type == "operator"){
		str = str +	'<div class="telInfo">'+
						'<span style="cursor:pointer;display:inline-block;width:230px; text-align:center;" onclick="showMoreDetailWindowByType(&quot;operator&quot;,&quot;'+user.operatorID+'&quot;)"><a style="text-decoration:underline">'+getTreeNodeName(user.realName, 20)+'</a></span>'+
						'<span style="cursor:pointer" onclick="makeCall(&quot;video&quot;,&quot;'+user.operatorID+'&quot;,&quot;operator&quot;,&quot;'+user.mainTel+'&quot;)">'+user.mainTel+'</span>'+
					'</div>';
				}else if(user.type == "employee"){
					var device = user.number.length>0?user.number[0].device:"";
					var deviceType = user.number.length>0?user.number[0].deviceType:"";
		str = str +	'<div class="telInfo">'+
						'<span style="cursor:pointer;display:inline-block; width:230px; text-align:center;" onclick="showMoreDetailWindowByType(&quot;employee&quot;,&quot;'+user.employeeID+'&quot;)"><a style="text-decoration:underline">'+getTreeNodeName(user.realName, 20)+'</a></span>'+
						'<span style="cursor:pointer" onclick="makeCall(&quot;video&quot;,&quot;'+user.employeeID+'&quot;,&quot;employee&quot;,&quot;'+device+'&quot;)">'+device+'</span>'+
						'<span>('+getDeviceTypeName(deviceType)+')</span>'+
					'</div>';					
				}
			}
	
		str = str +'</div>'+
			'</div>'+
			'</form>'+		
		'</div>';
		str = getMoreDetailInfoHead("group")+str;
		str = str + getMtreDetailInfoFooter("group");
		return str;
}

function getMoreDetailInfoForEmployee(node, treeObj){
	var groupName = "";
	var numbers = node.number;
	if(node.group && node.group.length>0){
		var len = node.group.length;
		for(var i=0; i<len;i++){
			var group = node.group[i];
			var parentNode = treeObj.getNodeByParam("groupID", group.groupID, null);
			groupName = groupName + "<div class='telInfo'>"+getTreeNodeName(parentNode.groupName, 40)+"</div>";
		}
	}
	
	var str = '<div class="detailWin-body">'+
			'<form>'+
			'<div class="formRow"  >'+
				'<label class="rowName">单位：</label>'+
				'<div class="rowValue">'+groupName+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName">名称：</label>'+
				'<div class="rowValue">'+getTreeNodeName(node.realName, 40)+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName" >号码：</label>'+
				'<div class="rowValue">';
			for(var i=0; i<numbers.length;i++){
				var number = numbers[i];
		str = str +	'<div class="telInfo">'+
						'<span style="cursor:pointer; width:200px; text-align:center;" onclick="makeCall(&quot;video&quot;,&quot;'+node.employeeID+'&quot;,&quot;employee&quot;,&quot;'+number.device+'&quot;)">'+number.device+'</span>'+
						'<span >('+getDeviceTypeName(number.deviceType)+')</span>'+
					'</div>';
			}
	
		str = str +'</div>'+
			'</div>'+
			'</form>'+		
		'</div>';
		str = getMoreDetailInfoHead("user")+str;
		str = str + getMtreDetailInfoFooter("user");
		return str;
}

function getMoreDetailInfoForOperator(node, treeObj){
	var groupName = "";
	if(node && node.parentID){
		var parentNode = treeObj.getNodeByParam("groupID", node.parentID, null);
		groupName = parentNode.groupName;
	}
	
	var str = '<div class="detailWin-body">'+
			'<form>'+
			'<div class="formRow"  >'+
				'<label class="rowName">单位：</label>'+
				'<div class="rowValue">'+getTreeNodeName(groupName, 40)+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName">名称：</label>'+
				'<div class="rowValue">'+getTreeNodeName(node.realName, 40)+'</div>'+
			'</div>'+
			'<div class="formRow"  >'+
				'<label class="rowName" >号码：</label>'+
				'<div class="rowValue">';
	str = str +	'<div class="telInfo">'+
					'<span style="cursor:pointer" onclick="makeCall(&quot;video&quot;,&quot;'+node.operatorID+'&quot;,&quot;employee&quot;,&quot;'+node.mainTel+'&quot;)">'+node.mainTel+'</span>'+
					'<span >(左手柄)</span>'+
				'</div>';
	if(node.viceTel){
	str = str +	'<div class="telInfo">'+
					'<span style="cursor:pointer" onclick="makeCall(&quot;video&quot;,&quot;'+node.operatorID+'&quot;,&quot;employee&quot;,&quot;'+node.viceTel+'&quot;)">'+node.viceTel+'</span>'+
					'<span >(右手柄)</span>'+
				'</div>';
	}
		str = str +'</div>'+
			'</div>'+
			'</form>'+		
		'</div>';
		str = getMoreDetailInfoHead("user")+str;
		str = str + getMtreDetailInfoFooter("user");
		return str;
}
function getMoreDetailInfoHead(type){
	var str = '<div class="detailWin-head">'+
			'<div>'+
				'<div class="title">详细信息</div>'+
				'<span class="detailWin-close" onclick="hideMoreDetailInfoWin(&quot;'+type+'&quot;)" ></span>'+
			'</div>'+
		'</div>';
	return str;
}
function getMtreDetailInfoFooter(type){
	var str = '<div class="detailWin-footer">'+
			'<div class="buttons">'+
				'<input type="button" class="confirm-btn" onclick="hideMoreDetailInfoWin(&quot;'+type+'&quot;)" value="关闭"/>'+
			'</div>'+
		'</div>';
	return str;
}
function showMoreDetailInfoWin(type){
	if(type == "group"){
		$("#moreDetailWinForGroup").css("display", "block");
	}else {
		$("#moreDetailWinForUser").css("display", "block");
	}
}
function hideMoreDetailInfoWin(type){
	if(type == "group"){
		$("#moreDetailWinForGroup").css("display", "none");
	}else {
		$("#moreDetailWinForUser").css("display", "none");
	}	
}

function getDeviceTypeName(deviceType){
	var name = "";
	if(deviceType == "office"){
		name = "办公号码";
	}else if(deviceType == "home"){
		name = "家庭号码";
	}else if(deviceType == "mobile"){
		name = "移动号码";
	}else if(deviceType == "fax"){
		name = "传真号码";
	}else if(deviceType == "linkage"){
		name = "联动号码";
	}else if(deviceType == "wireless"){
		name = "无线终端";
	}else if(deviceType == "video"){
		name = "视频终端";
	}else if(deviceType == "poc"){
		name = "poc终端";
	}else if(deviceType == "pocgroup"){
		name = "poc群组";
	}else if(deviceType == "solider"){
		name = "单兵终端";
	}else {
		name = "家庭号码";
	}
	return name;
}

function showMoreAudioTels(){
	var value = $("#moreAudioTels").css("display");
	if(value == "none"){
		$("#moreAudioTels").css("display", "block");
		$("#moreVideoTels").css("display", "none");
	}else{
		$("#moreAudioTels").css("display", "none");
	}
	
}
function showMoreVideoTels(){
	var value = $("#moreVideoTels").css("display");
	if(value == "none"){
		$("#moreVideoTels").css("display", "block");
		$("#moreAudioTels").css("display", "none");
	}else{
		$("#moreVideoTels").css("display", "none");
	}
}
function hideMoreTels(){
	$("#moreVideoTels").css("display", "none");
	$("#moreAudioTels").css("display", "none");
}
