var IDMark_Switch = "_switch",
IDMark_Icon = "_ico",
IDMark_Span = "_span",
IDMark_Input = "_input",
IDMark_Check = "_check",
IDMark_Edit = "_edit",
IDMark_Remove = "_remove",
IDMark_Ul = "_ul",
IDMark_A = "_a",
spaceWidth=7;
function locationOnMap(treeId, treeNode){
	var aObj = $("#" + treeNode.tId + IDMark_A);
	var switchObj = $("#" + treeNode.tId + IDMark_Switch);
	var icoObj = $("#" + treeNode.tId + IDMark_Icon);
	var checkObj = $("#" + treeNode.tId + IDMark_Check);
	switchObj.remove();
	checkObj.remove();
	icoObj.before(switchObj);
	icoObj.before(checkObj);
	if (treeNode.level > 0) {
		var diy_pad = switchObj.prev('span.diy_padding');
		if(diy_pad && diy_pad.length>0)
		{
			return;
		}
		var spaceStr = "<span class='diy_padding' style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
		switchObj.before(spaceStr);
	}

	var treeObj;
	if(treeNode.type == 'operator'){
		if(mapLabelRight){
			var editStr="";
			if((treeNode.pos_x==null || treeNode.pos_x==''||treeNode.pos_y==null || treeNode.pos_y=='')){
				editStr = "<span  style='' class='labelRight demoIcon diyBtn_" +treeNode.operatorID+"_"+treeNode.type+ "'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}else{
				//editStr = "<span class='demoIcon' style='display:none;' id='diyBtn_" +treeNode.operatorID+"_"+treeNode.type+ "'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}
			aObj.append(editStr);
			aObj.attr('title', treeNode.name.substring(treeNode.name.indexOf("\">") + 2, treeNode.name.indexOf("</font>")));
			var btn = $(".diyBtn_"+treeNode.operatorID+"_"+treeNode.type);
			if (btn) {
				btn.bind("click", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
				btn.bind("mousedown", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
			}
		
			aObj.draggable({
				appendTo: "body",
				cursorAt: { cursor: 'crosshair', top: -5, left: -5 },
				helper: function(event) {
					//var txt = $(event.target).text();
					return $('<div class="ui-widget-header">' + this.title + '</div>');
				},
				drag: function(event) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
			    	var nodes =  treeObj.getSelectedNodes();
			    	if (nodes && nodes.length > 0) {
			    		var selectName = nodes[0].name;
			    		name = selectName.substring(selectName.indexOf("\">") + 2, selectName.indexOf("</font>"))+'标注';
			    		if (name == $(event.target).text()) {
			    			setDrawTypeToMark();
			    		} else {
			    			return false;
			    		}
			    	} else {
			    		return false;
			    	}
				},
				start: function(event, ui) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
					aObj.css("cursor", "move");
				},
				stop: function(event, ui) {
					setDrawTypeToHander();
					aObj.css("cursor", "pointer");
				}
			});
		}
	}else if(treeNode.type == 'employee'){
		if(mapLabelRight){
			var editStr="";
			if((treeNode.pos_x==null || treeNode.pos_x==''||treeNode.pos_y==null || treeNode.pos_y=='')){
				editStr = "<span class='labelRight demoIcon diyBtn_" +treeNode.employeeID+"_"+treeNode.type+ "' style='float:right;padding:5px 10px 0 0;'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";			
			}else{
				//editStr = "<span class='demoIcon diyBtn_" +treeNode.employeeID+"_"+treeNode.type+ "' style='display:none;float:right;padding:5px 10px 0 0;'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";		
			}
			aObj.append(editStr);
			aObj.attr('title', treeNode.name.substring(treeNode.name.indexOf("\">") + 2, treeNode.name.indexOf("</font>")));
			var btn = $(".diyBtn_"+treeNode.employeeID+"_"+treeNode.type);
			if(btn){ 
				btn.bind("click", function(){
					//添加地图标注模式
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
				btn.bind("mousedown", function(){
					//添加地图标注模式
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
			}
		
		
			aObj.draggable({
				appendTo: "body",
				cursorAt: { cursor: 'crosshair', top: -5, left: -5 },
				helper: function(event) {
					//var txt = $(event.target).text();
					return $('<div class="ui-widget-header">' + this.title + '</div>');
				},
				drag: function(event) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
			    	var nodes =  treeObj.getSelectedNodes();
			    	if (nodes && nodes.length > 0) {
			    		var selectName = nodes[0].name;
			    		name = selectName.substring(selectName.indexOf("\">") + 2, selectName.indexOf("</font>"))+'标注';
			    		if (name == $(event.target).text()) {
			    			setDrawTypeToMark();
			    		} else {
			    			return false;
			    		}
			    	} else {
			    		return false;
			    	}
				},
				start: function(event, ui) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
					aObj.css("cursor", "move");
				},
				stop: function(event, ui) {
					setDrawTypeToHander();
					aObj.css("cursor", "pointer");
				}
			});
		}
	}else if(treeNode.type == 'group'){
		if(mapLabelRight){
			var editStr="";
			if((treeNode.pos_x==null || treeNode.pos_x==''||treeNode.pos_y==null || treeNode.pos_y=='')){
				editStr = "<span  style='' class='labelRight demoIcon diyBtn_" +treeNode.groupID+"_"+treeNode.type+ "'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}else{
				editStr = "<span  style='display:none;' class='labelRight demoIcon diyBtn_" +treeNode.groupID+"_"+treeNode.type+ "'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
				//editStr = "<span class='demoIcon' style='display:none;' id='diyBtn_" +treeNode.groupID+"_"+treeNode.type+ "'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}
			aObj.append(editStr);
			aObj.attr('title', treeNode.name.substring(treeNode.name.indexOf("\">") + 2, treeNode.name.indexOf("</font>")));
			var btn = $(".diyBtn_"+treeNode.groupID+"_"+treeNode.type);
			if (btn) {
				btn.bind("click", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
				btn.bind("mousedown", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
				});
			}
		
			aObj.draggable({
				appendTo: "body",
				cursorAt: { cursor: 'crosshair', top: -5, left: -5 },
				helper: function(event) {
					//var txt = $(event.target).text();
					return $('<div class="ui-widget-header">' + this.title + '</div>');
				},
				drag: function(event) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
			    	var nodes =  treeObj.getSelectedNodes();
			    	if (nodes && nodes.length > 0) {
			    		var selectName = nodes[0].name;
			    		name = selectName.substring(selectName.indexOf("\">") + 2, selectName.indexOf("</font>"))+'标注';
			    		if (name == $(event.target).text()) {
			    			setDrawTypeToMark();
			    		} else {
			    			return false;
			    		}
			    	} else {
			    		return false;
			    	}
				},
				start: function(event, ui) {
					var treeObj = $.fn.zTree.getZTreeObj("listTree");
					treeObj.selectNode(treeNode);
					aObj.css("cursor", "move");
				},
				stop: function(event, ui) {
					setDrawTypeToHander();
					aObj.css("cursor", "pointer");
				}
			});
		}
	}else if(treeNode.type == 'video'){
		//alert(treeNode.name);
		if(mapLabelRight){
			var editStr="";
			if(treeNode.pos_x==null || treeNode.pos_x==''||treeNode.pos_y==null || treeNode.pos_y==''){
				editStr = "<span  class='labelRight demoIcon diyBtn_" +treeNode.videoID+"_"+treeNode.type+ "' style=''  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}else{
				//editStr = "<span class='demoIcon' id='diyBtn_" +treeNode.videoID+"_"+treeNode.type+ "' style='display:none;'  onfocus='this.blur();'><span class='button icon01'>标注</span></span>";
			}
			aObj.append(editStr);
			aObj.attr('title', treeNode.name.substring(treeNode.name.indexOf("\">") + 2, treeNode.name.indexOf("</font>")));
			var btn = $(".diyBtn_"+treeNode.videoID+"_"+treeNode.type);
			if (btn) {
				btn.bind("click", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("videoTree");
					treeObj.selectNode(treeNode);
				});	
				btn.bind("mousedown", function(){
					//添加地图标注
					setDrawTypeToMark();
					treeObj = $.fn.zTree.getZTreeObj("videoTree");
					treeObj.selectNode(treeNode);
				});	
			}
			try {
				aObj.progressbar('destroy');
			} catch (e) {}
		
			aObj.draggable({
				appendTo: "body",
				cursorAt: { cursor: 'crosshair', top: -5, left: -5 },
				helper: function(event) {
					var txt = $(event.target).text();
					return $('<div class="ui-widget-header">' + this.title + '</div>');
				},
				drag: function(event) {
					var treeObj = $.fn.zTree.getZTreeObj("videoTree");
			    	var nodes =  treeObj.getSelectedNodes();
			    	if (nodes && nodes.length > 0) {
			    		var selectName = nodes[0].name;
			    		name = selectName.substring(selectName.indexOf("\">") + 2, selectName.indexOf("</font>"))+'标注';
			    		if (name == $(event.target).text()) {
			    			setDrawTypeToMark();
			    			return true;
			    		} else {
			    			return false;
			    		}
			    	} else {
			    		return false;
			    	}
				},
				start: function(event, ui) {
					var treeObj = $.fn.zTree.getZTreeObj("videoTree");
					treeObj.selectNode(treeNode);
					
					aObj.css("cursor", "move");
				},
				stop: function(event, ui) {
					setDrawTypeToHander();
					aObj.css("cursor", "pointer");
				}
			});
		}
	}
}
/*
function addPaddingDom(treeId, treeNode)
{
	var switchObj = $("#" + treeNode.tId + IDMark_Switch);
	var icoObj = $("#" + treeNode.tId + IDMark_Icon);
	var checkObj = $("#" + treeNode.tId + IDMark_Check);
	switchObj.remove();
	checkObj.remove();
	icoObj.before(switchObj);
	icoObj.before(checkObj);
	if (treeNode.level > 0) {
		var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
		switchObj.before(spaceStr);
	}
}
*/
function removeLocationBtn(node){
	var btn;
	if(node){
		if(node.type == 'operator'){
			btn = $(".diyBtn_"+node.operatorID+"_"+node.type);
		}else if(node.type == 'employee'){
			btn = $(".diyBtn_"+node.employeeID+"_"+node.type);
		}else if(node.type == 'video'){
			btn = $(".diyBtn_"+node.videoID+"_"+node.type);
		}
	}
	if(btn){
		btn.css('display', 'none');
	}
}
/*
function addLocationBtn(type, id){
	var btn;
	if(type!=null && type !='' && id!=null&& id!=''){
		if(type == 'employee'){
			btn = $(".diyBtn_"+id+"_"+type);
			
		}else{
			btn = $("#diyBtn_"+id+"_"+type);
		}
	}
	if(btn){
		btn.css('display', 'inline');
	}
}
*/