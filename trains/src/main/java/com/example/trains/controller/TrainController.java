package com.example.trains.controller;

import com.example.trains.entity.TrainEntity;
import com.example.trains.repository.TrainRepository;
import com.example.trains.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/trains")
public class TrainController {
    @Autowired
    TrainRepository trainRepository;
    @Autowired
    TrainService trainService;

    @GetMapping("/alltrains")
    public ResponseEntity<List<TrainEntity>> getAllTrains() {
        return new ResponseEntity<>(trainRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/train")
    public ResponseEntity<Optional<TrainEntity>> getTrainDto(@RequestParam(required = true) long id) {
        return new ResponseEntity<>(trainRepository.findById(id),HttpStatus.OK);
    }

    @PostMapping("/train")
    public ResponseEntity<TrainEntity> createTrain(@RequestBody TrainEntity train) {
        return new ResponseEntity<>(trainRepository.save(train),HttpStatus.CREATED);
    }

    @DeleteMapping("/train")
    public ResponseEntity deleteTrain(@RequestParam(required = true) long id) {
        trainService.deleteTrain(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/train-update")
    public ResponseEntity updateTrain(@RequestParam long id,@RequestBody TrainEntity train){
        trainService.updateTrain(train,id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
