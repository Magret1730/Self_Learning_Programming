//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // String name = "Magret";
        // int num = 23;
        // System.out.println("Hello and welcome " + name + "!. Your age is " + num + ".");

        int intMaxValue = Integer.MAX_VALUE; // This gives us max value that can be stored in int data type
        int intMinValue = Integer.MIN_VALUE; // This gives us min value that can be stored in int data type
        byte byteMaxValue = Byte.MAX_VALUE;  // This gives us max value that can be stored in byte data type
        byte byteMinValue = Byte.MIN_VALUE; // // This gives us min value that can be stored in byte data type
        long longMaxValue = Long.MAX_VALUE; // This gives us max value that can be stored in long data type
        long longMinValue = Long.MIN_VALUE; // This gives us min value that can be stored in long data type

        System.out.println("Max int value: " + intMaxValue + "\nMin int value: " + intMinValue);
        System.out.println("Max byte value: " + byteMaxValue + "\nMin byte value: " + byteMinValue);
        System.out.println("Max long value: " + longMaxValue + "\nMin long value: " + longMinValue);

        long myNum = 2147483648L; // Use "L" for long data types, if not the data type will be treated as int
    }
}