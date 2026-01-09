package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int[] numbers = {30, 57, 20, 670, 1000, 3, 45};
        int maxNum = maxNumberFromArray(numbers);
        System.out.println(maxNum);
    }

    // Create a function which receives a parameter an array of numbers and
    // the function should return the biggest number from that array of numbers
    public static int maxNumberFromArray(int[] numbers) {
        int maxNum = numbers[0];

        for (int number : numbers) {
            if (number > maxNum) {
                maxNum = number;
            }
        }
        return maxNum;
    }
}