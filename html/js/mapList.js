// JavaScript Document
//调度台将新增或修改的通讯录数据和视频数据推送给地理信息网页
var groups = new Array();
var operators = new Array();
var employees = new Array();
var videogroups = new Array();
var videos = new Array();
var rights = new Array();
var listTree=[];
var videoTree=[];
var p_rootID="";
var default_center_pos_x=98.083108921875;
var default_center_pos_y=32.5375556796875;
var default_zoom=4;
var default_nodename_length = 14;
var start =0;
var isInitEmpFinish = false;
var isInitVideoFinish = false;

var mapLabelRight = false;

function MapDataPush(type, data, isFirst){
	try {
		eval('data='+data);
	} catch (e) {
		//alert(e);
	}

	if(1 == isFirst){
		if(type == 'group')
		{
			var i = 0;
			if (null != groups) {
				i = groups.length;
				groups = groups.concat(data.data);
			} else {
				groups = data.data;
			}
			
//			for(i; i < groups.length; i++){
//				//name属性作为节点名称
//				groups[i].name = getTreeNodeName(groups[i].groupName, default_nodename_length);
//				groups[i].type = 'group';
//				groups[i].isParent = true;
//			}
			for ( var i = 0; i < groups.length; i++) {
				var t_user = groups[i];
				t_user.name = getTreeNodeName(groups[i].groupName, default_nodename_length);
				t_user.type = 'group';
				t_user.isParent = true;
				if(t_user.pos_x && t_user.pos_y){
					mapAddListOverlayAndInfoWindow(t_user.pos_x, t_user.pos_y, t_user.groupID, t_user.name, t_user.type, '', t_user,false);
				}else{
					//t_user.chkDisabled=true;
				}
//				for ( var j = 0; j < groups.length; j++) {
//					if(groups[i].parentID == groups[j].groupID){
//						if(groups[j].children){}else{
//							groups[j].children = new Array();
//						}
//						groups[j].children.push(t_user);
//						break;
//					}
//				}
			}
		}else if(type == 'operator'){
			if (null != operators) {
				operators = operators.concat(data.data);
			} else {
				operators = data.data;
			}
		}else if(type == 'employee'){
			var temp = data.data;
			var empTmp = new Array();
			parseEmployeeByGroup(temp, empTmp);
			employees = employees.concat(empTmp);
			
			employees = scriptSortFirstLoaded(employees);
			makeJsonListTreeFirstLoad(groups, operators, employees);
			$.fn.zTree.init($("#listTree"), setting_full, groups);
//			$(".labelRight").css("display","none");
			isInitEmpFinish = true;
		}else if(type == 'videogroup'){
			var i = 0;
			if (null != videogroups) {
				i = videogroups.length;
				videogroups = videogroups.concat(data.data);
			} else {
				videogroups = data.data;
			}
			
			for(i; i < videogroups.length; i++){
				//name属性作为节点名称
				videogroups[i].name = getTreeNodeName(videogroups[i].groupName, default_nodename_length);
				videogroups[i].type = 'videogroup';
				videogroups[i].groupID = videogroups[i].videoGroupID;
				videogroups[i].isParent = true;
			}
			
		} else if(type == 'video'){
			var temp = data.data;
			var empTmp = new Array();
			parseEmployeeByGroup(temp, empTmp);
			videos = videos.concat(empTmp);
			videos = scriptSortFirstLoaded(videos);
			
//			makeJsonListTreeFirstLoad(groups, operators, videos);
			makeJsonVideoTreeFirstLoad(videogroups, videos);
			$.fn.zTree.init($("#videoTree"), setting_full, videogroups);
//			$(".labelRight").css("display","none");
			isInitVideoFinish = true;			
		} else if(type == 'right'){
			if (null != rights) {
				rights = rights.concat(data.data);
			} else {
				rights = data.data;
			}
			for(var i=0; i<rights.length; i++){
				if(rights[i].authcode.indexOf ("MapLabel") != -1){
					mapLabelRight = true;
				}
			}
//			mapLabelRight = false;
		}
		
	} else if (2 == isFirst) {
		if(type == 'group')
		{
			var i = 0;
			if (null != groups) {
				i = groups.length;
				groups = groups.concat(data.data);
			} else {
				groups = data.data;
			}
			
			for(i; i < groups.length; i++){
				//name属性作为节点名称
				groups[i].name = getTreeNodeName(groups[i].groupName, default_nodename_length);
				groups[i].type = 'group';
				groups[i].isParent = true;
			}
			
		}else if(type == 'operator'){
			if (null != operators) {
				operators = operators.concat(data.data);
			} else {
				operators = data.data;
			}
		}else if(type == 'employee'){
			var temp = data.data;
			var empTmp = new Array();
			parseEmployeeByGroup(temp, empTmp);
			empTmp = scriptSortFirstLoaded(empTmp);
			employees = employees.concat(empTmp);
		}else if(type == 'videogroup'){
			var i = 0;
			if (null != videogroups) {
				i = videogroups.length;
				videogroups = videogroups.concat(data.data);
			} else {
				videogroups = data.data;
			}
			
			for(i; i < videogroups.length; i++){
				//name属性作为节点名称
				videogroups[i].name = getTreeNodeName(videogroups[i].groupName, default_nodename_length);
				videogroups[i].type = 'videogroup';
				videogroups[i].groupID = videogroups[i].videoGroupID;
				videogroups[i].isParent = true;
			}
		}else if(type == 'video'){
			var temp = data.data;
			var empTmp = new Array();
			parseEmployeeByGroup(temp, empTmp);
			empTmp = scriptSortFirstLoaded(empTmp);
			videos = videos.concat(empTmp);
		}else if(type == 'right'){
			if (null != rights) {
				rights = rights.concat(data.data);
			} else {
				rights = data.data;
			}
		}
	} else {
		if(type=='group'){
			var temp = data.data;
			if(groups == null){
				//首次加载数
				groups = temp;	
				for(i; i < groups.length; i++){
					//name属性作为节点名称
					groups[i].name = getTreeNodeName(groups[i].groupName, default_nodename_length);
					groups[i].type = 'group';
					groups[i].isParent = true;
				}
				//makeGroupsJsonTree(groups);
			} else if (!isInitEmpFinish) {
				for(i; i < temp.length; i++){
					//name属性作为节点名称
					temp[i].name = getTreeNodeName(temp[i].groupName, default_nodename_length);
					temp[i].type = 'group';
					groups[i].isParent = true;
				}
				groups = groups.concat(temp);				
			}else{
				//非首次加载，需判断是修改，添加
				addGroupToJsonTree(temp);
				showOrHideTreeTools();
			}
		}
		if(type=='operator'){
			var temp = data.data;
			if(operators == null){
				operators = temp;	
			} else if (!isInitEmpFinish) {
				operators = operators.concat(temp);
			} else {
				addOpertorToTree(temp);
				showOrHideTreeTools();
			}
			
		}
		if(type=='employee'){
			if(isInitEmpFinish){ 
				 var temp = data.data;
				addEmployeeToTree(temp);
				showOrHideTreeTools();
			} else {
				var temp = data.data;
				var empTmp = new Array();
				parseEmployeeByGroup(temp, empTmp);
				employees = employees.concat(empTmp);
				
				employees = scriptSortFirstLoaded(employees);
			}
		}
		if(type == 'videogroup'){
			var temp = data.data;
			if(videogroups == null) {
				//首次加载数
				videogroups = temp;	
				var i = 0;
				
				for(i; i < videogroups.length; i++){
					//name属性作为节点名称
					videogroups[i].name = getTreeNodeName(videogroups[i].groupName, default_nodename_length);
					videogroups[i].type = 'videogroup';
					videogroups[i].groupID = videogroups[i].videoGroupID;
					videogroups[i].isParent = true;
				}
			} else if (!isInitVideoFinish) {
				var i = 0;
				if (null != videogroups) {
					i = videogroups.length;
					videogroups = videogroups.concat(data.data);
				} else {
					videogroups = data.data;
				}
				
				for(i; i < videogroups.length; i++){
					//name属性作为节点名称
					videogroups[i].name = getTreeNodeName(videogroups[i].groupName, default_nodename_length);
					videogroups[i].type = 'videogroup';
					videogroups[i].groupID = videogroups[i].videoGroupID;
					videogroups[i].isParent = true;
				}
			} else {
				//非首次加载，需判断是修改，添加
				addVideoGroupToJsonTree(temp);
			}
		}
		if(type == 'video'){
			if(isInitVideoFinish){
				var temp = data.data;
				addVideoToTree(temp);
				showOrHideTreeTools();
			} else {
				var temp = data.data;
				var empTmp = new Array();
				parseEmployeeByGroup(temp, empTmp);
				videos = videos.concat(empTmp);
				videos = scriptSortFirstLoaded(videos);
			}
		}
	}
}

