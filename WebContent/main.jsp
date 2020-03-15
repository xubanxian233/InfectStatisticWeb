<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="web.dao.dataDAO"%>
<%@page import="web.dao.dataDAOImpl"%>
<%@page import="web.pojo.Province"%>
<%@page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<link href="css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
	<%
	dataDAO dao=new dataDAOImpl();
	Province pro=dao.get("hubei");			
				%>
	<div id="main">
		<div id="header">
			<h1>省份</h1>
			<span>更新至2020.3.13</span>
		</div>
		<div id="data">
			<div class="c1">
				<span class="s1">现有确诊</span>
				<span class="s2" id="s21"><%=pro.getcurrentConfirmedCount() %></span>
				<span class="s3" id="s31"></span>
			</div>
			<div class="c1">
				<span class="s1">累计确诊</span>
				<span class="s2" id="s22"></span>
				<span class="s3" id="s32"></span>
			</div>
			<div class="c1">
				<span class="s1">累计治愈</span>
				<span class="s2" id="s23"></span>
				<span class="s3" id="s33"></span>
			</div>
			<div class="c1">
				<span class="s1">累计死亡</span>
				<span class="s2" id="s24"></span>
				<span class="s3" id="s34"></span>
			</div>
		</div>
		<div id="line" style="width:98%; height: 400px;">
		
		</div>
		<script src="http://echarts.baidu.com/build/dist/echarts-all.js"></script>
		
		<div id="newS" class="classes" onclick="getType(1)">
			<span class="spanInc">新增</span>
			<span class="spanInc">确诊趋势</span>
		</div>
		<div id="allS" class="classes" onclick="getType(2)">
			<span class="spanInc">累计</span>
			<span class="spanInc">确诊趋势</span>
		</div>
		<div id="allDaC" class="classes" onclick="getType(3)">
			<span class="spanInc">累计</span>
			<span class="spanInc">治愈/死亡</span>
		</div>
	</div>
	<script type="text/javascript" src="js/main.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
</body>
</html>