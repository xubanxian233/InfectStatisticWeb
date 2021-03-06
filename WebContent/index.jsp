<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>结对--疫情展示</title>
  <style>
    .container {
      width: 1200px;
      margin: 0 auto;
    }

    #myEcharts {
      width: 800px;
      height: 500px;
      border: solid 1px blue;
      margin: 0 auto;
    }
body{
    background-color: #0ad; 
  }
  </style>
  <script src="js/jquery.js"></script>
  <script src="js/echarts.js"></script>
  <script src="js/china.js"></script>

</head>

<body>
  <div class="container">
    <!--为echarts准备一个dom容器-->
    <div id="myEcharts"></div>
  </div>

  <script>
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('myEcharts'));
    // 指定图表的配置项和数据
    option = {
      title: {
        text: '实时疫情图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { min: 10000, max: 1000000, label: '大于等于10000人', color: '#372a28' },
          { min: 1000, max: 9999, label: '确诊1000-9999人', color: '#4e160f' },
          { min: 100, max: 999, label: '确诊100-999人', color: '#974236' },
          { min: 10, max: 99, label: '确诊10-99人', color: '#ee7263' },
          { min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7' },
        ],
        color: ['#E0022B', '#E09107', '#A3E00B']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '确诊数',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            show: true,
            color: 'rgb(249, 249, 249)'
          },
          data: []
        }
      ]
    };

    //使用指定的配置项和数据显示图表
    myChart.setOption(option);

    //获取数据
    function getData() {
      $.ajax({
        url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
        dataType: "jsonp",
        success: function (data) {
          //  console.log(data.data)
          var res = data.data || "";
          res = JSON.parse(res);
          var newArr = [];
	var chinatotal=new Array();
         
          if (res) {
            //获取到各个省份的数据
            var province = res.areaTree[0].children;
            for (var j = 0; j < province.length; j++) {
              var json = {
                name: province[j].name,
                value: province[j].total.confirm
              }
              newArr.push(json)
            }
            console.log(newArr)
            console.log(JSON.stringify(newArr))
            //使用指定的配置项和数据显示图表
  	myChart.setOption(option);
        	myChart.on('click', function (params) {
        		window.location.href = "main.jsp?pro="+params.name;
        });
            myChart.setOption({
              series: [
                {
                  name: '确诊人数',
                  type: 'map',
                  mapType: 'china',
                  roam: false,
                  label: {
                    show: true,
                    color: 'rgb(249, 249, 249)'
                  },
                  data: newArr
                }
              ]
            });
          }
        }

      })
    }

    getData();
var N=10
  </script>
<table align="center"> 
  <tr>
	<td>累计确诊</td>
                <td><script>document.write(81099);</script></td>
   </tr>              
 <tr>
	<td>现存确诊</td>
                <td><script>document.write(9999);</script></td>
   </tr>              
 <tr>
	<td>累计治愈</td>
                <td><script>document.write(67882);</script></td>
   </tr>              
 <tr>
	<td>累计死亡</td>
                <td><script>document.write(3218);</script></td>
   </tr>              
</table>
</body>
</html>