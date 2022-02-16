package com.lxl.servlet.action;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.model.AccountBean;
import com.lxl.servlet.service.AccountService;
import com.lxl.servlet.util.ServletUtil;

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
            //转化获取AccountBean
            String string = request.getParameter("accountInfo");
            AccountBean accountBean = JSON.parseObject(string, AccountBean.class);
            JSONObject data = service.saveOrUpdateAccount(accountBean);
            String s = ServletUtil.buildReponse(response, data);
            writer.write(s);
        } catch (Exception e) {
            writer.write("{result:\"fail\"}");
            e.printStackTrace();
        }
        writer.flush();
    }


}
