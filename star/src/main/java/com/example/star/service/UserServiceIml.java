package com.example.star.service;

import com.example.star.service.UserService;
import com.github.pagehelper.PageHelper;
import com.example.star.dao.UserDao;
import com.example.star.domain.User;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ Author     ：zkzhu.
 * @ Date       ：Created in 16:33 2019/7/19
 * @ Description：${description}
 * @ Modified By：
 */
@Service
public class UserServiceIml implements UserService{

    @Autowired
    UserDao userDao;


    @Override
    public PageInfo<User> list(int pageSize, int pageNum) {
        PageHelper.startPage(pageNum, pageSize);
        List<User> userList = userDao.list();
        return new PageInfo<User>(userList);
    }
}
