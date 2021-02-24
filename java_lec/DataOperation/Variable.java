
public class Variable {

	public static void main(String[] args) {
		
		int a = 1;
		double b = 3;
		String c = "Hello World";
		
		String name = "egoing";
		System.out.println("Hello, "+name+"..."+"bye");
		
		//casting
		double b2 = (double)1;	//손실이 없으므로 자동으로 casting
		System.out.println(b2);
		
		int e = (int) 1.1;		//손실이 발생하므로 자동으로 X
		System.out.println(e);
		
		String f = Integer.toString(23);
		System.out.println(f.getClass());

	}

}
