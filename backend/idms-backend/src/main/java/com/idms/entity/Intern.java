package com.idms.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Intern {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String mobile;

    private String type;
    private String internId;
    private LocalDate joiningDate;

    @ManyToOne
    @JoinColumn(name = "batch_id")
    @JsonBackReference
    private Batch batch;

    // getters & setters
    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
    public String getInternId() { return internId; }
    public void setInternId(String internId) { this.internId = internId; }

    public LocalDate getJoiningDate() { return joiningDate; }
    public void setJoiningDate(LocalDate joiningDate) { this.joiningDate = joiningDate; }

    public Batch getBatch() { return batch; }
    public void setBatch(Batch batch) { this.batch = batch; }
}