function makeJsonListTreeFirstLoad(groups, operators, employees){
	for ( var i = 0; i < operators.length; i++) {
		var t_user = operators[i];
		t_user.parentID = t_user.groupID;
		t_user.name = getTreeNodeName(t_user.realName, default_nodename_length);
		t_user.type = 'operator';
		delete t_user.groupID;
		if(t_user.pos_x && t_user.pos_y){			
			mapAddListOverlayAndInfoWindow(t_user.pos_x, t_user.pos_y, t_user.operatorID, t_user.name, t_user.type, '', t_user,false);
		}else{
			t_user.chkDisabled=true;
		}
		for ( var j = 0; j < groups.length; j++) {
			if(operators[i].parentID == groups[j].groupID){
				if(groups[j].children){}else{
					groups[j].children = new Array();
				}
				groups[j].children.push(t_user);
				break;
			}
		}
	}
	for ( var i = 0; i < employees.length; i++) {
		var t_user = employees[i];
		t_user.parentID = t_user.groupID;
		t_user.name = getTreeNodeName(t_user.realName, default_nodename_length);
		t_user.type = 'employee';
		delete t_user.groupID;
		/*if (i < 800) {
			t_user.pos_x = 120.077326 + i * 0.005;
			t_user.pos_y = 30.430426;
		}*/
		if(t_user.pos_x && t_user.pos_y){			
			mapAddListOverlayAndInfoWindow(t_user.pos_x, t_user.pos_y, t_user.employeeID, t_user.name, t_user.type, '', t_user,false);
		}else{
			t_user.chkDisabled=true;
		}
		for ( var j = 0; j < groups.length; j++) {
			if(employees[i].parentID == groups[j].groupID){
				if(groups[j].children){}else{
					groups[j].children = new Array();
				}
				groups[j].children.push(t_user);
				break;
			}
		}
		
	}
	
}

function makeJsonVideoTreeFirstLoad(videoGroups, videos){
	for ( var i = 0; i < videos.length; i++) {
		var t_video = videos[i];
		t_video.parentID = t_video.groupID;
		t_video.name = t_video.videoName;
		t_video.type = 'video';
		delete t_video.groupID;
		
		if(t_video.pos_x && t_video.pos_y){		
			mapAddListOverlayAndInfoWindow(t_video.pos_x, t_video.pos_y, t_video.videoID, t_video.name, t_video.type, '', t_video, false);
		} else {
			t_video.chkDisabled = true;
		}
		for ( var j = 0; j < videoGroups.length; j++) {
			if(videos[i].parentID == videoGroups[j].groupID){
				if(videoGroups[j].children){
				}else{
					videoGroups[j].children = new Array();
				}
				videoGroups[j].children.push(t_video);
				break;
			}
		}
	}	
	
}

function parseEmployeeByGroup(employees, employees_new){
	for ( var i = 0; i < employees.length; i++) {
		var t_groups = employees[i].group;
		
		if(t_groups && t_groups.length>0){
			//employees.splice(i, 1);
			for ( var j = 0; j < t_groups.length; j++) {
				var tmp_emp = employees[i];
				var employee_new={};
				for ( var key in tmp_emp) {
					eval('employee_new.'+key+'=tmp_emp.'+key);
				}
				employee_new.groupID = t_groups[j].groupID;
				employee_new.orderNO = t_groups[j].orderNO;
				employees_new.push(employee_new);
				
				tmp_emp = null;
			}
		}else{
			employees_new.push(employees[i]);
		}
	}
}

function sortFunc(node1, node2){
	if(parseFloat(node1.orderNO)>parseFloat(node2.orderNO))
	{
		return 1;
	}else if(parseFloat(node1.orderNO)==parseFloat(node2.orderNO)){
		return 0;
	}else{
		return -1;
	}
}

function scriptSortFirstLoaded(objs){
	var sorted_objs = objs.sort(sortFunc);
	return sorted_objs;
}

function selectSortSingle(nodes, type){
	if(nodes && nodes.length>0){
		var treeObj = $.fn.zTree.getZTreeObj("listTree");
		if(type == 'video'){
			treeObj = $.fn.zTree.getZTreeObj("videoTree");
		}
		var temp;
		var length = nodes.length;
		for(var i=0; i<length; i++){
			var min = i;
			for(var j=i+1; j<length; j++){
				if(parseFloat(nodes[min].orderNO)>parseFloat(nodes[j].orderNO)){
					min=j;
				}
			}
			if(min!=i){
				try {
					treeObj.moveNode(nodes[i], nodes[min], "prev", true);
					if(nodes[i].type=='video'){
						var p = treeObj.getNodesByParam('groupID', nodes[i].parentID, null);
						nodes = p[0].children;
						//alert(nodes.length);
					}else{
						var p = treeObj.getNodesByParam('groupID', nodes[i].parentID, null);
						nodes = p[0].children;
					}
				} catch (e) {
					alert(nodes[min].name+'err');
				}
			}
		}	
	}
}

function selectSort(groups, treeType){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");	
	if(treeType=='video'){
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
	}
	var temp;
	var length = groups.length;
	for(var i=0; i<length; i++){
		var min = i;
		for(var j=i+1; j<length; j++){
			if(parseFloat(groups[min].orderNO)>parseFloat(groups[j].orderNO)){
				min=j;
			}
		}
		if(min!=i){
			try {
				treeObj.moveNode(groups[i], groups[min], "prev", true);
			} catch (e) {
				alert(groups[i].name+':'+groups[min].name+'err');
			}
		}
	}
	for(var i=0; i<length; i++){
		if(groups[i].children && groups[i].children.length){
			selectSort(groups[i].children, treeType)
		}
	}
}
function ztreeGroupSelectSort(treeType){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(treeType=='video'){
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
	}
	var nodes = treeObj.getNodes();
	selectSort(nodes,treeType);
}
function makeGroupsJsonTree(data){
	
	listTree=data;
	for(var i=0; i<listTree.length;i++){
		//name属性作为节点名称
		listTree[i].name = getTreeNodeName(listTree[i].groupName, default_nodename_length);
		listTree[i].type = 'group';
	}
	$.fn.zTree.init($("#listTree"), setting_full, listTree);
	ztreeGroupSelectSort();
}

