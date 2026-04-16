package com.idms.service;

import com.idms.entity.Batch;
import com.idms.repository.BatchRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BatchService {

    private final BatchRepository batchRepository;

    public BatchService(BatchRepository batchRepository) {
        this.batchRepository = batchRepository;
    }

    public Batch createBatch(LocalDate startDate) {

        LocalDate endDate = startDate.plusMonths(6);

        Batch batch = new Batch();
        batch.setStartDate(startDate);
        batch.setEndDate(endDate);

        return batchRepository.save(batch);
    }

    public List<Batch> getAllBatches() {
        return batchRepository.findAll();
    }
}