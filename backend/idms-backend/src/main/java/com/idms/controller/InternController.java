package com.idms.controller;

import com.idms.entity.Intern;
import com.idms.service.InternService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interns")
@CrossOrigin(origins = "http://localhost:4200")
public class InternController {

    private final InternService internService;

    public InternController(InternService internService) {
        this.internService = internService;
    }

    @PostMapping("/{batchId}")
    public Intern addIntern(@RequestBody Intern intern, @PathVariable Long batchId) {
        return internService.addIntern(intern, batchId);
    }

    @GetMapping
    public List<Intern> getAll() {
        return internService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        internService.deleteIntern(id);
    }

    @PutMapping("/{id}")
    public Intern update(@PathVariable Long id, @RequestBody Intern intern) {
        return internService.updateIntern(id, intern);
    }

    @GetMapping("/search")
    public List<Intern> search(@RequestParam(required = false) String name,
                               @RequestParam(required = false) Long batchId,
                               @RequestParam(required = false) String type) {
        return internService.searchInterns(name, batchId, type);
    }
}