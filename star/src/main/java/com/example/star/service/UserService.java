package com.example.star.service;
import com.example.star.domain.User;
import com.github.pagehelper.PageInfo;

/**
 * @ Author     ：zkzhu.
 * @ Date       ：Created in 16:28 2019/7/19
 * @ Description：${description}
 * @ Modified By：
 */
public interface UserService {
    PageInfo<User> list(int pageSize, int pageNum);
}