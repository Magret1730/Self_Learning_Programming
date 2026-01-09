package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // OOP is a way of writing code like in real world
        Car firstCar = new Car("Black", "Tesla", "S Plaid", 4);
        Car secondCar = new Car("Red", "Ford", "Mustang", 2);
        Car thirdCar = new Car();
        Car fourthCar = new Car("Blue");

        firstCar.move();
        firstCar.stop();
        System.out.println("First Car Name: " + firstCar.getName() + "\nFirst Car Color: " + firstCar.getColor() + "\nFirst Car Model: " + firstCar.getModel() + "\nFirst Car Doors: " + firstCar.getDoors());
        System.out.println();

        secondCar.move();
        secondCar.stop();
        System.out.println("Second Car Name: " + secondCar.getName());
        System.out.println();

        firstCar.setName("Honda");
        System.out.println("First Car New Name: " + firstCar.getName());
        System.out.println();

        thirdCar.move();
        thirdCar.stop();
        System.out.println("Third Car Name: " + thirdCar.getName() + "\nThird Car Color: " + thirdCar.getColor() + "\nThird Car Model: " + thirdCar.getModel() + "\nThird Car Doors: " + thirdCar.getDoors());
        System.out.println();

        fourthCar.move();
        fourthCar.stop();
        System.out.println("Fourth Car Name: " + fourthCar.getName() + "\nFourth Car Color: " + fourthCar.getColor() + "\nFourth Car Model: " + fourthCar.getModel() + "\nFourth Car Doors: " + fourthCar.getDoors());
        System.out.println();
    }
}