package com.idms.repository;

import com.idms.entity.Intern;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface InternRepository extends JpaRepository<Intern, Long> {
    List<Intern> findByNameContainingIgnoreCase(String name);

    @Query("SELECT i FROM Intern i WHERE " +
           "(:name IS NULL OR LOWER(i.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
           "(:batchId IS NULL OR i.batch.id = :batchId) AND " +
           "(:type IS NULL OR i.type = :type)")
    List<Intern> searchInterns(@Param("name") String name, 
                               @Param("batchId") Long batchId, 
                               @Param("type") String type);
}