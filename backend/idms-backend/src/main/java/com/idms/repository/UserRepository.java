package com.idms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.idms.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}