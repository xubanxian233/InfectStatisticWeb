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
	private int currentConfirmedCount;//����ȷ������
	private int confirmedCount;//�ۼ�ȷ������
	private int curedCount;//��������
	private int deadCount;//��������
	private int currentConfirmedIncr;//��������ȷ������
	private int confirmedIncr;//�����ۼ�ȷ������
	private int curedIncr;//������������
	private int deadIncr;//������������
	
	private ArrayList<String> ccfIncr= new ArrayList<String>();//��ʮ������������ȷ������
	private ArrayList<String> cfIncr= new ArrayList<String>();//��ʮ���������ۼ�ȷ������
	private ArrayList<String> cIncr= new ArrayList<String>();//��ʮ����������������
	private ArrayList<String> dIncr= new ArrayList<String>();//��ʮ����������������
	
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
