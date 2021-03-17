

public class BooleanApp {

	public static void main(String[] args) {
		System.out.println("One");
		System.out.println(1);
		System.out.println(true);
		System.out.println(false);

		String foo = "Hello world";
		//이미 쓰임이 있는 keyword들 : reserved word
		
		System.out.println(foo.contains("world"));
		System.out.println(1>1);
		System.out.println(1==1);
		
		if(false) {
			System.out.println(1);
		}else if(true) {
			System.out.println(2);
		}else {
			System.out.println(3);
		}
	}

}
