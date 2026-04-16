package com.idms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.idms.entity.User;
import com.idms.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        User existing = userRepository.findByEmail(user.getEmail());

        if (existing != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        return ResponseEntity.ok(userRepository.save(user));
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User existing = userRepository.findByEmail(user.getEmail());

        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(existing);
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}