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
        InheritanceCar fifthCar =  new InheritanceCar("Yellow", "Tesla", "S Plaid", 4);
        Plane plane = new Plane("Black", "Tesla", "S Plaid", 4, 7);

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

        fifthCar.move();
        fifthCar.stop();
        System.out.println("Fifth Car Name: " + fifthCar.getName() + "\nFifth Car Color: " + fifthCar.getColor() + "\nFifth Car Model: " + fifthCar.getModel() + "\nFifth Car Doors: " + fifthCar.getDoors());
        System.out.println();

        plane.move();
        plane.stop();
        System.out.println("Plane Name: " + plane.getName() + "\nPlane Color: " + plane.getColor() + "\nPlane Model: " + plane.getModel() + "\nPlane Doors: " + plane.getDoors() + "\nPlane Engines: " + plane.getEngines());
        System.out.println();

        InheritanceCar.displayData();
        String test = InheritanceCar.TEST;
        System.out.println(test);
    }
}