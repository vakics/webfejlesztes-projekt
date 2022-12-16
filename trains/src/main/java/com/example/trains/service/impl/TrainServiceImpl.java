package com.example.trains.service.impl;

import com.example.trains.dto.TrainDto;
import com.example.trains.entity.TrainEntity;
import com.example.trains.repository.TrainRepository;
import com.example.trains.service.TrainService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrainServiceImpl implements TrainService {
    @Autowired
    TrainRepository trainRepository;
    ModelMapper modelMapper;

    @Override
    public List<TrainDto> getAllTrains() {
        List<TrainDto> trainDtos=new ArrayList<>();
        for (TrainEntity trainEntity: trainRepository.findAll()){
            trainDtos.add(modelMapper.map(trainEntity,TrainDto.class));
        }
        return trainDtos;
    }

    @Override
    public Optional<TrainEntity> getTrainById(long id) {
        return trainRepository.findById(id);
    }

    @Override
    public void deleteTrain(long id) {
        trainRepository.deleteById(id);
    }

    @Override
    public TrainDto createTrain(TrainDto trainDto) {
        trainRepository.save(new TrainEntity(
                trainDto.getSorozat(),trainDto.getBecenev(),trainDto.getGyarto(),trainDto.getMaxSebesseg()));
        return trainDto;
    }

    @Override
    public TrainEntity updateTrain(TrainEntity train, long id) {
        TrainEntity trainEntity=trainRepository.getReferenceById(id);
        trainEntity.setBecenev(train.getBecenev());
        trainEntity.setGyarto(train.getGyarto());
        trainEntity.setSorozat(train.getSorozat());
        trainEntity.setMaxSebesseg(train.getMaxSebesseg());
        trainRepository.save(trainEntity);
        return trainEntity;
    }
}
