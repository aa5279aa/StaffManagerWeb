package com.lxl.servlet.action;

import com.alibaba.fastjson.JSON;
import com.lxl.servlet.model.AccountBean;
import com.lxl.servlet.service.AccountService;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by xiangleiliu on 2017/4/26.
 */
@WebServlet(name = "InputShopServlet")
public class SetAccountServlet extends HttpServlet {

    AccountService service = AccountService.getInstance();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter writer = response.getWriter();
        try {
            //转化获取ShopModel
            AccountBean accountBean = JSON.parseObject(request.getParameter("accountBean"), AccountBean.class);
            String s = service.saveOrUpdateAccount(accountBean);
            writer.write(s);
        } catch (Exception e) {
            writer.write("{result:\"fail\"}");
            e.printStackTrace();
        }
        writer.flush();
    }


}
