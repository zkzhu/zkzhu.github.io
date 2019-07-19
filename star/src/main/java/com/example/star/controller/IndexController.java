package com.example.star.controller;

/**
 * @ Author     ：zkzhu.
 * @ Date       ：Created in 17:25 2019/7/19
 * @ Description：${description}
 * @ Modified By：
 */
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class IndexController {

    @ResponseBody
    @RequestMapping(value="/")
    public ModelAndView index(){
        ModelAndView view = new ModelAndView("index");
        return view;
    }
}