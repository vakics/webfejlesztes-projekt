package com.example.trains.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@Data
public class TrainDto implements Serializable {
    private long id;
    private String sorozat;
    private String becenev;
    private String gyarto;
    private int maxSebesseg;

    public TrainDto(String sorozat, String becenev, String gyarto, int maxSebesseg) {
        this.sorozat = sorozat;
        this.becenev = becenev;
        this.gyarto = gyarto;
        this.maxSebesseg = maxSebesseg;
    }
}