function addGroupToJsonTree(data){
	//添加至group;
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(data && data.length>0){
		for(var i=0; i<data.length;i++){
			//添加至树结构中
			var parentId = data[i].parentID;
			data[i].name = getTreeNodeName(data[i].groupName, default_nodename_length);
			data[i].type = 'group';
			data[i].checked = false;
			data[i].isParent=true;
			var existFlag = false;
			var overlay = getListOverLayByTypeandID(data[i].type, data[i].groupID);
			if(overlay){
				var marker = overlay.marker;
				existFlag=marker.visible;
				//existFlag = true;
			}
			
			//判断操作员是否存在，存在则先将其删除
			var t_treeNode_group = treeObj.getNodesByParam("groupID", data[i].groupID, null);
			if(t_treeNode_group[0]){
				//删除树中的节点
				//treeObj.removeNode(t_treeNode_group[0]);
				//删除地图标注
				mapRemoveListOverlay(t_treeNode_group[0].type, t_treeNode_group[0].groupID);
			}
			if(data[i].pos_x && data[i].pos_y){
				if(existFlag){
					data[i].checked = true;
				}
				var info = getInfoByNode(data[i]);
				mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].groupID, data[i].name, data[i].type, info, data[i],existFlag);
				var btn = $(".diyBtn_"+data[i].groupID+"_"+data[i].type);
				btn.css("display","none");
			}else{
				var btn = $(".diyBtn_"+data[i].groupID+"_"+data[i].type);
				btn.css("display","block");
			}
			//判断是修改还是添加
			//添加根节点
			var t_treeNode = checkTreeNodeExistbyParam("groupID", data[i].groupID);
			if(t_treeNode.length >0){
				//判断parentID是否发生变化
				if(t_treeNode[0].parentID == parentId){
					//已存在，说明是修改
					for(var obj in data[i]){
						eval('t_treeNode[0].'+obj+' = data[i].'+obj);
					}
					treeObj.updateNode(t_treeNode[0]);
					
				}else{
					for(var obj in data[i]){
						eval('t_treeNode[0].'+obj+' = data[i].'+obj);
					}
					var t_node_parent = treeObj.getNodesByParam('groupID', parentId, null);
					treeObj.removeNode(t_treeNode[0]);
					treeObj.addNodes(t_node_parent[0], t_treeNode[0], true);
				}
			}else{	
				if(parentId == p_rootID){
					//不存在，则直接添加
					treeObj.addNodes(null, data[i], true);
					//locationTreeObj.addNodes(null, data[i], true);
				}else{
					var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
					if(treeNode && treeNode.length>0){
						treeObj.addNodes(treeNode[0], data[i], true);
					}
				}
			}
			var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
			
			if(treeNode && treeNode.length>0){
//				data[i].groupName = treeNode[0].name;
//				if(data[i].pos_x && data[i].pos_y){
//					if(existFlag){
//						data[i].checked = true;
//					}
//					var info = getInfoByNode(data[i]);
//					mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].groupID, data[i].name, data[i].type, info, data[i],existFlag);
//				}
				//treeObj.addNodes(treeNode[0], data[i], true);
				//对当前操作员所在的组进行排序
				selectSortSingle(treeNode[0].children);	
			}else{
				selectSortSingle(treeObj.getNodes());
			}
			if(!mapLabelRight){
//				$(".labelRight").css("display","none");
			}
			
			//判断是否有信息窗口打开
			if(curMarker){
				if(curMarker.type==data[i].type&&curMarker.id==data[i].groupID){
					closeDetail();
				}
			}
		}	
	}
}

function checkTreeNodeExistbyParam(key, value){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	var treeNode = treeObj.getNodesByParam(key, value, null);
	return treeNode;
}
function getTreeNodeName(name, showLength){
	var defaultShowLength = 16;
	var newNodeName  = '';
	if(showLength){
		defaultShowLength = showLength;
	}
	if(name && name.length>defaultShowLength){
		newNodeName = '<font title=\"'+name+'\">'+name.substring(0, defaultShowLength)+'...</font>';
	}else{
		newNodeName = '<font title=\"'+name+'\">'+name+'</font>';
	}
	return newNodeName;
}
function addOpertorToTree(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(data && data.length>0){
		for(var i=0; i<data.length;i++){
			var parentId = data[i].groupID;
			data[i].parentID = data[i].groupID;
			delete  data[i].groupID;
			data[i].name = getTreeNodeName(data[i].realName, default_nodename_length);
			data[i].type = 'operator';
			data[i].chkDisabled=true;
			var existFlag = false;
			var overlay = getListOverLayByTypeandID(data[i].type, data[i].operatorID);
			if(overlay){
				var marker = overlay.marker;
				existFlag=marker.visible;
				//existFlag = true;
			}
			//判断操作员是否存在，存在则先将其删除
			var t_treeNode_oper = treeObj.getNodesByParam("operatorID", data[i].operatorID, null);
			if(t_treeNode_oper[0]){
				//删除树中的节点
				treeObj.removeNode(t_treeNode_oper[0]);
				//删除地图标注
				mapRemoveListOverlay(t_treeNode_oper[0].type, t_treeNode_oper[0].operatorID);
			}
			
			var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
			if(treeNode && treeNode.length>0){
				data[i].groupName = treeNode[0].name;
				if(data[i].pos_x && data[i].pos_y){
					data[i].chkDisabled=false;
					if(existFlag){
						data[i].checked = true;
					}
					var info = getInfoByNode(data[i]);
					mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].operatorID, data[i].name, data[i].type, info, data[i],existFlag);
				}
				treeObj.addNodes(treeNode[0], data[i], true);
				//对当前操作员所在的组进行排序
				selectSortSingle(treeNode[0].children);	
			}
			if(!mapLabelRight){
//				$(".labelRight").css("display","none");
			}
			//判断是否有信息窗口打开
			if(curMarker){
				if(curMarker.type==data[i].type&&curMarker.id==data[i].operatorID){
					closeDetail();
				}
			}
		}
	}
}

function addEmployeeToTreeFistLoad(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(data && data.length>0){
		for(var i=0; i<data.length; i++){
			var treeMarker=null;
			var existFlag = false;
			var overlay = getListOverLayByTypeandID('employee', data[i].employeeID);
			if(overlay){
				var marker = overlay.marker;
				existFlag=marker.visible;
				//existFlag=true;
			}
			//标注点先删除后添加
			mapRemoveListOverlay('employee', data[i].employeeID);
			if(data[i].pos_x && data[i].pos_y){	
				data[i].type='employee';
				data[i].name = getTreeNodeName(data[i].realName, default_nodename_length);
				var info = getInfoByNode(data[i]);
				mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].employeeID, data[i].name, 'employee', info, data[i], existFlag);
			}
			var t_treeNode_emp = treeObj.getNodesByParam("employeeID", data[i].employeeID, data[i].groupID);
			if(t_treeNode_emp && t_treeNode_emp.length>0){
				for ( var j = 0; j < t_treeNode_emp.length; j++) {
					treeObj.removeNode(t_treeNode_emp[j]);
				}
			}
			
			var t_employee = data[i];
			t_employee.parentID = t_employee.groupID;
			t_employee.name = getTreeNodeName(t_employee.realName, default_nodename_length);
			t_employee.type = 'employee';
			t_employee.chkDisabled=true;
			var parentId =t_employee.parentID;
			delete t_employee.groupID;
			var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
			//alert(treeNode.length);
			
			if(treeNode && treeNode.length>0){	
				if(t_employee.pos_x && t_employee.pos_y){					
					t_employee.chkDisabled=false;
					if(existFlag){
						t_employee.checked=true;
					}
				}
				treeObj.addNodes(treeNode[0], t_employee, true);
			}
			//判断是否有信息窗口打开
			if(curMarker){
				if(curMarker.type==t_employee.type&&curMarker.id==t_employee.employeeID){
					closeDetail();
				}
			}
		}
	}
}

