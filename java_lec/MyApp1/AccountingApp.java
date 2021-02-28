import javax.sound.midi.Soundbank;
import javax.swing.JOptionPane;

public class AccountingApp {

	public static void main(String[] args) {
		
		double valueOfSupply = Double.parseDouble(JOptionPane.showInputDialog("enter"));
		double vatRate = 0.1;
		double expenseRate=0.3;
		
		double vat = valueOfSupply*vatRate;
		double total = valueOfSupply + vat;
		double expense = valueOfSupply * expenseRate;
		double income = valueOfSupply - expense;
		
		double[] divRates = new double[3];
		divRates[0] = 0.5;
		divRates[1] = 0.3;
		divRates[2] = 0.2;
		
		double div1 = income * divRates[0];
		double div2 = income * divRates[1];
		double div3 = income * divRates[2];
		
		System.out.println("Value of supply : "+valueOfSupply);		
		System.out.println("VAT : " + vat);		
		System.out.println("Total : " + total);
				
		System.out.println("Expense : " + expense);		
		System.out.println("Income : " + income);		
		System.out.println("Dividend : " + div1);		
		System.out.println("Dividend : " + div2);		
		System.out.println("Dividend : " + div3);

	}

}
