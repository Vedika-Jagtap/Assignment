class A{
    public void show(){
        System.out.println("i am show from A");
    }
}
class B extends A{
    public void show(){
        System.out.println("i am show from B");
    }
}
public class Main2 {
        public static void main(String[] args){
            Object [] a = {1, 1.5, 5.2f, 'a', "Array" , new A() };
            for (Object o : a)
                System.out.println(o + " ");
        }
}