function addEmployeeToTree(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(data && data.length>0){
		for(var i=0; i<data.length;i++){
			var treeMarker=null;
			var existFlag = false;
			var overlay = getListOverLayByTypeandID('employee', data[i].employeeID);
			if(overlay){
				var marker = overlay.marker;				
				existFlag=marker.visible;
				//existFlag=true;
			}
			//标注点先删除后添加
			mapRemoveListOverlay('employee', data[i].employeeID);
			if(data[i].pos_x && data[i].pos_y){	
				data[i].type='employee';
				data[i].name = getTreeNodeName(data[i].realName, default_nodename_length);
				var info = getInfoByNode(data[i]);
				mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].employeeID, data[i].name, 'employee', info, data[i], existFlag);
			}
			
			//查询改职员属于几个组
			var t_groups = data[i].group;
			if(t_groups && t_groups.length>0){
				var t_treeNode_emp = treeObj.getNodesByParam("employeeID", data[i].employeeID, null);
				for(var l=0;l<t_treeNode_emp.length;l++){
					treeObj.removeNode(t_treeNode_emp[l]);
				}
				
				for(var k=0; k<t_groups.length;k++){
					var t_group = t_groups[k];
					var t_employee = data[i];
					t_employee.parentID = t_group.groupID;
					t_employee.name = getTreeNodeName(t_employee.realName, default_nodename_length);
					t_employee.type = 'employee';
					t_employee.chkDisabled=true;
					t_employee.orderNO = t_group.orderNO;
					var parentId =t_group.groupID;
					
					var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
					
					if(treeNode && treeNode.length>0){
						t_treeNode_emp = treeObj.getNodesByParam("employeeID", t_employee.employeeID, treeNode[0]);
						
						if(t_employee.pos_x && t_employee.pos_y){					
							t_employee.chkDisabled=false;
							if(existFlag){
								t_employee.checked=true;
							}
						}
						treeObj.addNodes(treeNode[0], t_employee, true);
						selectSortSingle(treeNode[0].children);
					}
					if(!mapLabelRight){
//						$(".labelRight").css("display","none");
					}
					//判断是否有信息窗口打开
					if(curMarker){
						if(curMarker.type==t_employee.type&&curMarker.id==t_employee.employeeID){
							closeDetail();
						}
					}
				}
			}
		}
	}
}

function makeVideoGroupJsonTree(data){
	videoTree=data;
	for(var i=0; i<videoTree.length;i++){
		//name属性作为节点名称
		videoTree[i].name = getTreeNodeName(videoTree[i].groupName, default_nodename_length);
		videoTree[i].type = 'videogroup';
		videoTree[i].groupID = videoTree[i].videoGroupID;
	}
	$.fn.zTree.init($("#videoTree"), setting_full, videoTree);
	ztreeGroupSelectSort('video');
}

function addVideoGroupToJsonTree(data){
	//添加至group;
	var treeObj = $.fn.zTree.getZTreeObj("videoTree");
	if(data && data.length>0){
		for(var i=0; i<data.length;i++){
			//添加至数结构中
			var parentId = data[i].parentID;
			data[i].name = getTreeNodeName(data[i].groupName, default_nodename_length);
			data[i].type = 'videogroup';
			data[i].groupID = data[i].videoGroupID;
			data[i].isParent = true;
			//判断是修改还是添加
			//添加根节点
			var t_treeNode = treeObj.getNodesByParam("groupID", data[i].groupID, null);
			if(t_treeNode.length >0){
				//是否parentID已改变
				if(t_treeNode[0].parentID == parentId){
					//已存在，说明是修改
					for(var obj in data[i]){
						eval('t_treeNode[0].'+obj+' = data[i].'+obj);
					}
					treeObj.updateNode(t_treeNode[0]);
				}else{
					for(var obj in data[i]){
						eval('t_treeNode[0].'+obj+' = data[i].'+obj);
					}	
					var t_node_parent = treeObj.getNodesByParam('groupID', parentId, null);
					treeObj.removeNode(t_treeNode[0]);
					treeObj.addNodes(t_node_parent[0], t_treeNode[0], true);
				}
			}else{	
				if(parentId == p_rootID){
					//不存在，则直接添加
					treeObj.addNodes(null, data[i], true);
				}else{
					var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
					if(treeNode && treeNode.length>0){
						treeObj.addNodes(treeNode[0], data[i], true);
					}
				}
			}
			//添加结束后对该节点进行排序
			var t_node_parent = treeObj.getNodesByParam('groupID', parentId, null);
			var nodes=[];
			if(t_node_parent && t_node_parent.length>0){
				nodes = t_node_parent[0].children;
			}else{
				nodes = treeObj.getNodes();
			}
			selectSortSingle(nodes, "video");
		}	
	}
}

function addVideoToTree(data){
//	var treeObj = $.fn.zTree.getZTreeObj("videoTree");
//	if(data && data.length>0){
//		for(var i=0; i<data.length;i++){
//			var parentId = data[i].groupID;
//			data[i].parentID = parentId;
//			delete  data[i].groupID;
//			data[i].name = getTreeNodeName(data[i].videoName, default_nodename_length);
//			data[i].type = 'video';
//			data[i].chkDisabled=true;
//			//判断操作员是否存在，存在则先将其删除
//			var t_treeNode_oper = treeObj.getNodesByParam("videoID", data[i].videoID, null);
//			var existFlag = false;
//			var overlay = getListOverLayByTypeandID(data[i].type, data[i].videoID);
//			if(overlay){
//				var marker = overlay.marker;
//				existFlag=marker.visible;
//				//existFlag = true;
//			}
//			if(t_treeNode_oper[0]){
//				//删除树中的节点
//				treeObj.removeNode(t_treeNode_oper[0]);
//				//删除地图标注
//				mapRemoveListOverlay(t_treeNode_oper[0].type, t_treeNode_oper[0].videoID);
//			}
//			
//			var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
//			if(treeNode && treeNode.length>0){
//				data[i].groupName = treeNode[0].name;
//				
//				if(data[i].pos_x && data[i].pos_y){
//					data[i].chkDisabled=false;
//					if(existFlag){
//						data[i].checked=true;
//					}
//					var info = getInfoByNode(data[i]);
//					mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].videoID, data[i].name, data[i].type, info, data[i], existFlag);
//				}
//				treeObj.addNodes(treeNode[0], data[i], true);
//				selectSortSingle(treeNode[0].children, "video");
//			}
//			//判断是否有信息窗口打开
//			if(curMarker){
//				if(curMarker.type==data[i].type&&curMarker.id==data[i].videoID){
//					closeDetail();
//				}
//			}
//		}
//	}
	var treeObj = $.fn.zTree.getZTreeObj("videoTree");
	if(data && data.length>0){
		for(var i=0; i<data.length;i++){
			var existFlag = false;
			var overlay = getListOverLayByTypeandID('video', data[i].videoID);
			if(overlay){
				var marker = overlay.marker;				
				existFlag=marker.visible;
				//existFlag=true;
			}
			//标注点先删除后添加
			mapRemoveListOverlay('video', data[i].videoID);
			if(data[i].pos_x && data[i].pos_y){	
				data[i].type='video';
				data[i].name = getTreeNodeName(data[i].videoName, default_nodename_length);
				var info = getInfoByNode(data[i]);
				mapAddListOverlayAndInfoWindow(data[i].pos_x, data[i].pos_y, data[i].videoID, data[i].name, 'video', info, data[i], existFlag);
			}
			//查询改视频属于几个组
			var t_groups = data[i].group;
			if(t_groups && t_groups.length>0){
				var t_treeNode_emp = treeObj.getNodesByParam("videoID", data[i].videoID, null);
				for(var l=0;l<t_treeNode_emp.length;l++){
					treeObj.removeNode(t_treeNode_emp[l]);
				}
				for(var k=0; k<t_groups.length;k++){
					var t_group = t_groups[k];
					var t_video = data[i];
					t_video.parentID = t_group.groupID;
					t_video.name = getTreeNodeName(t_video.videoName, default_nodename_length);
					t_video.type = 'video';
					t_video.chkDisabled=true;
					t_video.orderNO = t_group.orderNO;
					var parentId =t_group.groupID;
					var treeNode = treeObj.getNodesByParam("groupID", parentId, null);
					
					if(treeNode && treeNode.length>0){
						t_treeNode_emp = treeObj.getNodesByParam("videoID", t_video.videoID, treeNode[0]);
						
						if(t_video.pos_x && t_video.pos_y){					
							t_video.chkDisabled=false;
							if(existFlag){
								t_video.checked=true;
							}
						}
						treeObj.addNodes(treeNode[0], t_video, true);
						selectSortSingle(treeNode[0].children,"video");
					}
					//判断是否有信息窗口打开
					if(curMarker){
						if(curMarker.type==t_video.type&&curMarker.id==t_video.videoID){
							closeDetail();
						}
					}
				}
			}
		}
	}
}

