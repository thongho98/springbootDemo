package com.asiacoms.web.demo.service;

import com.asiacoms.web.demo.domain.Users;

public interface UsersService {

    Users changePassword(Long id);

    void updateUser(Users user);
}
