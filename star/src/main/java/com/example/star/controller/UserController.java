package com.example.star.controller;

import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.star.service.UserService;
import com.example.star.domain.User;

/**
 * @ Author     ：zkzhu.
 * @ Date       ：Created in 16:42 2019/7/19
 * @ Description：${description}
 * @ Modified By：
 */
@Controller
@RequestMapping(value="/user")
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @ResponseBody
    @RequestMapping(value="/query")
    public PageInfo<User> list(){
        return userService.list(2, 1);
    }
}
