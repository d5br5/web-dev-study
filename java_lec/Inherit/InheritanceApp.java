class Cal{
	int v1, v2;
	Cal(int v1, int v2){
		this.v1=v1;
		this.v2=v2;
		
	}
}

class Cal2 extends Cal{

	Cal2(int v1, int v2) {
		super(v1, v2);
		// TODO Auto-generated constructor stub
	}
	
}

public class InheritanceApp {

	public static void main(String[] args) {
		
		Cal c = new Cal(2,1);
		Cal2 c2 = new Cal2(3,4);


	}

}
