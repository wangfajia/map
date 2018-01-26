var group = {
	"count" : "5",
	"data" : [ {
		"groupID" : "10000",
		"fullName" : "呼叫中心",
		"groupName" : "呼叫中心",
		"parentID" : "",
		"groupType" : "organ",
		"orderNO" : "3",
		"pos_x" : "119.959076",
		"pos_y" : "30.355077"
	}, {
		"groupID" : "10001",
		"fullName" : "调度组",
		"groupName" : "调度组",
		"parentID" : "10000",
		"groupType" : "dispatchgroup",
		"orderNO" : "0.6",
		"pos_x" : "",
		"pos_y" : ""
	}, {
		"groupID" : "10002",
		"fullName" : "普通部门01",
		"groupName" : "普通部门01",
		"parentID" : "10000",
		"groupType" : "organ",
		"orderNO" : "0.1",
		"pos_x" : "",
		"pos_y" : ""
	}, {
		"groupID" : "100021",
		"fullName" : "组",
		"groupName" : "组",
		"parentID" : "10002",
		"groupType" : "organ",
		"orderNO" : "0.01",
		"pos_x" : "",
		"pos_y" : ""
	}, {
		"groupID" : "10003",
		"fullName" : "普通部门02",
		"groupName" : "普通部门02",
		"parentID" : "10000",
		"groupType" : "organ",
		"orderNO" : "0.2",
		"pos_x" : "",
		"pos_y" : ""
	},{
		"groupID":"8e65419e629c5d1394cc4b83a03fd6fc",
		"name":"TS",
		"groupName":"TS",
		"parentID":"10000",
		"groupType":"Organ",
		"orderNO":"0.001",
		"pos_x" : "119.889076",
		"pos_y" : "30.485077"
	}]
};

groupUpdata = {
		"count" : "0",	
		"data" : [ {
			"groupID" : "10002",
			"fullName" : "普通部门01",
			"groupName" : "普通部门01",
			"parentID" : "10000",
			"groupType" : "organ",
			"orderNO" : "0.1",
			"pos_x" : "119.949076",
			"pos_y" : "30.455077"
		} ]
};

groupDelete = {
		"count" : "0",	
		"data" : [ {
			"groupID" : "10002",
			"fullName" : "普通部门01",
			"groupName" : "普通部门01",
			"parentID" : "10000",
			"groupType" : "organ",
			"orderNO" : "0.1",
			"pos_x" : "",
			"pos_y" : ""
		} ]
};

/*var group1Name = '组3';
var group1 = {
	"count" : "1",
	"data" : [ {
		"groupID" : "9", // 组ID
		"fullName" : "fullName", // 组全称
		"groupName" : group1Name, // 组名称
		"parentID" : "0", // 上级组ID
		"groupType" : "groupType", // 组类型，Organ:普通，DispatchGroup:调度台组
		"orderNO" : "orderNO" // 排序序号
	} ]
};*/
var operator = {
	"count" : "2",
	"data" : [ {
		"operatorID" : "U20001",
		"realName" : "操作员01",
		"groupID" : "10001",
		"mainTel" : "9000",
		"viceTel" : "9001",
		"dutyTel" : "",
		"pos_x" : "119.989076",
		"pos_y" : "30.385077",
		"gpsBH" : "9000",
		"orderNO" : "2",
		"video" : [ {
			"videoID" : "V10001"
		}, {
			"videoID" : "V10002"
		} ]
	}, {
		"operatorID" : "U20002",
		"realName" : "操作员02",
		"groupID" : "10001",
		"mainTel" : "9002",
		"viceTel" : "9003",
		"dutyTel" : "",
		"pos_x" : "",
		"pos_y" : "",
		"gpsBH" : "9002",
		"orderNO" : "1"
	},{
		"operatorID" : "U20003",
		"realName" : "操作员03",
		"groupID" : "10001",
		"mainTel" : "9000",
		"viceTel" : "9001",
		"dutyTel" : "",
		"pos_x" : "119.989076",
		"pos_y" : "30.385077",
		"gpsBH" : "9000",
		"orderNO" : "2",
		"video" : [ {
			"videoID" : "V10001"
		}, {
			"videoID" : "V10002"
		} ]
	} ]
};
var operator1 = {
	"count" : "1",
	"data" : [ {
		"operatorID" : "3", // 操作员ID
		"realName" : "操作员3", // 操作员名称
		"groupID" : "1", // 所属调度组ID
		"mainTel" : "tel", // 左手柄号码
		"viceTel" : "tel", // 右手柄号码
		"dutyTel" : "tel", // 值班号码
		"pos_x" : "", // 经度
		"pos_y" : "", // 纬度
		"orderNO" : "orderNO", // 排序序号
		"video" : [ {
			"videoID" : "id"
		}, // 关联视频ID
				{
					"videoID" : "id"
				} ]
	} ]
};
var employee = {
	"count" : "2",
	"data" : [ {
		"employeeID" : "U10001",
		"realName" : "职员01",
		"deviceType" : "poc",
		"pos_x" : "",
		"pos_y" : "",
		"gpsBH" : "1003",
		"number":[{
			"device":"10101",
			"deviceType":"office"
		},
		{
			"device":"10102",
			"deviceType":"poc"
		}],
		"group" : [ {
			"groupID" : "10002",
			"orderNO" : "1"
		}, {
			"groupID" : "10003",
			"orderNO" : "2"
		} ],
		"video" : [ {
			"videoID" : "V10003"
		}, {
			"videoID" : "V10004"
		} ]
	}, {
		"employeeID" : "U10002",
		"realName" : "职员02",
		"deviceType" : "poc",
		"pos_x" : "119.989066",
		"pos_y" : "30.385066",
		"gpsBH" : "1003",
		"group" : [ {
			"groupID" : "10002",
			"orderNO" : "2"
		} ],
		"number":[{
			"device":"10101",
			"deviceType":"office"
		}]
	} ]
};

