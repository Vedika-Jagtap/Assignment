class A{

}
class B extends A{
    public void show(){
        System.out.println("i am show from B");
    }
}
public class A2 {
        public static void main(String[] args){
            A a = new A();
            B b = new B();
            //B c = new A();   //Not possible
            A d = new B();
        }
}