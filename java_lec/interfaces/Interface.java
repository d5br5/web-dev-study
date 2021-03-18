 
interface Calculable{
	int sum(int v1, int v2);
	double PI = 3.14;
}

interface Printable{
	void print();
}

class DummyCal implements Calculable, Printable{

	public int sum(int v1, int v2) {
		return v1+v2;
	}

	public void print() {
		System.out.println("this is dummycal");
		
	}
	
}

public class Interface {

	public static void main(String[] args) {
		DummyCal c = new DummyCal();
		System.out.println(c.sum(1, 2));
		c.print();
		System.out.println(c.PI );

	}

}
