/**
 * 
 */
package web.dao;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import web.pojo.Province;

/**
 * @author 86169
 *
 */
public class dataDAOImpl implements dataDAO {
	ArrayList<String> proList=new ArrayList<String>(){{
        add("湖北");
        add("广东");
        add("河南");
        add("浙江");
        add("湖南");
        add("安徽");
        add("江西");
        add("江苏");
        add("重庆");
        add("山东");
        add("四川");
        add("黑龙江");
        add("北京");
        add("上海");
        add("福建");
        add("河北");
        add("陕西");
        add("广西");
        add("海南");
        add("云南");
        add("贵州");
        add("山西");
        add("辽宁");
        add("天津");
        add("甘肃");
        add("吉林");
        add("内蒙古");
        add("新疆");
        add("宁夏");
        add("香港");
        add("台湾");
        add("青海");
        add("澳门");
        add("西藏");
    }};
	/**
	 * @param args
	 */
    String apikey = "183104d863feb9f2a5c2baa350b12b4d";
	String httpUrl = "http://api.tianapi.com/txapi/ncovcity/index?key="+apikey;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	}

	@Override
	public Province get(String pname) {
		// TODO Auto-generated method stub
		int i;
		for (i = 0; i < proList.size(); i++) {
			if(pname.equals(proList.get(i))) {
				break;
			}
		}
		String httpArg ="";
		String jsonResult = request(httpUrl,httpArg);
		System.out.println("im"+jsonResult);
		Province pro = new Province();
		pro.setcurrentConfirmedCount(jsonResult.indexOf("currentConfirmedCount"));
		//String string=jsonResult.substring(jsonResult.indexOf(pname),jsonResult.indexOf("cityName"));
		String p1="\\{[^\\{\\}]{1,}\\}";//没有确定{后面一定是(
		String p2="\\{\\([^\\{\\}}]{1,}\\)\\}";//确定{后面一定是(
		Pattern p=Pattern.compile(p1);
		Matcher m=p.matcher(jsonResult);
		while(m.find()){
		System.out.println(m.group());
		}
		return pro;
	}
	
	//API获取数据
	

	/**
	 * @param urlAll
	 *            :请求接口
	 * @param httpArg
	 *            :参数
	 * @return 返回结果
	 */
	public static String request(String httpUrl, String httpArg) {
	    BufferedReader reader = null;
	    String result = null;
	    StringBuffer sbf = new StringBuffer();
	    httpUrl = httpUrl;//+ "?" + httpArg;

	    try {
	        URL url = new URL(httpUrl);
	        HttpURLConnection connection = (HttpURLConnection) url
	                .openConnection();
	        connection.setRequestMethod("GET");
	        InputStream is = connection.getInputStream();
	        reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        String strRead = null;
	        while ((strRead = reader.readLine()) != null) {
	            sbf.append(strRead);
	            sbf.append("\r\n");
	        }
	        reader.close();
	        result = sbf.toString();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return result;
	}
	/*
	public void getDate() {
		Calendar cal=Calendar.getInstance();
		int y=cal.get(Calendar.YEAR); 
		int m=cal.get(Calendar.MONTH);
		int d=cal.get(Calendar.DATE); 
		System.out.println("现在时刻是"+y+"年"+m+"月"+d+"日");
		Date t=new Date();
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
	}*/
}
