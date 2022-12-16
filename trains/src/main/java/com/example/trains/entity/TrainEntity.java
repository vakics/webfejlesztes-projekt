package com.example.trains.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "trains")
public class TrainEntity {
    @Id
    @GeneratedValue
    private long id;
    private String sorozat;
    private String becenev;
    private String gyarto;
    private int maxSebesseg;

    public TrainEntity(String sorozat, String becenev, String gyarto, int maxSebesseg) {
        this.sorozat = sorozat;
        this.becenev = becenev;
        this.gyarto = gyarto;
        this.maxSebesseg = maxSebesseg;
    }

    @Override
    public String toString() {
        return "TrainEntity{" +
                "id=" + id +
                ", sorozat='" + sorozat + '\'' +
                ", becenev='" + becenev + '\'' +
                ", gyarto='" + gyarto + '\'' +
                ", maxSebesseg=" + maxSebesseg +
                '}';
    }

    public TrainEntity() {

    }
}
