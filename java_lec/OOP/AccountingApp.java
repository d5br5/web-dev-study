class Accounting{
	public Accounting(double valueOfSupply) {
		this.valueOfSupply = valueOfSupply;
	}
	
	public double valueOfSupply;
	
	public static double vatRate = 0.1;
	
	public  double getVAT() {
		return valueOfSupply*vatRate;
	}
	
	public  double getTotal() {
		return valueOfSupply+getVAT();
	}
	
}

public class AccountingApp {

	public static void main(String[] args) {
				
		Accounting a1 = new Accounting(10000.0);
		Accounting a2 = new Accounting(20000.0);
		
		System.out.println(a1.valueOfSupply);
	}

}