function deleteMarkFromTreeByGroup(data){
	if(data  && data.length>0){
		for(var i=0; i<data.length;i++){
			var type = data[i].type;
			var id = '';
			if(type == 'group'){
				if(data[i].children && data[i].children.length>0){
					deleteMarkFromTreeByGroup(data[i].children);
				}
			
			}else if(type =='operator' && data[i].pos_x && data[i].pos_y){
				mapRemoveListOverlay(type, data[i].operatorID);
				id = data[i].operatorID;
			}
			else if(type == 'employee' && data[i].pos_x && data[i].pos_y){
				//是否属于多个组
				var treeObj = $.fn.zTree.getZTreeObj("listTree");
				var t_treeNode_emp = treeObj.getNodesByParam("employeeID", data[i].employeeID, null);
				if(t_treeNode_emp && t_treeNode_emp.length==1 
						&& t_treeNode_emp[0].employeeID == data[i].employeeID){
					mapRemoveListOverlay(type, data[i].employeeID);
				}
				id = data[i].employeeID;
			}else if(type =='video' && data[i].pos_x && data[i].pos_y){
				mapRemoveListOverlay(type, data[i].videoID);
				id = data[i].videoID;
			}
			//判断是否有信息窗口打开
			if(curMarker){
				if(curMarker.type==data[i].type&&curMarker.id==id){
					closeDetail();
				}
			}
		}
	}
}

function refreshListTree(){
	//所有通讯录
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	treeObj.refresh();
	//在地图上标注的通讯录
	var locationTreeObj = $.fn.zTree.getZTreeObj("listLoactionTree");
	locationTreeObj.refresh();

}

function MapDataPull(type, data){//调度台推送删除的数据
	eval('data='+data);
	if(type=='group'){
		deleteGroupFromListTree(data.data);
	}else if(type=='operator'){
		deleteOperatorFromListArray(data.data);
	}
	else if(type == 'employee'){
		deleteEmployeeFromListArray(data.data);
	}
	else if(type == 'videogroup'){
		deleteVideoGroupFromVideoArray(data.data);
	}
	else if(type =='video'){
		deleteVideoFromVideoArray(data.data);
	}
	showOrHideTreeTools();
}
function deleteGroupFromListTree(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	for(var i=0; i<data.length;i++){
		var t_treeNode_group = treeObj.getNodesByParam("groupID", data[i].ID, null);
		if(t_treeNode_group.length>0){
			if(t_treeNode_group[0].children && t_treeNode_group[0].children.length>0){				
				deleteMarkFromTreeByGroup(t_treeNode_group[0].children);
			}
			treeObj.removeNode(t_treeNode_group[0]);
		}
	}
}

function deleteOperatorFromListArray(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	for(var i=0; i<data.length;i++){
		var t_treeNode = treeObj.getNodesByParam("operatorID", data[i].ID, null);
		//删除地图标注
		mapRemoveListOverlay('operator', data[i].ID);
		if(t_treeNode.length>0){
			treeObj.removeNode(t_treeNode[0]);
		}
		//判断是否有信息窗口打开
		if(curMarker){
			if(curMarker.id==data[i].ID){
				closeDetail();
			}
		}
	}
}
function deleteEmployeeFromListArray(data){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	for(var i=0; i<data.length;i++){
		var t_treeNode = treeObj.getNodesByParam("employeeID", data[i].ID, null);
		//删除地图标注
		mapRemoveListOverlay('employee', data[i].ID);
		if(t_treeNode.length>0){
			for(var j=0; j<t_treeNode.length; j++){
				treeObj.removeNode(t_treeNode[j]);
			}
		}
		//判断是否有信息窗口打开
		if(curMarker){
			if(curMarker.id==data[i].ID){
				closeDetail();
			}
		}
	}	
}

function deleteVideoGroupFromVideoArray(data){
	var treeObj = $.fn.zTree.getZTreeObj("videoTree");
	for(var i=0; i<data.length;i++){
		var t_treeNode_group = treeObj.getNodesByParam("groupID", data[i].ID, null);
		if(t_treeNode_group.length>0){
			if(t_treeNode_group[0].children && t_treeNode_group[0].children.length>0){				
				deleteMarkFromTreeByGroup(t_treeNode_group[0].children);
			}
			treeObj.removeNode(t_treeNode_group[0]);
		}
	}
}

function deleteVideoFromVideoArray(data){
	var treeObj = $.fn.zTree.getZTreeObj("videoTree");
	for(var i=0; i<data.length;i++){
		var t_treeNode = treeObj.getNodesByParam("videoID", data[i].ID, null);
		//删除地图标注
		mapRemoveListOverlay('video', data[i].ID);
		if(t_treeNode.length>0){
			for(var j=0; j<t_treeNode.length; j++){
				treeObj.removeNode(t_treeNode[j]);
			}
		}
		//判断是否有信息窗口打开
		if(curMarker){
			if(curMarker.id==data[i].ID){
				closeDetail();
			}
		}
	}
}
/**********调度台将移动终端的位置定位信息或状态推送给地理信息网页**********/

function MapInfoPush(type, data){
	try {
		eval('data='+data);
	} catch (e) {}
	if(type=='location'){
		handlePocLoaction(data.data);
	}else if(type == 'status'){
		handlePocStatus(data.data);
	}
}

var poc_deviceCode='';
function pocLocationFilter(node){
	if(node.gpsBH == poc_deviceCode){
		return true;
	}
	return false;
}

