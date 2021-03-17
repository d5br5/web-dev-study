package stackque;
import java.util.Scanner;

import stackque.IntQueue.OverflowIntQueueException;

public class IntQueueTester {

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		IntQueue s= new IntQueue(64);
		
		while(true) {
			System.out.println("현재 데이터 수: "+s.size()+"/"+s.capacity());
			System.out.println("(1) enque (2) deque (3) peek (4) dump (0) quit");
			
			int menu = stdIn.nextInt();
			if(menu==0) break;
			
			int x;
			
			switch(menu) {
			case 1:
				System.out.println("data : ");
				x=stdIn.nextInt();
				try {
					s.enque(x);
				}catch(IntQueue.OverflowIntQueueException e) {
					System.out.println("full stack");
				}
				break;
				
			case 2:
				try {
					x = s.deque();
					System.out.println(x+": deque");
				}catch(IntQueue.EmptyIntQueueException e) {
					System.out.println("empty stack");
				}
				break;
				
			case 3:
				try {
					x=s.peek();
					System.out.println(x+" peek");
				}catch(IntQueue.EmptyIntQueueException e) {
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
