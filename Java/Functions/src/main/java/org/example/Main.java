package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        sayHello("Grace");
        int max = getMax(1, 5);
        System.out.println(max);
    }

    // Functions are lines of codes to do a specific task
    public static void sayHello(String name) {
//        System.out.println("Give a name");

//        Scanner scanner = new Scanner(System.in);
//        String name = scanner.next();

        System.out.println("Hello " + name);
    }

    public static int getMax(int num1, int num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
}