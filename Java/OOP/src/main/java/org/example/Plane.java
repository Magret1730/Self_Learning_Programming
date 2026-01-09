package org.example;

public class Plane extends Vehicle {
    private String model;
    private int doors;
    private int engines;

    public Plane(String color, String name, String model, int doors, int engines) {
        super(name, color);
        this.model = model;
        this.doors = doors;
        this.engines = engines;
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

    public int getEngines() {
        return engines;
    }

    public void setEngines(int engines) {
        this.engines = engines;
    }

    public Plane(String color, String name) {
        super(color, name);
    }

    @Override
    public void move() {
        System.out.println("Moving by flying.");
        super.move();
    }

    @Override
    public void stop() {
        System.out.println("Stopping by running.");
        super.stop();
    }
}
