package com.idms.service;

import com.idms.entity.Batch;
import com.idms.entity.Intern;
import com.idms.repository.BatchRepository;
import com.idms.repository.InternRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternService {

    private final InternRepository internRepo;
    private final BatchRepository batchRepo;

    public InternService(InternRepository internRepo, BatchRepository batchRepo) {
        this.internRepo = internRepo;
        this.batchRepo = batchRepo;
    }

    public Intern addIntern(Intern intern, Long batchId) {
        Batch batch = batchRepo.findById(batchId)
                .orElseThrow(() -> new RuntimeException("Batch not found"));

        intern.setBatch(batch);
        
        // 1. Save to generate ID
        intern = internRepo.save(intern);
        
        // 2. Generate internId
        String prefix = "Premium".equalsIgnoreCase(intern.getType()) ? "EMP" : "TDA";
        java.time.LocalDate jDate = intern.getJoiningDate();
        if (jDate == null) jDate = java.time.LocalDate.now();
        String dateStr = jDate.format(java.time.format.DateTimeFormatter.ofPattern("yyyyMMdd"));
        
        String generatedId = String.format("%s%s-%03d", prefix, dateStr, intern.getId());
        intern.setInternId(generatedId);
        
        return internRepo.save(intern);
    }

    public List<Intern> getAll() {
        return internRepo.findAll();
    }

    public void deleteIntern(Long id) {
        internRepo.deleteById(id);
    }

    public Intern updateIntern(Long id, Intern updated) {
        Intern intern = internRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Intern not found"));

        intern.setName(updated.getName());
        intern.setEmail(updated.getEmail());
        intern.setMobile(updated.getMobile());
        intern.setType(updated.getType());
        
        // We do NOT update internId as per requirements
        return internRepo.save(intern);
    }

    public List<Intern> searchInterns(String name, Long batchId, String type) {
        if (name != null && name.isEmpty()) name = null;
        if (type != null && type.isEmpty()) type = null;
        return internRepo.searchInterns(name, batchId, type);
    }
}