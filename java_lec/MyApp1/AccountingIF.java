import javax.swing.JOptionPane;


class Accountings{
	
	public  double valueOfSupply;
	public  double vatRate;
	public  double expenseRate;
	
	double income = getIncome();
	
	public  void print() {
		System.out.println("Value of supply : "+valueOfSupply);		
		System.out.println("VAT : " + getVAT());		
		System.out.println("Total : " + getTotal());
		System.out.println("Expense : " + getExpense());		
		System.out.println("Income : " + getIncome());
		System.out.println("Dividend 1 : " + getdiv1());
		System.out.println("Dividend 2 : " + getdiv2());
		System.out.println("Dividend 3 : " + getdiv3());
	}

	public  double getdiv1() {
		return getIncome() * 0.5;
	}
	public  double getdiv2() {
		return getIncome() * 0.3;
	}
	public  double getdiv3() {
		return getIncome() * 0.2;
	}

	public   double getIncome() {
		return valueOfSupply - getExpense();
	}

	public  double getExpense() {
		return valueOfSupply * expenseRate;
	}

	public  double getTotal() {
		return valueOfSupply + getVAT();
	}

	public  double getVAT() {
		return valueOfSupply*vatRate;
	}
}


public class AccountingIF {

	
	public static void main(String[] args) {
		
		Accountings a1 = new Accountings();
		a1.valueOfSupply = 10000.0;
		a1.vatRate = 0.1;
		a1.expenseRate = 0.3;
		a1.print();
		
		Accountings a2 = new Accountings();
		a2.valueOfSupply = 10000.0;
		a2.vatRate = 0.1;
		a2.expenseRate = 0.3;
		a2.print();
	}

}