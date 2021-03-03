import java.io.FileWriter;
import java.io.IOException;

public class TryWithResource {

	public static void main(String[] args) throws IOException {
		
		//try with resource statements
		try(FileWriter f= new FileWriter("data.txt")){
			f.write("hello");
			// f.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		// throw new RuntimeException("무언가 문제가 있습니다.");

		FileWriter fs =new FileWriter("data1.txt");
	}

}
