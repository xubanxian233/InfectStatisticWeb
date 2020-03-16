/**
 * 
 */
package web.pojo;

import java.util.ArrayList;

/**
 * @author 86169
 *
 */
public class Province {

	/**
	 * @param args
	 */
	private int currentConfirmedCount;//现有确诊人数
	private int confirmedCount;//累计确诊人数
	private int curedCount;//治愈人数
	private int deadCount;//死亡人数
	private int currentConfirmedIncr;//新增现有确诊人数
	private int confirmedIncr;//新增累计确诊人数
	private int curedIncr;//新增治愈人数
	private int deadIncr;//新增死亡人数
	
	private ArrayList<String> ccfIncr= new ArrayList<String>();//近十五天新增现有确诊人数
	private ArrayList<String> cfIncr= new ArrayList<String>();//近十五天新增累计确诊人数
	private ArrayList<String> cIncr= new ArrayList<String>();//近十五天新增治愈人数
	private ArrayList<String> dIncr= new ArrayList<String>();//近十五天新增死亡人数
	
	public int getcurrentConfirmedCount() {
		return currentConfirmedCount;
	}
	public void setcurrentConfirmedCount(int n) {
		currentConfirmedCount=n;
	}
	
	public int getconfirmedCount() {
		return confirmedCount;
	}
	public void setconfirmedCount(int n) {
		confirmedCount=n;
	}
	
	public int getcuredCount() {
		return curedCount;
	}
	public void setcuredCount(int n) {
		curedCount=n;
	}
	
	public int getdeadCount() {
		return deadCount;
	}
	public void setdeadCount(int n) {
		deadCount=n;
	}
	
	public int getconfirmedIncr() {
		return confirmedIncr;
	}
	public void setconfirmedIncr(int n) {
		confirmedIncr=n;
	}
	
	public int getcuredIncr() {
		return curedIncr;
	}
	public void setcuredIncr(int n) {
		curedIncr=n;
	}
	
	public ArrayList<String> getccfIncr() {
		return ccfIncr;
	}
	public void setccfIncr(ArrayList<String> arr) {
		ccfIncr.addAll(arr);
	}
	
	public ArrayList<String> getcfIncr() {
		return cfIncr;
	}
	public void setcfIncr(ArrayList<String> arr) {
		cfIncr.addAll(arr);
	}
	
	public ArrayList<String> getcIncr() {
		return cIncr;
	}
	public void setcIncr(ArrayList<String> arr) {
		cIncr.addAll(arr);
	}
	
	public ArrayList<String> getdIncr() {
		return dIncr;
	}
	public void setdIncr(ArrayList<String> arr) {
		dIncr.addAll(arr);
	}
}
