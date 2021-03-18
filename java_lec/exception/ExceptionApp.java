import java.io.FileWriter;
import java.io.IOException;

public class ExceptionApp {

	public static void main(String[] args) {
		System.out.println(1);
		
		int[] scores= {10,20,30};
		
		try {
			System.out.println(scores[3]);
			System.out.println(2/0);
		} catch(ArithmeticException e) {
			System.out.println("잘못된 계산");
		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("없는 인덱스");
		}
		
		try {
			
		} catch(Exception e){
			 e.printStackTrace();
		}
		
		System.out.println(3);
		
		
		FileWriter f = null;
		try {
			f = new FileWriter("data.txt");
			f.write("Hello");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if(f != null) {
				try{f.close();}catch(IOException e){e.printStackTrace();}
			}
		}
	
	}
}
