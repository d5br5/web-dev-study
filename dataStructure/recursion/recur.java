package recursion;

import java.util.Scanner;

public class recur {
	
	static void recur1(int n) {
		if(n>0) {
			recur1(n-1);
			System.out.println(n);
			recur1(n-2);
		}
	}
	
	static void recur2(int n) {
		while(n>0) {
			recur2(n-1);
			System.out.println(n);
			n=n-2;
		}
	}
	
	static void recur3(int n ) {
		IntStack s =new IntStack(n);
		
		while(true) {
			if(n>0) {
				s.push(n);
				n=n-1;
				continue;
			}
			if(s.isEmpty() != true) {
				n=s.pop();
				System.out.println(n);
				n=n-2;
				continue;
			}
			break;
		}
	}
	
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		System.out.println("int insert");
		
		int x = stdIn.nextInt();
		
		recur1(x);

	}

}
