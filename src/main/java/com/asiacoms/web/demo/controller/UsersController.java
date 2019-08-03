package com.asiacoms.web.demo.controller;

import com.asiacoms.web.demo.domain.Users;
import com.asiacoms.web.demo.dto.RegisterRequest;
import com.asiacoms.web.demo.exception.UserNotFoundException;
import com.asiacoms.web.demo.repository.UserRepository;
import com.asiacoms.web.demo.service.UsersService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UsersController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UsersService service;

    // Show all user
    @GetMapping("/users")
    List<Users> getAllUsers(Model model) {
        model.addAttribute("message", "Lấy danh sách người dùng thành công!");
        return repository.findAll();
    }

    // Create one user
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public Users newUser(@RequestBody Users newUser, Model model) {
        model.addAttribute("message", "Tạo user thành công!");
        return repository.save(newUser);
    }

    // Find
    @GetMapping("/users/{id}")
    public Users findOne(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    // Update by id
    @PutMapping("/users/{id}")
    public boolean updateUser(@RequestBody Users newUser, @PathVariable Long id, Model model) {
        model.addAttribute("message", "Cập nhật user thành công!");
        return repository.findById(id)
                .map(user -> {
                    user.setDisplayName(newUser.getDisplayName());
                    user.setEmail(newUser.getEmail());
                    user.setPhone(newUser.getPhone());
                    return repository.save(user);
                })
                .isPresent();
    }

    //delete by id
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id, Model model) {
        model.addAttribute("message", "Xóa user thành công!");
        repository.deleteById(id);
    }

}
