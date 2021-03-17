package stackque;


import java.util.Scanner;

public class IntStackTest {

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		IntStack s = new IntStack(64);
		
		while(true) {
			System.out.println("현재 데이터 수: "+s.size()+"/"+s.capacity());
			System.out.println("(1) push (2) pop (3) peek (4) dump (0) quit");
			
			int menu = stdIn.nextInt();
			if(menu==0) break;
			
			int x;
			
			switch(menu) {
			case 1:
				System.out.println("data : ");
				x=stdIn.nextInt();
				try {
					s.push(x);
				}catch(IntStack.OverflowIntStackException e) {
					System.out.println("full stack");
				}
				break;
				
			case 2:
				try {
					x = s.pop();
					System.out.println(x+" pop");
				}catch(IntStack.EmptyIntStackException e) {
					System.out.println("empty stack");
				}
				break;
				
			case 3:
				try {
					x=s.peek();
					System.out.println(x+" peek");
				}catch(IntStack.EmptyIntStackException e) {
					System.out.println("empty stack");
				}
				break;
				
			case 4:
				s.dump();
				break;
			}
		}

	}

}