var employee_temp ={"count":846, "data":[{"employeeID":"123123","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
              					{"employeeID":"123124","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123125","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123126","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123127","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123128","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123129","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123130","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123131","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123132","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123133","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123134","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123135","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123136","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123137","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123138","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123139","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123140","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123141","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123142","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123143","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123144","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123145","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123146","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123147","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123148","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123149","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123150","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123151","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123152","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123153","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123154","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123155","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123156","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123157","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123158","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123159","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123160","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123161","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123162","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123163","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123164","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123165","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123166","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123167","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123168","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123169","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123170","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123171","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123172","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123173","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123174","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123175","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123176","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123177","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123178","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123179","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123180","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123181","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123182","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123183","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123184","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123185","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123186","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123187","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123188","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123189","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123190","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123191","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123192","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123193","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123194","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123195","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123196","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123197","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123198","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123199","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123200","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123201","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123202","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123203","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123204","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123205","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123206","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123207","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123208","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123209","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123210","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123211","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123212","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123213","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123214","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123215","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123216","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123217","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123218","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123219","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123220","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123221","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123222","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123223","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123224","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123225","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123226","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123227","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123228","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123229","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123230","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123231","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123232","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123233","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123234","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123235","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123236","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123237","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123238","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123239","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123240","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123241","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123242","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123243","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123244","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123245","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123246","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123247","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123248","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123249","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123250","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123251","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123252","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123253","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123254","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123255","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123256","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123257","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123258","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123259","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123260","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123261","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123262","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123263","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123264","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123265","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123266","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123267","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123268","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123269","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123270","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123271","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123272","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123273","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123274","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123275","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123276","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123277","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123278","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123279","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123280","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123281","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123282","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123283","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123284","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123285","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123286","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123287","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123288","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123289","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123290","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123291","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123292","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123293","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123294","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123295","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123296","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123297","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123298","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123299","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123300","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123301","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123302","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123303","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123304","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123305","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123306","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123307","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123308","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123309","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123310","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123311","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123312","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123313","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123314","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123315","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123316","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123317","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123318","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123319","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123320","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123321","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123322","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123323","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123324","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123325","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123326","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123327","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123328","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123329","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123330","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123331","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123332","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123333","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123334","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123335","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123336","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123337","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123338","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123339","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123340","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123341","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123342","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123343","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123344","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123345","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123346","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123347","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123348","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123349","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123350","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123351","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123352","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123353","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123354","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123355","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123356","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123357","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123358","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123359","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123360","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123361","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123362","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123363","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123364","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123365","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123366","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123367","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123368","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123369","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123370","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123371","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123372","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123373","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123374","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123375","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123376","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123377","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123378","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123379","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123380","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123381","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123382","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123383","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123384","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123385","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123386","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123387","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123388","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123389","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123390","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123391","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123392","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123393","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123394","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123395","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123396","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123397","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123398","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123399","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123400","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123401","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123402","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123403","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123404","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123405","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123406","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123407","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123408","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123409","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123410","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123411","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123412","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123413","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123414","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123415","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123416","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123417","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123418","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123419","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123420","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123421","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123422","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123423","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123424","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123425","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123426","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123427","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123428","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123429","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123430","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123431","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123432","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123433","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123434","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123435","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123436","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123437","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123438","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123439","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123440","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123441","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123442","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123443","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123444","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123445","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123446","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123447","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123448","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123449","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123450","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123451","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123452","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123453","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123454","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123455","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123456","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123457","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123458","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123459","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123460","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123461","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123462","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123463","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123464","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123465","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123466","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123467","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123468","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123469","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123470","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123471","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123472","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123473","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123474","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123475","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123476","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123477","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123478","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123479","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123480","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123481","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123482","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123483","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123484","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123485","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123486","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123487","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123488","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123489","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123490","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123491","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123492","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123493","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123494","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123495","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123496","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123497","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123498","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123499","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123500","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123501","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123502","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123503","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123504","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123505","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123506","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123507","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123508","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123509","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123510","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123511","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123512","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123513","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123514","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123515","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123516","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123517","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123518","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123519","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123520","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123521","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123522","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123523","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123524","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123525","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123526","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123527","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123528","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123529","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123530","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123531","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123532","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123533","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123534","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123535","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123536","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123537","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123538","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123539","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123540","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123541","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123542","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123543","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123544","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123545","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123546","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123547","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123548","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123549","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123550","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123551","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123552","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123553","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123554","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123555","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123556","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123557","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123558","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123559","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123560","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123561","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123562","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123563","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123564","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123565","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123566","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123567","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123568","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123569","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123570","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123571","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123572","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123573","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123574","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123575","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123576","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123577","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123578","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123579","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123580","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123581","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123582","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123583","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123584","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123585","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123586","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123587","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123588","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123589","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123590","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123591","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123592","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123593","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123594","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123595","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123596","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123597","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123598","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123599","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123600","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123601","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123602","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123603","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123604","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123605","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123606","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123607","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123608","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123609","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123610","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123611","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123612","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123613","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123614","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123615","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123616","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123617","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123618","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123619","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123620","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123621","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123622","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123623","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123624","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123625","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123626","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123627","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123628","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123629","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123630","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123631","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123632","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123633","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123634","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123635","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123636","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123637","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123638","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123639","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123640","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123641","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123642","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123643","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123644","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123645","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123646","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123647","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123648","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123649","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123650","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123651","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123652","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123653","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123654","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123655","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123656","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123657","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123658","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123659","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123660","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123661","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123662","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123663","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123664","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123665","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123666","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123667","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123668","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123669","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123670","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123671","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123672","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123673","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123674","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123675","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123676","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123677","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123678","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123679","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123680","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123681","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123682","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123683","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123684","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123685","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123686","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123687","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123688","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123689","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123690","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123691","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123692","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123693","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123694","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123695","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123696","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123697","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123698","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123699","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123700","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123701","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123702","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123703","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123704","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123705","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123706","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123707","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123708","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123709","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123710","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123711","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123712","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123713","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123714","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123715","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123716","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123717","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123718","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123719","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123720","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123721","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123722","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123723","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123724","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123725","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123726","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123727","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123728","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123729","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123730","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123731","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123732","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123733","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123734","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123735","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123736","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123737","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123738","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123739","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123740","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123741","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123742","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123743","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123744","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123745","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123746","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123747","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123748","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123749","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123750","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123751","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123752","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123753","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123754","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123755","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123756","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123757","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123758","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123759","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123760","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123761","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123762","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123763","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123764","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123765","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123766","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123767","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123768","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123769","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123770","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123771","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123772","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123773","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123774","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123775","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123776","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123777","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123778","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123779","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123780","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123781","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123782","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123783","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123784","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123785","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123786","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123787","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123788","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123789","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123790","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123791","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123792","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123793","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123794","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123795","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123796","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123797","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123798","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123799","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123800","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123801","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123802","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123803","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123804","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123805","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123806","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123807","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123808","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123809","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123810","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123811","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123812","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123813","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123814","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123815","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123816","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123817","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123818","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123819","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123820","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123821","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123822","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123823","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123824","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123825","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123826","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123827","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123828","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123829","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123830","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123831","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123832","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123833","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123834","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123835","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123836","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123837","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123838","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123839","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123840","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123841","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123842","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123843","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123844","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123845","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123846","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123847","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123848","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123849","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123850","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123851","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123852","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123853","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123854","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123855","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123856","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123857","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123858","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123859","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123860","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123861","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123862","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123863","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123864","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123865","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123866","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123867","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123868","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123869","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123870","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123871","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123872","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123873","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123874","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123875","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123876","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123877","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123878","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123879","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123880","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123881","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123882","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123883","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123884","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123885","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123886","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123887","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123888","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123889","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123890","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123891","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123892","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123893","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123894","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123895","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123896","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123897","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123898","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123899","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123900","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123901","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123902","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123903","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123904","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123905","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123906","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123907","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123908","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123909","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123910","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123911","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123912","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123913","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123914","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123915","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123916","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123917","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123918","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123919","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123920","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123921","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123922","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123923","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123924","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123925","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123926","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123927","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123928","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123929","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123930","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123931","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123932","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123933","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123934","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123935","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123936","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123937","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123938","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123939","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123940","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123941","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123942","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123943","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123944","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123945","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123946","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123947","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123948","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123949","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123950","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123951","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123952","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123953","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123954","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123955","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123956","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123957","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123958","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123959","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123960","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123961","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123962","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123963","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123964","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123965","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123966","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123967","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},
            					{"employeeID":"123968","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]},

            					{"employeeID":"sdfs","name":"24104","defaultNo":"24104","deviceType":"pocgroup","pos_x":"120.200933","pos_y":"30.225437","gpsBH":"","group":[{"groupID":"8e65419e629c5d1394cc4b83a03fd6fc","orderNO":"0.05"}],"video":[]} 
            					]};
var employee1 = {
	"count" : "1",
	"data" : [ {
		"employeeID" : "3", // 职员ID
		"realName" : "职员3", // 真实姓名
		"defaultNo" : "defaultNo", // 默认号码
		"pos_x" : "", // 经度
		"pos_y" : "", // 纬度
		"group" : [ {
			"groupID" : "3", // 所属组ID
			"orderNO" : "orderNO" // 所在组的排序序号
		}, {
			"groupID" : "2", // 所属组ID
			"orderNO" : "orderNO" // 所在组的排序序号
		} ],
		"video" : [ {
			"videoID" : "id"
		}, // 关联视频ID
				{
					"videoID" : "id"
				} ]
	} ]
};
var poc1 = {
	"data" : [ {
		"name" : "poc1", // 名称
		"deviceCode" : "1003", // 号码
		"pos_x" : "120.673589", // 经度
		"pos_y" : "30.351674", // 纬度
		"time" : "time"
	} ]
};


var pocStatus = {
	"data" : [ {
		"userID" : "U10002", // 用户ID
		"localDevice" : "7000", // 用户号码
		"localState" : "offline", // 用户状态
		"linkDevice" : "6000", // 对端用户号码
		"linkUserID" : "id" // 对端用户ID
	}, {
		"userID" : "U10001",
		"localDevice" : "6000",
		"localState" : "offline",
		"linkDevice" : "7000",
		"linkUserID" : "U10002"
	} ]
};
var videoGroup1 = {
	"count" : "3",
	"data" : [ {
		"videoGroupID" : "20000",
		"groupName" : "RTSP分组",
		"parentID" : "",
		"orderNO" : "1"
	}, {
		"videoGroupID" : "20001",
		"groupName" : "MS-RTSP分组",
		"parentID" : "20000",
		"orderNO" : "1"
	}, {
		"videoGroupID" : "20002",
		"groupName" : "HIK分组",
		"parentID" : "",
		"orderNO" : "2"
	} ]
};
var videoGroups = {"count":3,"data":[
       {"videoGroupID":"79b91d7d36b35911a5e1227a4e21c325","groupName":"test1","parentID":"","orderNO":"7"},
       {"videoGroupID":"0b49bdae8a0959bf9bf46b3ec1e5715a","groupName":"test4","parentID":"","orderNO":"0.5"},
       {"videoGroupID":"f0d8d75f00a55864ad150af133972065","groupName":"Test","parentID":"","orderNO":"8"}]};
//var video = {"count":7,"data":[
//{"videoID":"35c15def215c5cec8be799d37c82120a","videoName":"10.10.8.53_2","groupID":"f0d8d75f00a55864ad150af133972065","puid":"","pos_x":"","pos_y":"","gpsBH":"","orderNO":"4"},
//{"videoID":"61134d48d5155f15bb6d99fabdee7847","videoName":"hik","groupID":"f0d8d75f00a55864ad150af133972065","puid":"34010342001310655483111","pos_x":"119.816687","pos_y":"30.36694","gpsBH":"","orderNO":"3"},
//{"videoID":"0f6704787637581e92569bd850b80827","videoName":"10.10.4.27","groupID":"f0d8d75f00a55864ad150af133972065","puid":"","pos_x":"119.82695","pos_y":"30.25489","gpsBH":"","orderNO":"2"},
//{"videoID":"687008a5eef65865b738b1be3a91e64f","videoName":"10.10.8.53","groupID":"f0d8d75f00a55864ad150af133972065","puid":"","pos_x":"120.084009","pos_y":"30.35504","gpsBH":"","orderNO":"1"},
//{"videoID":"56c6603b1bad560b9ea52b97c262c9dc","videoName":"poc44100","groupID":"f0d8d75f00a55864ad150af133972065","puid":"44100","pos_x":"119.808265","pos_y":"30.258883","gpsBH":"","orderNO":"5"},
//{"videoID":"508073aec04457ebab6c7552aa396ec6","videoName":"POC","groupID":"f0d8d75f00a55864ad150af133972065","puid":"2411004","pos_x":"","pos_y":"","gpsBH":"","orderNO":"4.5"},
//{"videoID":"a8b9f1b93857577bb52c9721832d9cf5","videoName":"10.10.8.53_3","groupID":"f0d8d75f00a55864ad150af133972065","puid":"","pos_x":"","pos_y":"","gpsBH":"","orderNO":"3.5"}
//]};

var video = {"count":7,
		"data":[{
			"videoID":"35c15def215c5cec8be799d37c82120a",
			"videoName":"10.10.8.53_2",
			"group" : [ {
				"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
				"orderNO" : "1" // 所在组的排序序号
			}, {
				"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
				"orderNO" : "3" // 所在组的排序序号
			} ],
			"puid":"",
			"pos_x":"",
			"pos_y":"",
			"gpsBH":""
		},{
			"videoID":"61134d48d5155f15bb6d99fabdee7847",
			"videoName":"hik",
			"group" : [ {
				"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
				"orderNO" : "2" // 所在组的排序序号
			}, {
				"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
				"orderNO" : "2" // 所在组的排序序号
			} ],
			"puid":"34010342001310655483111",
			"pos_x":"119.816687",
			"pos_y":"30.36694",
			"gpsBH":"",
		},{
			"videoID":"0f6704787637581e92569bd850b80827",
			"videoName":"10.10.4.27",
			"group" : [ {
				"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
				"orderNO" : "4" // 所在组的排序序号
			}, {
				"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
				"orderNO" : "4" // 所在组的排序序号
			}, {
				"groupID" : "f0d8d75f00a55864ad150af133972065", // 所属组ID
				"orderNO" : "1" // 所在组的排序序号
			} ],
			"puid":"",
			"pos_x":"119.82695",
			"pos_y":"30.25489",
			"gpsBH":""
		},{
			"videoID":"687008a5eef65865b738b1be3a91e64f",
			"videoName":"10.10.8.53",
			"group" : [ {
				"groupID" : "f0d8d75f00a55864ad150af133972065", // 所属组ID
				"orderNO" : "2.1" // 所在组的排序序号
			}],
			"puid":"",
			"pos_x":"120.084009",
			"pos_y":"30.35504",
			"gpsBH":""
		},{
			"videoID":"56c6603b1bad560b9ea52b97c262c9dc",
			"videoName":"poc44100",
			"group" : [ {
				"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
				"orderNO" : "2.2" // 所在组的排序序号
			}],
			"puid":"44100",
			"pos_x":"119.808265",
			"pos_y":"30.258883",
			"gpsBH":""
		},{
			"videoID":"508073aec04457ebab6c7552aa396ec6",
			"videoName":"POC",
			"group" : [ {
				"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
				"orderNO" : "3.2" // 所在组的排序序号
			}, {
				"groupID" : "f0d8d75f00a55864ad150af133972065", // 所属组ID
				"orderNO" : "1.1" // 所在组的排序序号
			} ],
			"puid":"2411004",
			"pos_x":"",
			"pos_y":"",
			"gpsBH":""
		},{
			"videoID":"a8b9f1b93857577bb52c9721832d9cf5",
			"videoName":"10.10.8.53_3",
			"group" : [ {
				"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
				"orderNO" : "6.2" // 所在组的排序序号
			}],
			"puid":"",
			"pos_x":"",
			"pos_y":"",
			"gpsBH":""
		}
]};

var video1 = {
	"count" : "1",
	"data" : [ {
		"videoID" : "3", // 视频ID
		"videoName" : "视频3", // 视频名称
		"groupID" : "1", // 所属视频组ID
		"pos_x" : "", // 经度
		"pos_y" : "", // 纬度
		"puid" : "6000", // 设备编号
		"orderNO" : "orderNO" // 排序序号
	} ]
};
var video2 = {
		"count" : "1",
		"data" : [ {"videoID":"0f6704787637581e92569bd850b80827",
		"videoName":"10.10.4.27",
		"group" : [ {
			"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
			"orderNO" : "4" // 所在组的排序序号
		}, {
			"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
			"orderNO" : "4" // 所在组的排序序号
		}, {
			"groupID" : "f0d8d75f00a55864ad150af133972065", // 所属组ID
			"orderNO" : "1" // 所在组的排序序号
		} ],
		"puid":"",
		"pos_x":"",
		"pos_y":"",
		"gpsBH":""
	}]
};

var video3 = {
		"count" : "1",
		"data" : [ {"videoID":"0f6704787637581e92569bd850b80827",
		"videoName":"10.10.4.27",
		"group" : [ {
			"groupID" : "79b91d7d36b35911a5e1227a4e21c325", // 所属组ID
			"orderNO" : "0.1" // 所在组的排序序号
		}, {
			"groupID" : "0b49bdae8a0959bf9bf46b3ec1e5715a", // 所属组ID
			"orderNO" : "0.1" // 所在组的排序序号
		}],
		"puid":"",
		"pos_x":"119.82695",
		"pos_y":"30.25489",
		"gpsBH":""
	}]
};

var callData = {
		"ID" : "U10001",
		"deviceCode" : "10101"
};

var callEndData = {
		"count":"2",
		"data":[
		        {"userID":"U10001",
		        	"localDevice":"10102",
		        	"localState":"idle",
		        	"linkDevice":"",
		        	"linkUserID":"id"}]
};

/** ********通讯录操作**************** */
function addGroup() {
	group1.data[0].groupName = group1.data[0].groupName + '123';
	MapDataPush('group', group1);
}
function addOperator() {
	operator1.data[0].realName = operator1.data[0].realName + '123';
	MapDataPush('operator', operator1);
	operator1.data[0].groupID = 2;
}
function addEmployee() {
	MapDataPush('employee', employee1);
	employee1.data[0].realName = employee1.data[0].realName + '123';
	employee1.data[0].group[0].groupID = 2;
	employee1.data[0].group[1].groupID = 1;
}
function addVideoGroup() {
	MapDataPush('videogroup', videoGroup1);
	videoGroup1.data[0].groupName = videoGroup1.data[0].groupName + '123';
}
function addVideo() {
	video1.data[0].videoName = video1.data[0].videoName + '123';
	MapDataPush('video', video1);
	video1.data[0].groupID = 2;
}
function delGroup() {
	MapDataPull('group', {
		"data" : [ {
			"ID" : "1"
		} ]
	});
}
function delOperator() {
	MapDataPull('operator', {
		"data" : [ {
			"ID" : "1"
		}, {
			"ID" : "2"
		} ]
	});
}
function delEmployee() {
	MapDataPull('employee', {
		"data" : [ {
			"ID" : "1"
		}, {
			"ID" : "2"
		} ]
	});
}
function delVideoGroup() {
	MapDataPull('videogroup', {
		"data" : [ {
			"ID" : "1"
		} ]
	});
}
function delVideo() {
	MapDataPull('video', {
		"data" : [ {
			"ID" : "1"
		} ]
	});
}
function addDataToTree() {
//	MapDataPush('group', group, 1);
//	MapDataPush('operator', operator, 1);
//	MapDataPush('employee', employee, 1);
//	MapDataPush('videogroup', videoGroups,1);
//	MapDataPush('video', video, 1);
	//MapInfoPush('location', poc1);
	//MapInfoPush('status', pocStatus);
}

function addPocToMap(){
	//MapInfoPush('location',poc1);
}

function updateDataToTree(){//添加标注后调度台推送的数据
	//MapDataPush('group',groupUpdata,0);
}

function removeDataToTree(){//删除标注后调度台推送的数据
	//MapDataPush('group',groupDelete,0);
}

function removeVideoPosition(){//删除视频标注
	//MapDataPush('video',video2,0);
}

function addVideoPosition(){//添加视频标注
	//MapDataPush('video',video3,0);
}

function mapCallIn(){
	//MapSetLocationSelected("employee",callData);
}
function mapCallEnd(){
	//MapInfoPush("status",callEndData);
}

