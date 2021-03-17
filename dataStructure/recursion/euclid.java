package recursion;

public class euclid {
	static int gcd (int x, int y) {
		if(y==0) return x;
		else return gcd(y,x%y);
	}
}
