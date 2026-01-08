package org.example;

import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Arrays allows you to store multiple values without declaring separate variables for each values
        int[] numbers = {12, 15, 16, 100, 200, 20, 50};

//        for (int number : numbers) {
//            System.out.println(number);
//        }

//        System.out.println(numbers[6]);

        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        String[] friends = {"Maria", "Alex", "Bita", "Ana", "John", "Steven", "Peter"};
        for (String friend: friends) {
            System.out.print(friend + " ");
        }
        System.out.println();

        int[] numbers2 = new int[5];
        numbers2[0] = 1;
        numbers2[1] = 5;
        numbers2[2] = 17;
        numbers2[3] = 41;
        numbers2[4] = 34;

        System.out.println(Arrays.toString(numbers2));
//        System.out.println(numbers2);
    }
}