package com.lxl.servlet.action;

import com.lxl.servlet.model.AdminBean;
import com.lxl.servlet.service.AccountService;

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
public class GetAdminServlet extends HttpServlet {
    AccountService service = AccountService.getInstance();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter writer = response.getWriter();
        try {
            AdminBean adminBean = new AdminBean();
            adminBean.account = request.getParameter("account");
            adminBean.password = request.getParameter("password");
            String s = service.selectAdmin(adminBean);
            writer.write(s);
        } catch (Exception e) {
            e.printStackTrace();
            writer.write("fail");
        }
        writer.flush();
    }
}
