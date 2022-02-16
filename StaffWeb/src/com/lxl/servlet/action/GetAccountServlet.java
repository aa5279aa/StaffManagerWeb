package com.lxl.servlet.action;

import com.lxl.servlet.service.AccountService;
import com.lxl.servlet.service.InputService;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by xiangleiliu on 2017/5/25.
 */
public class GetAccountServlet extends HttpServlet {

    AccountService service = AccountService.getInstance();
    InputService inputService = new InputService();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        try {
            //获取所有商区
            String accountList = request.getParameter("accountList");
            int start = Integer.parseInt(request.getParameter("start"));
            int maxNum = Integer.parseInt(request.getParameter("maxNum"));
            String jsonString2 = service.selectAccount(accountList, start, maxNum);
            writer.write(jsonString2);
        } catch (Exception e) {
            writer.write("error");
            e.printStackTrace();
        }
        writer.flush();
    }
}
