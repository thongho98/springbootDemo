package com.asiacoms.web.demo.service.Impl;

import com.asiacoms.web.demo.domain.Users;
import com.asiacoms.web.demo.repository.UserRepository;
import com.asiacoms.web.demo.service.UsersService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UserRepository repository;

    @Override
    public Users changePassword(Long id) {
        return null;
    }

    @Override
    public void updateUser(Users user) {
        repository.save(user);
    }
}
