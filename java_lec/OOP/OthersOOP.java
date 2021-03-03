import java.io.FileWriter;
import java.io.IOException;

public class OthersOOP {

	public static void main(String[] args) throws IOException {
		System.out.println(Math.PI);
		FileWriter f1 = new FileWriter("data.txt");
		f1.write("Hello");
		f1.close();

	}

}
