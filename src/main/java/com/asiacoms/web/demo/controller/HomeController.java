package com.asiacoms.web.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"","/"})
public class HomeController {

    @RequestMapping("/index")
    public String index() {

        return "index";
    }

    @RequestMapping({"/create-user"})
    public String create() {

        return "create-user";
    }

    @RequestMapping({"/edit-user"})
    public String edit() {

        return "/edit-user";
    }
}
