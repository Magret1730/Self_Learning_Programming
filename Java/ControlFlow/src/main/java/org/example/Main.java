package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int age = 19;

        if (age == 10) {
            System.out.println("They are equal");
        }
        if (age >= 18) {
            System.out.println("You can vote");
        } else {
            System.out.printf("You can't vote; \nPlease come back in " + (18 - age) + " years");
        }
    }
}