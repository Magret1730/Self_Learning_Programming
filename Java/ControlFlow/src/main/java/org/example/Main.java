package org.example;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
//        int age = 19;
//
//        if (age == 10) {
//            System.out.println("They are equal");
//        }
//        if (age >= 18) {
//            System.out.println("You can vote");
//        } else {
//            System.out.printf("You can't vote; \nPlease come back in " + (18 - age) + " years");
//        }

//        int year = 2027;
//
//        if (year != 2019) {
//            System.out.println("The 2019 year is = " + year);
//        } else if (year == 2020) {
//            System.out.println("The year is = " + year);
//        } else if (year == 2022) {
//            System.out.println("The year is = " + year);
//        } else {
//            System.out.println("All conditions failed.");
//        }

//        boolean isActive = true;
//
//        if (!isActive) {
////        if (isActive) {
////        if (isActive === true) {
//            System.out.println("The user is active");
//        } else {
//            System.out.println("The user is not active");
//        }

//        boolean isActive = false;
//        int score = 100;

//        if (score >= 100 && isActive == true) { // && returns true if both conditions are true
//            System.out.println("You opened the next level.");
//        } else {
//            System.out.println("You are at the same level.");
//        }

//        int num1 = 5;
//        int num2 = -4;
//
//        if (num1 > 0 || num2 > 0) { // && returns true if one condition is true
//            System.out.println("The conditions are true");
//        } else {
//            System.out.println("All conditions failed");
//        }

//        int time = 1;
        System.out.println("What is the time?");
        int time = scanner.nextInt();

        switch (time) {
            case 10:
                System.out.println("The time is " + time + "\nTime for the coffee.");
                break;
            case 12:
                System.out.println("The time is " + time + "\nTime for a run.");
                break;
            default:
                System.out.println("Time to relax");
                break;
        }
    }
}