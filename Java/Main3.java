import java.util.List;
import java.util.ArrayList;

public class Main3 {
    public static void main (String[] args){
    List li = new ArrayList();

    li.add("abc");
    li.add(1);
    li.add('a');
    li.add(true);
    li.add(false);
    //System.out.println(li);
    li.set(2,"xyz");
    System.out.println(li.get(2));
    }
}