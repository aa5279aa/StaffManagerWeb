package com.lxl.servlet.action;

import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.service.AccountService;
import com.lxl.servlet.service.InputService;
import com.lxl.servlet.util.ServletUtil;
import com.lxl.servlet.util.StringUtil;

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
            String start = request.getParameter("start");
            String maxNum = request.getParameter("maxNum");
            JSONObject data = service.selectAccount(accountList, StringUtil.isEmpty(start) ? 0 : Integer.parseInt(start), StringUtil.isEmpty(maxNum) ? 10 : Integer.parseInt(maxNum));
            String s = ServletUtil.buildReponse(response, data);
            writer.write(s);
        } catch (Exception e) {
            writer.write("error");
            e.printStackTrace();
        }
        writer.flush();
    }
}
