package com.smartjournal.service.impl;

import com.smartjournal.model.User;
import com.smartjournal.repository.UserRepository;
import com.smartjournal.service.common.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends AbstractServiceImpl<User, Long, UserRepository> {

    public UserServiceImpl(UserRepository repository) {
        super(repository);
    }
}