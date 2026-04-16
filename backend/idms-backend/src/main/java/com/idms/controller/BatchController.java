package com.idms.controller;

import com.idms.entity.Batch;
import com.idms.service.BatchService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/batches")
@CrossOrigin(origins = "http://localhost:4200")
public class BatchController {

    private final BatchService batchService;

    public BatchController(BatchService batchService) {
        this.batchService = batchService;
    }

    @PostMapping
    public Batch createBatch(@RequestBody Map<String, String> payload) {
        return batchService.createBatch(LocalDate.parse(payload.get("startDate")));
    }

    @GetMapping
    public List<Batch> getAll() {
        return batchService.getAllBatches();
    }
}