function handlePocLoaction(data){
	var treeObj_list = $.fn.zTree.getZTreeObj("listTree");
	var treeObj_video = $.fn.zTree.getZTreeObj("videoTree");	
	for(var i=0;i<data.length;i++){
		//有可能是职员,操作员，摄像头
		var list;
		var list_tmp = [];
		var user=[];
		var video=[];
		poc_deviceCode = data[i].deviceCode;
		if(treeObj_list){
			//操作员, 职员
			user = treeObj_list.getNodesByFilter(pocLocationFilter);
		}
		//摄像头
		if(treeObj_video){
			video = treeObj_video.getNodesByFilter(pocLocationFilter);
		}
		list = list_tmp.concat(user, video);
		var point = bd09_To_gps84(data[i].pos_y,data[i].pos_x);//转换坐标系
		updateUserLocation(list, point.getLon(), point.getLat());
	}
}
function updateUserLocation(user, pos_x, pos_y){
	for(var i=0; i<user.length; i++){	
		//更新树
		var treeObj;
		if(user[i].type == 'operator' || user[i].type == 'employee'){
			treeObj = $.fn.zTree.getZTreeObj("listTree");
		}else if(user[i].type == 'video'){
			treeObj = $.fn.zTree.getZTreeObj("videoTree");	
		}
		user[i].pos_x = pos_x;
		user[i].pos_y = pos_y;
		user[i].checked = true;
		treeObj.updateNode(user[i]);
		treeObj.setChkDisabled(user[i], false);
		var old_overlay;
		var info;
		var id;
		var type;
		//更新标注点位置坐标
		if(user[i].type == 'operator'){	
			type = "operator";
			//old_overlay = getListOverLayByTypeandID(user[i].type, user[i].operatorID);
			info = getInfoByNode(user[i]);
			id=user[i].operatorID;
			//
		}else if(user[i].type == 'employee'){
			type = "employee";
			id=user[i].employeeID;
			info = getInfoByNode(user[i]);
			//old_overlay = getListOverLayByTypeandID(user[i].type, user[i].employeeID);
		}else if(user[i].type == 'video'){
			type = "video";
			//old_overlay = getListOverLayByTypeandID(user[i].type, user[i].videoID);
			info = getInfoByNode(user[i]);
			id=user[i].videoID;
		}
		mapRemoveListOverlay(type, id);
		//添加标注
		mapAddListOverlayAndInfoWindow(user[i].pos_x, user[i].pos_y, id, user[i].name, user[i].type, info, user[i], true);
		removeLocationBtn(user[i]);
	}
}
/*
function updateLocationTreeByLocation(user, pos_x, pos_y)
{
	var locationTree_list = $.fn.zTree.getZTreeObj("listLoactionTree");
	var locationTree_video = $.fn.zTree.getZTreeObj("videoLocationTree");
	var treeObj;
	var nodes;
	var parentNode;
	var node_tmp;
	var type = user.type;
	var id='';
	if(type == 'operator')
	{
		id=user.operatorID;
		treeObj = locationTree_list;
		nodes = locationTree_list.getNodesByParam("operatorID", id, null);
		if(nodes && nodes.length>0)
		{
			nodes[0].pos_x = pos_x;
			nodes[0].pos_y = pos_y;
			treeObj.updateNode(nodes[0]);
			treeObj.checkNode(nodes[0], true, false);
		}else
		{
			node_tmp = {};
			node_tmp.type = 'operator';
			node_tmp.operatorID = user.operatorID;
			node_tmp.realName = user.realName;
			node_tmp.name = user.name;
			node_tmp.parentID = user.parentID;
			node_tmp.groupName =  user.groupName;
			node_tmp.mainTel = user.mainTel;
			node_tmp.viceTel = user.viceTel;
			node_tmp.dutyTel = user.dutyTel;
			node_tmp.pos_x = pos_x;
			node_tmp.pos_y = pos_y;
			node_tmp.orderNO = user.orderNO;
			node_tmp.video = user.video;
			node_tmp.gpsBH = user.gpsBH;
			node_tmp.checked = true;
			parentNode = treeObj.getNodesByParam("groupID", user.parentID, null);
			treeObj.addNodes(parentNode[0], node_tmp);			
		}
	}else if(type == 'employee')
	{
		id=user.employeeID;
		treeObj = locationTree_list;
		nodes = locationTree_list.getNodesByParam("employeeID", id, null);
		if(nodes && nodes.length>0)
		{
			for(var i=0; i<nodes.length; i++)
			{
				nodes[i].pos_x = pos_x;
				nodes[i].pos_y = pos_y;
				treeObj.updateNode(nodes[i]);
				treeObj.checkNode(nodes[i], true, false);
			}
		}else
		{
			if(user.group && user.group.length>0)
			{
				for(var i=0; i<user.group.length;i++)
				{
					var group_location = locationTree_list.getNodesByParam("groupID", user.group[i].groupID, null);
					if(group_location && group_location.length>0)
					{
						node_tmp = {};
						node_tmp.type = 'employee';
						node_tmp.employeeID = user.employeeID;
						node_tmp.realName = user.realName;
						node_tmp.name = user.name;
						node_tmp.parentID = user.parentID;
						node_tmp.groupName =  user.groupName;
						node_tmp.defaultNo = user.defaultNo;
						node_tmp.group = user.group;
						node_tmp.video = user.video;
						node_tmp.pos_x = pos_x;
						node_tmp.pos_y = pos_y;
						node_tmp.gpsBH = user.gpsBH;
						node_tmp.deviceType = user.deviceType;
						node_tmp.checked = true;
						treeObj.addNodes(group_location[0], node_tmp);
					}
				}
			}
		}
	}else if(type == 'video')
	{
		id=user.videoID;
		treeObj = locationTree_video;
		nodes = locationTree_video.getNodesByParam("videoID", id, null);
		if(nodes && nodes.length>0)
		{
			nodes[0].pos_x = pos_x;
			nodes[0].pos_y = pos_y;
			treeObj.updateNode(nodes[i]);
			treeObj.checkNode(nodes[i], true, false);
		}else
		{
			node_tmp = {};
			node_tmp.type = 'video';
			node_tmp.videoID = user.videoID;
			node_tmp.videoName = user.videoName;
			node_tmp.name = user.name;
			node_tmp.parentID = user.parentID;
			node_tmp.groupName =  user.groupName;
			node_tmp.puid = user.puid;
			node_tmp.pos_x = pos_x;
			node_tmp.pos_y = pos_y;
			node_tmp.orderNO = user.orderNO;
			node_tmp.gpsBH = user.gpsBH;
			node_tmp.checked = true;
			parentNode = treeObj.getNodesByParam("groupID", user.parentID, null);
			treeObj.addNodes(parentNode[0], node_tmp);
		}
	}
}
*/
var poc_status_code='';
var poc_userID='';
function pocStatusFilter(node){
	if(node.type == 'operator'){
		if(node.operatorID == poc_userID && 
			(node.mainTel == poc_status_code 
					|| node.viceTel == poc_status_code || node.dutyTel == poc_status_code)){
			return true;
		}
	}else if(node.type == 'employee'){
		if(node.employeeID == poc_userID){
			var len = node.number.length;
			for(var i=0; i<len; i++){
				if(node.number[i].device == poc_status_code){
					return true;
				}
			}
		}
	}else if(node.type == 'video'){
		if(node.videoID == poc_userID && node.puid == poc_status_code){
			return true;
		}
	}
	return false;
}

