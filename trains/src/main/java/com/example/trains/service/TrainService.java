package com.example.trains.service;

import com.example.trains.dto.TrainDto;
import com.example.trains.entity.TrainEntity;

import java.util.List;
import java.util.Optional;

public interface TrainService {
    List<TrainDto> getAllTrains();

    Optional<TrainEntity> getTrainById(long id);

    void deleteTrain(long id);

    TrainDto createTrain(TrainDto trainDto);

    TrainEntity updateTrain(TrainEntity trainEntity,long id);
}
