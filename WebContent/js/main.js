var data1 = new Array("0", "0", "6", "2", "0", "5", "0", "0", "7", "0", "2");// 新增确诊趋势
var data2 = new Array("4", "4", "4", "10", "10", "12", "12", "17", "24", "24",
		"26");// 累计确诊趋势
var data3 = new Array("10", "19", "22", "27", "35", "45", "60", "63", "64",
		"71", "71");// 治愈趋势
var data4 = new Array("0", "1", "4", "3", "7", "12", "1", "2", "23", "6", "2");// 死亡趋势
var tdata = new Array();// 今日数据
var cdata = new Array("-2", "+2", "-6", "+5");// 今日数据比较数据
var show = data1;
var m;
var cdate = new Array();// 显示日期
var sdate = new Array();// 查询日期
var type = "新增确诊趋势";
var data = "新增确诊";

onload = function start() {
	document.getElementById('newS').style.backgroundColor = '#ffff99';
	if (data != null) {
		getData();
	}
	inputdata();

}

//按钮命令
function getType(obj) {
	if (obj == 1) {
		document.getElementById('newS').style.backgroundColor = '#ffff99';
		document.getElementById('allS').style.backgroundColor = '#00ff80';
		document.getElementById('allDaC').style.backgroundColor = '#00ff80';
		type = "新增确诊趋势";
		data = "新增确诊";
		show = data1;
		showline();
	} else if (obj == 2) {
		document.getElementById('allS').style.backgroundColor = '#ffff99';
		document.getElementById('newS').style.backgroundColor = '#00ff80';
		document.getElementById('allDaC').style.backgroundColor = '#00ff80';
		type = "累计确诊趋势";
		data = "累计确诊";
		show = data2;
		showline();
	} else if (obj == 3) {
		document.getElementById('allDaC').style.backgroundColor = '#ffff99';
		document.getElementById('newS').style.backgroundColor = '#00ff80';
		document.getElementById('allS').style.backgroundColor = '#00ff80';
		type = "累计治愈/死亡";
		data = "治愈/死亡";
		show = data3;
		showline1();
	} else {
	}
}

function showline() {
	// 指定图标的配置和数据
	var option = {
		title : {
			text : type
		},
		tooltip : {
			// 开启tips框框
			trigger : 'axis',
		// 刻度跟随鼠标显示
		// axisPointer: {type: 'cross'}
		},
		legend : {
			data : [ data ]
		},
		xAxis : [ {
			type : 'category',
			axisTick : {
				alignWithLabel : true
			},
			splitLine : {
				show : false
			},
			axisLine : {
				onZero : false,
				lineStyle : {
					color : '#ddd',
					width : '90%'
				}
			},
			data : cdate,
			axisPointer : {
				label : {}
			},
			axisLabel : {
				interval : 0
			},
		} ],
		yAxis : {},
		series : [ {
			name : data,
			type : 'line',
			areaStyle : {
				normal : {}
			},
			data : show,
		} ]
	};
	// 初始化echarts实例
	var myChart = echarts.init(document.getElementById('line'));

	// 使用制定的配置项和数据显示图表
	myChart.setOption(option);
}
function showline1() {
	// 指定图标的配置和数据
	var option = {
		title : {
			text : type
		},
		tooltip : {
			// 开启tips框框
			trigger : 'axis',
		// 刻度跟随鼠标显示
		// axisPointer: {type: 'cross'}
		},
		legend : {
			data : [ '治愈', '死亡' ]
		},
		xAxis : [ {
			type : 'category',
			axisTick : {
				alignWithLabel : true
			},
			splitLine : {
				show : false
			},
			axisLine : {
				onZero : false,
				lineStyle : {
					color : '#ddd',
					width : '90%'
				}
			},
			data : cdate,
			axisPointer : {
				label : {}
			},
			axisLabel : {
				interval : 0
			},
		} ],
		yAxis : {},
		series : [ {
			name : '治愈',
			type : 'line',
			areaStyle : {
				normal : {}
			},
			data : show,
		}, {
			name : '死亡',
			type : 'line',
			smooth : true,
			lineStyle : {
				color : {
					type : 'linear',
					x : 0,
					y : 0,
					x2 : 0,
					y2 : 1,
					colorStops : [ {
						offset : 0,
						color : '#0AB2F9' // 0% 处的颜色
					}, {
						offset : 1,
						color : '#0AB2F9' // 100% 处的颜色
					} ],
					globalCoord : false
				},
				width : 2,
				type : 'solid',
			},
			// 折线连接点样式
			itemStyle : {
				color : '#00E5DE'
			},
			// 折线堆积区域样式
			areaStyle : {
				color : '#004c5E'
			},
			data : data4
		} ]
	};
	// 初始化echarts实例
	var myChart = echarts.init(document.getElementById('line'));

	// 使用制定的配置项和数据显示图表
	myChart.setOption(option);
}

