package recursion;

import java.util.Scanner;

public class factorial {

	static int factorial(int n) {
		if(n>0) return n*factorial(n-1);
		else return 1;
	}
	
	public static void main(String[] args) {
		Scanner sin = new Scanner(System.in);
		
		System.out.println("int insert");
		
		int x = sin.nextInt();
		
		System.out.println(x+" 팩토리얼은 "+factorial(x)+ "입니다.");

	}

}
