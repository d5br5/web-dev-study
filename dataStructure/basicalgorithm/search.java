package basicalgorithm;
public class search {

	static int binSearch(int[] a, int key) {
		int first = 0;
		int last = a.length-1;
		
		while(first<=last) {
			int center = (first+last)/2;
			if(a[center]==key) {
				return center;
			}else if(a[center]<key) {
				first=center+1;
			}else {
				last=center-1;
			}
		}
		return -1;
	}
	public static void main(String[] args) {
		int[] arr= {1,3,4,5,6,8,10,12,14,19,20,22};
		int key = 8;
		System.out.println(binSearch(arr,key));

	}

}
