public class Datatype{
	public static void main(String[] args) {
		System.out.println('d');
		System.out.println("six");
		System.out.println("1111".length());
		
		System.out.println(6+2);
		System.out.println(Math.PI);
		
		System.out.println("hs\ndf");
		System.out.println("Hello, [name] ... bye".replace("[name]", "ds"));
		
		int a =3;
		double b = 3;
		String c = "Hello World";
		
		switch(a) {
		case 3:
			System.out.println('3');
		case 4:
			System.out.println('4');
			break;
		case 5:
			System.out.println('5');
			break;
		}
		
		
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
	enum Color{
		red, blue, green
	}
}
