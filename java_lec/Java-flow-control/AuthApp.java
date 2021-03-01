
public class AuthApp {

	public static void main(String[] args) {
		
		System.out.println(args[0]);
		
		String id = "dohkim";
		String inputId = args[0];
		
		String pass = "1111";
		String inputPass = args[1];
		
		System.out.println("Hi");
		
		boolean isRight = inputId.equals(id) && inputPass.equals(pass); 
		
		if(isRight) { // ||
			System.out.println("Master!");
		}else {
			System.out.println("Who are you?");
		}
		
		//primitive
		// boolean, double, short, long, float, char
		//non
		// String, Array, Date, File
		// == 는 같은 곳을 가르키고 있느냐에 대한 비교
		

	}

}
