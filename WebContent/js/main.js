var data1 = new Array("20", "31", "50","20", "31", "50","20", "31", "50","20", "31", "50");
var data2 = new Array("45", "82", "41","45", "82", "41","45", "82", "41","45", "82", "41");
var data3 = new Array("15", "56", "71","15", "56", "71","15", "56", "71","15", "56", "71");
var show = data1;

var cdate = new Array();
var city;
var type = "新增确诊趋势";
var data = "新增确诊";

onload = function start() {
	document.getElementById('newS').style.backgroundColor='#ffff99';
	getData();
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

function getData(){
	var t=new Date();
	var dd=t.getDate()-1;
	var mm=t.getMonth();
	var yy=t.getFullYear();
	var newDay = new Date(yy,mm,(dd-15));
	console.log(newDay);
	var m=t.getMonth()+1; //获取当前月份(0-11,0代表1月)
	var d=t.getDate()-1; //获取当前日(1-31)
	for(var i=14;i>=0;i--){
		if(d!=0){
			cdate[i]=m+'.'+d;
		}else{
			d=newDay.getDate()+i+1;
			m-=1;
			cdate[i]=m+'.'+d;
		}
		d-=1;
	}

	if(mm<10){
		mm='0'+mm;
	}
	var apikey='183104d863feb9f2a5c2baa350b12b4d'
	var date='&date='+yy+'-'+mm+'-'+dd;
		$(document).ready(function(){
			    $.get("http://api.tianapi.com/txapi/ncovcity/index?key="+apikey+date,
			    function(data,status){
					console.log(data);
					$('#result').append(JSON.stringify(data)) //返回内容绑定到ID为result的标签
					for (i=0;i<data.newslist.length;i++)
					{ 
						var person = {
							    cityName:data.newslist[i].provinceName,
							    shortName:data.newslist[i].provinceShortName,
							    currentConfirmedCount: data.newslist[i].currentConfirmedCount,
							    confirmedCount: data.newslist[i].confirmedCount+'',
							    suspectedCount: data.newslist[i].suspectedCount,
							    curedCount: data.newslist[i].curedCount,
							    deadCount: data.newslist[i].deadCount,
							};
					}
					document.getElementById('s21').innerHTML=data.newslist[0].currentConfirmedCount;
					document.getElementById('s22').innerHTML=data.newslist[0].confirmedCount;
					document.getElementById('s23').innerHTML=data.newslist[0].curedCount;
					document.getElementById('s24').innerHTML=data.newslist[0].deadCount;
					document.getElementById('s31').innerHTML='较昨日'+data.newslist[0].currentConfirmedIncr;
					document.getElementById('s32').innerHTML='较昨日'+data.newslist[0].confirmedIncr;
					document.getElementById('s33').innerHTML='较昨日'+data.newslist[0].curedIncr;
					document.getElementById('s34').innerHTML='较昨日'+data.newslist[0].deadIncr;
					var data1 = new Array("20", "31", "50","20", "31", "50","20", "31", "50","20", "31", "50");
			        //alert("内容：" + person.currentConfirmedCount);
			    });
			});
}