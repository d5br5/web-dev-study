package basicalgorithm;

import java.util.Scanner;

import javax.swing.JOptionPane;

class Max3m{
	static int max3(int a, int b, int c) {
		int max = a;
		if(b>max){max = b;}
		if(c>max){max = c;}
		return max;
	}
}

public class max3 {

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		
		System.out.println("세 정수의 최댓값");
		System.out.println("value a : "); 
		int a = stdIn.nextInt();
		System.out.println("value b : "); 
		int b = stdIn.nextInt();
		System.out.println("value c : "); 
		int c = stdIn.nextInt();
		
		int max;
		max = Max3m.max3(a,b,c);
		
		System.out.println("최댓값은 "+max+" 입니다.");
		
		//JOptionPane.showInputDialog("enter");

	}

}