var data1 = new Array("20", "31", "50","20", "31", "50","20", "31", "50","20", "31", "50");
var data2 = new Array("45", "82", "41","45", "82", "41","45", "82", "41","45", "82", "41");
var data3 = new Array("15", "56", "71","15", "56", "71","15", "56", "71","15", "56", "71");
var show = data1;
var date = new Array("2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12");
var city;
var type = "新增确诊趋势";
var data = "新增确诊";

onload = function start() {
	document.getElementById('newS').style.backgroundColor='#ffff99';
	showline();
}

function getType(obj) {
	if (obj == 1) {
		document.getElementById('newS').style.backgroundColor='#ffff99';
		document.getElementById('allS').style.backgroundColor='#00ff80';
		document.getElementById('allDaC').style.backgroundColor='#00ff80';
		type = "新增确诊趋势";
		data = "新增确诊";
		show = data1;
		showline();
	} else if (obj == 2) {
		document.getElementById('allS').style.backgroundColor='#ffff99';
		document.getElementById('newS').style.backgroundColor='#00ff80';
		document.getElementById('allDaC').style.backgroundColor='#00ff80';
		type = "累计确诊趋势";
		data = "累计确诊";
		show = data2;
		showline();
	} else if (obj == 3) {
		document.getElementById('allDaC').style.backgroundColor='#ffff99';
		document.getElementById('newS').style.backgroundColor='#00ff80';
		document.getElementById('allS').style.backgroundColor='#00ff80';
		type = "累计治愈/死亡";
		data = "治愈/死亡";
		show = data3;
		showline();
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
		//axisPointer: {type: 'cross'}
		},
		legend : {
			data : [ data ]
		},
		xAxis : [ {
			type : 'category',
			axisTick : {
				alignWithLabel : true
			},
			splitLine:{
	        	show:false
	        },
			axisLine : {
				onZero : false,
				lineStyle : {
					color : '#ddd',
					width : '90%'
				}
			},
			data : date,
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
