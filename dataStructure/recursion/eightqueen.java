package recursion;

public class eightqueen {
	
	static boolean[] flag_a = new boolean[8];
	static boolean[] flag_b = new boolean[15];
	static boolean[] flag_c = new boolean[15];
	
	static int[] pos = new int[8];
	
	static void print() {
		for(int i=0; i<8; i++) {
			System.out.printf("%2d", pos[i]);
		}
		System.out.println();
	}
	
	static void set1(int i) { //분할정복법
		for(int j=0; j<8; j++) {
			pos[i]=j;
			if(i==7) print();
			else set1(i+1);
		}
	}
	
	static void set2(int i) {
		for(int j=0; j<8; j++) {
			if(flag_a[j]==false) {
				pos[i]=j;
				if(i==7) print();
				else {
					flag_a[j]=true;
					set2(i+1);
					flag_a[j]=false;
				}
			}
		}
	}
	
	static void set3(int i) {
		for(int j=0; j<8; j++) {
			if(flag_a[j]==false &&
				flag_b[i+j]==false&&
				flag_c[i-j+7]==false) {
				pos[i]=j;
				if(i==7) print();
				else {
					flag_a[j]=flag_b[i+j] = flag_c[i-j+7]=true;
					set3(i+1);
					flag_a[j]=flag_b[i+j] = flag_c[i-j+7]=false;
				}
			}
		}
	}
	
	
	public static void main(String[] args) {
		set3(0);

	}

}
