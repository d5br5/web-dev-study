class Print{
	public String delimiter;
	public void a() {
		System.out.println(this.delimiter);
		System.out.println("a");
	}
}

public class staticClass {

	public static void main(String[] args) {
		Print t1 = new Print();
		t1.delimiter="-";
		t1.a();
	}

}