function sleep(d) {
	for (var t = Date.now(); Date.now() - t <= d;)
		;
}

function getDate() {
	var t = new Date();
	var dd = t.getDate() - 1;
	var mm = t.getMonth() + 1;
	var yy = t.getFullYear();
	var newDay = new Date(yy, mm, (dd - 10));
	var m = t.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
	var d = t.getDate() - 1; // 获取当前日(1-31)
	for (var i = 10; i >= 0; i--) {
		dd = d;
		mm = m;
		if (d != 0) {
			cdate[i] = m + '.' + d;
			if (m < 10) {
				mm = '0' + mm;
			}
			if (d < 10) {
				dd = '0' + dd;
			}
			sdate[i] = yy + "-" + mm + "-" + dd;
		} else {
			d = newDay.getDate() + i + 1;
			m -= 1;
			cdate[i] = m + '.' + d;
			if (m < 10) {
				mm = '0' + mm;
			}
			if (d < 10) {
				dd = '0' + dd;
			}
			sdate[i] = yy + "-" + mm + "-" + dd;
		}
		d -= 1;
	}
}

function getData() {
	getDate();
	var pname = document.getElementById('pro').innerText;
	var apikey = '183104d863feb9f2a5c2baa350b12b4d';
	var url = 'http://api.tianapi.com/txapi/ncovcity/index?key=' + apikey;
	console.log(url);
	$(document)
			.ready(
					function() {
						$
								.get(
										url,
										function(data, status) {
											var temp = new Array();
											$('#result').append(
													JSON.stringify(data));
											var pname = document
													.getElementById('pro').innerText;
											for (var i = 0; i < data.newslist.length; i++) {
												var str = data.newslist[i].provinceShortName;
												console.log(str);
												if (str == pname) {
													document
															.getElementById('s21').innerHTML = data.newslist[i].currentConfirmedCount;
													document
															.getElementById('s22').innerHTML = data.newslist[i].confirmedCount;
													document
															.getElementById('s23').innerHTML = data.newslist[i].curedCount;
													document
															.getElementById('s24').innerHTML = data.newslist[i].deadCount;
												}
											}
										});
					});
}

function inputdata() {
	// document.getElementById('s21').innerHTML=tdata[0];
	// document.getElementById('s22').innerHTML=tdata[1];
	// document.getElementById('s23').innerHTML=tdata[2];
	// document.getElementById('s24').innerHTML=tdata[3];
	document.getElementById('s31').innerHTML = '较昨日' + cdata[0];
	document.getElementById('s32').innerHTML = '较昨日' + cdata[1];
	document.getElementById('s33').innerHTML = '较昨日' + cdata[2];
	document.getElementById('s34').innerHTML = '较昨日' + cdata[3];
	temp = '';
	document.getElementById('time').innerHTML = '更新至' + cdate[10]
			+ ' (数据来源：天行数据)';
	showline();
}