package org.example;

public class InheritanceCar extends Vehicle {
    private String model;
    private int doors;
    public static  String TEST = "TEST";

    public InheritanceCar(String color, String name, String model, int doors) {
        super(name, color);
        this.model = model;
        this.doors = doors;
    }

    public static void displayData() {
        System.out.println("Display data");
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

//    public void move() {
//        System.out.println("The vehicle " + this.name + " is moving.");
//    }
//
//    public void stop() {
//        System.out.println("The vehicle " + this.name + " has stopped.");
//    }
}
