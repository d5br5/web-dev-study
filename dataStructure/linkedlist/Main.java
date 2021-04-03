package linkedlist;

public class Main {

	public static void main(String[] args) {
		LinkedList numbers = new LinkedList();
		numbers.addFirst(30);
		numbers.addFirst(20);
		
		numbers.addFirst(10);
		System.out.println(numbers.toString());
		System.out.println(numbers.indexOf(300));
		System.out.println("============");
		LinkedList.ListIterator i = numbers.listIterator();
		i.add(5);
		i.next();
		i.add(15);
System.out.println(i.next());
		System.out.println(numbers);
		
	}

}
