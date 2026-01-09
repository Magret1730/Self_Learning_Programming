package org.example;

public class Car {
    private String color;
    private String name;
    private String model;
    private int doors;

    // Constructor
    public Car(String color, String name, String model, int doors) {
        this.color = color;
        this.name = name;
        this.model = model;
        this.doors = doors;
    }

    public Car() {
        this("Color", "Name", "Model", 0);
    }

    public Car(String name) {
        this("Color", name, "Model", 0);
    }

    public Car(String name, String model) {
        this("Color", name, model, 0);
    }

    public Car(String color, String name, String model) {
        this(color, name, model, 0);
    }

//    public Car(String color, String name, String model, int doors) {
//        this(color, name, model, doors);
//    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public void move() {
        System.out.println("The car " + this.name + " is moving.");
    }

    public void stop() {
        System.out.println("The car " + this.name + " has stopped.");
    }
}
