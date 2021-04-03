package linkedlist;

public class LinkedList {
	private Node head;
	private Node tail;
	private int size = 0;
	private class Node{
		private Object data;
		private Node next;
		public Node(Object input) {
			this.data  =input;
			this.next = null;
		}
		public String toString() {
			return String.valueOf(this.data);
		}
	}
	
	public void addFirst(Object input) {
		Node newNode = new Node(input);
		newNode.next = head;
		head = newNode;
		size++;
		if(head.next==null) tail = head;
	}
	
	public void addLast(Object input) {
		Node newNode = new Node(input);
		if(size==0) {
			addFirst(input);
		}else {
			tail.next = newNode;
			tail = newNode;
			size++;
		}
	}
	
	public Node node(int index) {
		Node x = head;
		for(int i=0; i<index; i++) {
			x=x.next;
		}
		return x;
	}
	
	public void add(int k, Object input) {
		if(k==0) {
			addFirst(input);
		}else {
			Node prev = node(k-1);
			Node newNode = new Node(input);
			newNode.next = prev.next;
			prev.next = newNode;
			size++;
			
			if(newNode.next==null) {
				tail = newNode;
			}
			
		}
	}
	
	public String toString() {
		if(head==null) {
			return "[]";
		}
		Node tmp = head;
		String str = "[";
		while(tmp.next != null) {
			str+=tmp.data+", ";
			tmp = tmp.next;
		}
		str += tmp.data;
		return str+"]";
	}
	
	public Object removeFirst() {
		Node tmp = head;
		head = head.next;
		size--;
		return tmp.data;
	}
	
	public Object remove(int k) {
		if(k==0) {
			return removeFirst();
		}else {	
			Node prev = node(k-1);
			Node returndata = prev.next;
			prev.next = prev.next.next;
			size--;
			if(returndata == tail) {
				tail = prev;
			}
			return returndata.data;
		}
		
	}
	public Object removeLast() {
		return remove(size-1);
	}
	
	public int size() {
		return size;
	}
	
	public Object get(int k) {
		Node tmp = node(k);
		return tmp.data;
	}
	
	public int indexOf(Object input) {
		Node tmp = head;
		int index=0;
		while(!tmp.data.equals(input) ) {
			tmp = tmp.next;
			index++;
			if(tmp == null) {
				return -1;
			}
		}
		return index;
	}
	
	public ListIterator listIterator() {
		return new ListIterator();
	}
	
	public class ListIterator{
		private Node next;
		private Node lastReturned;
		private int nextIndex;
		
		ListIterator(){
			next = head;
		}
		public Object next() {
			lastReturned = next;
			next= next.next;
			nextIndex++;
			return lastReturned.data;
		}
		
		public boolean hasNext() {
			return nextIndex<size();
		}
		
		public void add(Object input) {
			Node newNode = new Node(input);
			
			if(lastReturned == null) {
				head  = newNode;
				newNode.next = next;
			}else {
				lastReturned.next = newNode;
				newNode.next = next;
			}
			
			lastReturned = newNode;
			nextIndex++;
			size++;
		}
		
		public void remove() {
			if(nextIndex == 0) {
				throw new IllegalStateException();
			}
			LinkedList.this.remove(nextIndex-1);
			nextIndex--;
		}
	}
	
	
}
