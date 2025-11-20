class A{
    public static void main(String[] args){
        int a[] = { 1, 2, 3, 4 };

        int b[] = a;

        b[1] = 100;

        System.out.print( "\na: ");
        for(int n : a)
            System.out.print(n + " ");
        
        System.out.print( "\nb: ");
        for(int n : b)
            System.out.print(n + " ");
        
    }
}