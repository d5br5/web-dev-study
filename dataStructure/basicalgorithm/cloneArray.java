
package basicalgorithm;
import java.util.Random;
import java.util.Scanner;

public class cloneArray {

	public static void main(String[] args) {
		
		int[] a = {1,2,3,4,5};
		int[] b = a.clone();
		
		b[3]=0;
		System.out.println(a[3]);

		Random rand = new Random();
		Scanner stdIn = new Scanner(System.in);
		int c=21;
		int d=4;
		System.out.println(c/d);
		
		String s = "ABSDD";
		System.out.println(s.charAt(3));
		System.out.println(s.equals("ABSDD"));
		System.out.println(s.length());
		
		long[][][] y = new long[2][4][3];
	} 

}