function handlePocStatus(data){
	var treeObj_list = $.fn.zTree.getZTreeObj("listTree");
	var treeObj_video = $.fn.zTree.getZTreeObj("videoTree");
	for(var i=0;i<data.length;i++){
		//有可能是职员,操作员，摄像头
		var user;
		var localState = data[i].localState;
		poc_userID = data[i].userID;
		poc_status_code = data[i].localDevice;
//		alert(poc_status_code+"::"+localState);
		if(localState == "idle" || localState == "offline"){
			if(poc_userID == callInID && poc_status_code == callInTel){       //呼入调度台的电话空闲时取消动画效果s
				if(interval){                 //清除来电动画的定时器
		    		clearInterval(interval);
		    	}
		    	if(graphic_circle){                //来电动画的图像
		    		graphicLayer.remove(graphic_circle);
		    	}
		    	callInID = "";
		    	callInTel = "";
			}
		}
		if(treeObj_list){
			//操作员, 职员
			user = treeObj_list.getNodesByFilter(pocStatusFilter);
			if(user && user.length>0){
				for(var j=0; j<user.length; j++){
					var overlay = getListOverLayByTypeandID(user[j].type, poc_userID);
					if(overlay){
						var marker  = overlay.marker;
						var icon;
						if(user[j].type == 'operator' || user[j].type == 'employee'){
							if(localState == 'idle'){
								icon = new esri.symbol.PictureMarkerSymbol("img/user_online_24.png", 24, 38);
								
//								if(poc_userID == callInID){       //呼入调度台的电话空闲时取消动画效果s
//									if(interval){                 //清除来电动画的定时器
//							    		clearInterval(interval);
//							    	}
//							    	if(graphic_circle){                //来电动画的图像
//							    		graphicLayer.remove(graphic_circle);
//							    	}
//							    	callInID = "";
//								}
								//marker.setIcon();
							}else if(localState == 'ring'){
								icon = new esri.symbol.PictureMarkerSymbol("img/user_online_24.png", 24, 38);
								//icon=new BMap.Icon("img/user_ring_30.png", new BMap.Size(30, 47));
								//marker.setIcon();
							}else if(localState == 'talk'){
								icon = new esri.symbol.PictureMarkerSymbol("img/user_online_24.png", 24, 38);
								//icon=new BMap.Icon("img/user_talk_30.png", new BMap.Size(30, 47));
								//marker.setIcon();
							}else if(localState == 'offline'){
								icon = new esri.symbol.PictureMarkerSymbol("img/user_offline_24.png", 24, 38);
//								if(poc_userID == callInID){      //呼入调度台的电话空闲时取消动画效果s
//									if(interval){                 //清除来电动画的定时器
//							    		clearInterval(interval);
//							    	}
//							    	if(graphic_circle){                //来电动画的图像
//							    		graphicLayer.remove(graphic_circle);
//							    	}
//							    	callInID = "";
//								}
							}else{
								icon = new esri.symbol.PictureMarkerSymbol("img/user_online_24.png", 24, 38);
							}
					 		var width = icon.width;
					 		var height = icon.height;
					 		//icon.setAnchor(new BMap.Size(width, height));
					 		icon.setOffset(0, height/2);
					 		marker.setSymbol(icon);
						}
					}
				}
			}
		}
		
		//摄像头
		user = null;
		if(treeObj_video){
			user = treeObj_video.getNodesByFilter(pocStatusFilter);
			if(user && user.length>0){
				var overlay = getListOverLayByTypeandID(user[0].type, poc_userID);
				if(overlay){
					var marker  = overlay.marker;
					if(localState == 'idle'){
						marker.setSymbol(new esri.symbol.PictureMarkerSymbol("img/video_online_24.png", 30, 36));
					}else if(localState == 'ring'){
						//marker.setIcon(new BMap.Icon("img/video_ring_30.png", new BMap.Size(30, 36)));
						marker.setSymbol(new esri.symbol.PictureMarkerSymbol("img/video_online_24.png", 30, 36));
					}else if(localState == 'talk'){
						//marker.setIcon(new BMap.Icon("img/video_talk_30.png", new BMap.Size(30, 36)));
						//marker.setIcon(new BMap.Icon("img/video_online_24.png", new BMap.Size(30, 36)));
						marker.setSymbol(new esri.symbol.PictureMarkerSymbol("img/video_online_24.png", 30, 36));
					}else if(localState == 'offline'){
						//marker.setIcon(new BMap.Icon("img/video_offline_24.png", new BMap.Size(30, 36)));
						marker.setSymbol(new esri.symbol.PictureMarkerSymbol("img/video_offline_24.png", 30, 36));
					}else{
						//marker.setIcon(new BMap.Icon("img/video_online_24.png", new BMap.Size(30, 36)));
						marker.setSymbol(new esri.symbol.PictureMarkerSymbol("img/video_online_24.png", 30, 36));
					}
				}
			}
		}
	}
}
function MapSetCenter(strLng, strLat, iZoom){
	var location;
	if(iZoom){	
		default_zoom = iZoom;
	//	map.setZoom(default_zoom);
	}
	if(strLng && strLat){
		default_center_pos_x = parseFloat(strLng);
		default_center_pos_y = parseFloat(strLat);
		
		//var location = new BMap.Point(default_center_pos_x,default_center_pos_y);
		//alert(2);
		//var location = new TLngLat(default_center_pos_x,default_center_pos_y);
		location = new esri.geometry.Point(default_center_pos_x, default_center_pos_y, map.spatialReference);
		//alert(3);
		//map.centerAt(location);
	}
	//var location = new esri.geometry.Point(119.989076, 30.385077, map.spatialReference);
  map.centerAndZoom(location, default_zoom);
}
function MapSetFullScreen(bFullScreen){
	if(bFullScreen==0){
		//标准窗口
		$("#screen_map_full").css('display', 'block');
		$("#screen_map_back").css('display', 'none');
		deleteCookie("full");
		setCookie("full", "0");
	}else if(bFullScreen==1){
		//全屏
		$("#screen_map_full").css('display', 'none');
		$("#screen_map_back").css('display', 'block');
		deleteCookie("full");
		setCookie("full", "1");
	}
}

function MapSetLocationResult(type, data){//
	eval('data='+data);
//	data = JSON.parse(data);
	if(data){
		var user = data;
		if(user && user.result=='error'){
			var overlay = getListOverLayByTypeandID(type, user.ID);
			overlay.isVisible = false;
			
			if(user.pos_x!="" && user.pos_y!=""){//添加标注失败(搜索失败后仍然会添加，所以需要移除)
				mapRemoveListOverlay(type, user.ID);
			}else{                               //移除标注失败
				
			}
		}else if(user && user.result=='succ'){
//			var overlay = getListOverLayByTypeandID(type, users[i].ID);
//			overlay.isVisible = true;
//			if(user.pos_x!="" && user.pos_y!=""){//添加标注成功(搜索添加成功后要改变列表中数据的状态)
//				var id_searli =  user.ID + type + IDMark_SEARLI;
//				if($('.'+id_searli)){
//					$('.'+id_searli).children('.icon01').css('display', 'none');
//					$('.'+id_searli).find('input:checkbox').attr('checked', false);
//					$('.'+id_searli).find('input:checkbox').removeAttr('disabled');
//					showOrHideResTools();
//				}
//			}else{
//				var id_searli =  user.ID + type + IDMark_SEARLI;
//				if($('.'+id_searli)){
//					$('.'+id_searli).children('.icon01').css('display', 'block');
//					if($('.'+id_searli).find('input:checkbox').attr('checked')){
//						$('.'+id_searli).find('input:checkbox').click();
//					}
//					$('.'+id_searli).find('input:checkbox').attr('disabled', true);
//					showOrHideResTools();
//				}
//			}
		}
	}
}


