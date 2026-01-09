package org.example;

public class Vehicle {
    private String color;
    private String name;

    public Vehicle(String color, String name) {
        this.color = color;
        this.name = name;
    }

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

    public void move() {
        System.out.println("The vehicle " + this.name + " is moving.");
    }

    public void stop() {
        System.out.println("The vehicle " + this.name + " has stopped.");
    }
}
