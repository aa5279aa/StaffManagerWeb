package com.lxl.servlet.action;

import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.service.AccountService;
import com.lxl.servlet.util.ServletUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by xiangleiliu on 2017/5/4.
 */
@WebServlet(name = "InputTradingServlet")
public class DelAccountServlet extends HttpServlet {
    AccountService instance = AccountService.getInstance();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        try {
            String accountId = request.getParameter("accountId");
            JSONObject data = instance.deleteAccount(Integer.parseInt(accountId));
            String s = ServletUtil.buildReponse(response, data);
            writer.write(s);
        } catch (Exception e) {
            e.printStackTrace();
            writer.write("fail");
        }
        writer.flush();
    }
}