var interval;
var singalFlag = false;
var graphic_circle;
var callInID;
var callInTel;
var callInGroupID;
var sec_node;
function MapSetLocationSelected(type, data){
	try {
		eval("data=" + data);
	} catch (e) {
		// TODO: handle exception
	}
	var tel = "";
	var id = ""; 
	if(data){
		tel = data.deviceCode;
		id = data.ID;
		callInID = id;
		callInTel = tel;
		callInGroupID = id;
	}
	//判断是否存在改用户，存在则在地图上显示并居中
	var treeObj;
	var user;
	
	if(type == 'operator' ){
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		user = treeObj.getNodesByParam('operatorID', id, null);
	}else if(type == 'employee'){
		treeObj = $.fn.zTree.getZTreeObj("listTree");
		user = treeObj.getNodesByParam('employeeID', id, null);
	}else if(type == 'video'){
		treeObj = $.fn.zTree.getZTreeObj("videoTree");
		user = treeObj.getNodesByParam('videoID', id, null);
	}

	if(user[0]){
		if(user[0].pos_x && user[0].pos_y){			
			for ( var i = 0; i < user.length; i++) {
				treeObj.checkNode(user[i], true, true, false);
			}
			makeMarkerToCenter(user[0]);
		}else{
			if(user[0].type == "employee"){
				//var pNode = treeObj.getNodesByParam('groupID',user[0].groupID,null);
				var groupInfo = user[0].group;
				var nodes = [];
				for(var i=0; i<groupInfo.length; i++){
					var pNode = treeObj.getNodesByParam('groupID',groupInfo[i].groupID,null);
					if(pNode[0]){
						nodes.push(pNode[0]);
					}
				}
				sec_node = "";
				gerEmployeeGroupWithPosition(nodes);
				if(sec_node){
					treeObj.checkNode(sec_node, true, false, false);
					makeMarkerToCenter(sec_node);
					callInGroupID = sec_node.groupID;
				}
			}else if(user[0].type == "operator"){
				var pNode = treeObj.getNodesByParam('groupID',user[0].parentID,null);
				sec_node = "";
				getOperatorGroupWithPosition(pNode[0]);
				if(sec_node){
					treeObj.checkNode(sec_node, true, false, false);
					makeMarkerToCenter(sec_node);
					callInGroupID = sec_node.groupID;
				}
			}
		}
	}
}

function makeMarkerToCenter(node){
		var info;
		var id;
		var type;
		//更新标注点位置坐标
		if(node.type == 'operator'){	
			type = "operator";
			info = getInfoByNode(node);
			id=node.operatorID;
			//
		}else if(node.type == 'employee'){
			type = "employee";
			id=node.employeeID;
			info = getInfoByNode(node);
		}else if(node.type == 'video'){
			type = "video";
			info = getInfoByNode(node);
			id=node.videoID;
		}else if(node.type == 'group'){
			type = "group";
			info = getInfoByNode(node);
			id=node.groupID;
		}
		//添加标注
		//判断标注点是否已显示，已显示则居中，未显示则添加到地图上
		var temp = getListOverLayByTypeandID(type , id);
		if(temp){
			if(!temp.isVisible){
				temp.isVisible = true;
				temp.marker.show();
			}
		}else{
			mapAddListOverlayAndInfoWindow(node.pos_x, node.pos_y, id, node.name, node.type, info, node, true);
		}
		
		overlaysByLocSlct.push(temp);
		map.setZoom(12);
		mapPanToSelectedMarker(type, id);
		
		if(interval){                 //清除来电动画的定时器
    		clearInterval(interval);
    	}
    	if(graphic_circle){                //清除来电动画的图像
    		graphicLayer.remove(graphic_circle);
    	}
		//alert(map);
		//[-117.15,32.71],
		//alert(user[0].pos_x+":"+user[0].pos_y);
		var point = new esri.geometry.Point(parseFloat(node.pos_x), parseFloat(node.pos_y), map.spatialReference);
		
		var radius = map.extent.getWidth()/50;
		var circle = null;
		
		var circle = new esri.geometry.Circle(point,{
			geodesic:true,
			radius:radius
		});
		//}catch(e){alert(e);}
		var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
  	          new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
  	    	  new esri.Color([255,48,48]), 2), new esri.Color([255,182,193, 0.25]));
		//graphic_circle = new esri.Graphic(circle,symbol);
		//graphicLayer.add(graphic_circle);
		//alert(graphic_circle);
		//interval = setInterval(singal,80);
	
	    
		var symbol = new esri.symbol.PictureMarkerSymbol("img/callin.gif", 200, 200);
		graphic_circle = new esri.Graphic(point, symbol);
		graphicLayer.add(graphic_circle);
		graphic_circle.show();
		
//		for ( var i = 0; i < user.length; i++) {
//			treeObj.checkNode(user[i], true, true, false);
//		}
	
}

function getOperatorGroupWithPosition(node){
	var treeObj = $.fn.zTree.getZTreeObj("listTree");
	if(node.pos_x && node.pos_y){
		sec_node = node;
		return;
	}else{
		var pNode = treeObj.getNodesByParam('groupID',node.parentID,null);
		if(pNode[0]){
			getOperatorGroupWithPosition(pNode[0]);
		}
	}
}

function gerEmployeeGroupWithPosition(nodes){
	if(nodes.length > 0){
		var treeObj = $.fn.zTree.getZTreeObj("listTree");
		var nodes_new =[];
		for(var i=0; i<nodes.length; i++){
			if(nodes[i].pos_x && nodes[i].pos_y){
				sec_node = nodes[i];
				return;
			}else{
				var pNode = treeObj.getNodesByParam('groupID',nodes[i].parentID,null);
				if(pNode[0]){
					nodes_new.push(pNode[0]);
				}
			}
		}
		gerEmployeeGroupWithPosition(nodes_new);
	}
}

function singal(){
		if(graphic_circle){
			graphicLayer.remove(graphic_circle);
			var center_point = graphic_circle.geometry.center;
			
			var radius = parseInt(graphic_circle.geometry.radius)+50;
			if(radius > map.extent.getWidth()/14){
				radius = map.extent.getWidth()/50;
			}
			makeCircle(radius,center_point);
			graphicLayer.add(graphic_circle);
		}
		
		/*
		if(singalFlag){		
			graphic_circle.show();
			singalFlag = false;
		}else{
			graphic_circle.hide();
			singalFlag = true;
		}
		*/
}
function makeCircle(radius, point){
	var circle = new esri.geometry.Circle({
			center:point,
			geodesic:false,
			radius:radius
		});
		var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
  	          new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
  	    	  new esri.Color([255,48,48]), 2), new esri.Color([255,182,193, 0.25]));
		graphic_circle = new esri.Graphic(circle,symbol);
}
function mapClearDrawByLocSlct(treeObj){//清除移动终端出现在地图上的标注
	for (var i = overlaysByLocSlct.length - 1; i >= 0; i--) {
        overlaysByLocSlct[i].hide();
//        removePointFromMap(overlaysByLocSlct[i].point, overlaysByLocSlct[i].type, overlaysByLocSlct[i].status, overlaysByLocSlct[i].label, false, overlaysByLocSlct[i].marker);
        overlaysByLocSlct[i].isVisible = false;
        //查看用户是否在列表中被勾选，选中则去除勾选
        if(treeObj){
        	var user_temp = null;
        	var id = overlaysByLocSlct[i].id;
        	var type = overlaysByLocSlct[i].type;
        	if(type == "operator"){
        		user_temp = treeObj.getNodesByParam('operatorID', id, null);
        	}else if(type == "employee"){
        		user_temp = treeObj.getNodesByParam('employeeID', id, null);
        	}else if(type == "video"){
        		user_temp = treeObj.getNodesByParam('videoID', id, null);
        	}
        	if(user_temp != null){
        		for ( var j = 0; j < user_temp.length; j++) {
        			treeObj.checkNode(user_temp[i], false, true, false);
        		}
        	}
        	
        }
    }
	overlaysByLocSlct.splice(0, overlaysByLocSlct.length);
}

