package com.lxl.servlet.service;

import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.dao.StaffDaoImpl;
import com.lxl.servlet.model.AdminBean;
import com.lxl.servlet.model.ImageModel;
import com.lxl.servlet.model.AccountBean;

import java.util.List;
import java.util.Map;

/**
 * Created by xiangleiliu on 2017/5/3.
 */
public class AccountService {

    private static volatile AccountService accountService;

    StaffDaoImpl dao;
    Logger logger;

    public static AccountService getInstance() {
        if (accountService == null) {
            synchronized (AccountService.class) {
                if (accountService == null) {
                    accountService = new AccountService();
                }
            }
        }
        return accountService;
    }

    private AccountService() {
        dao = new StaffDaoImpl();
        logger = Logger.getLogger();
    }

    public String saveOrUpdateAccount(AccountBean accountBean) throws Exception {
        //插入酒店基础信息
        boolean flag = dao.insertOrUpdateAccountBean(accountBean);
        JSONObject response = new JSONObject();
        response.put("result", flag ? "sucess" : "fail");
        return response.toJSONString();
    }

    public String deleteAccount(int accountId) throws Exception {
        boolean flag = dao.deleteShopModel(accountId);
        JSONObject response = new JSONObject();
        response.put("result", flag ? "sucess" : "fail");
        return response.toJSONString();
    }

    public String selectAccount(String accountIdList, int start, int maxNum) throws Exception {
        List<AccountBean> accountBeans = dao.selectAccountBen(accountIdList, start, maxNum);
        JSONObject response = new JSONObject();
        response.put("accountList", accountBeans);
        response.put("result", "success");
        return response.toJSONString();
    }

    public String selectAdmin(AdminBean adminBean) {
        Integer admin_id = dao.hasAdminBean(adminBean);
        JSONObject response = new JSONObject();
        if (admin_id == null) {
            response.put("isHave", false);
            response.put("result", "fail");
        } else {
            response.put("result", "success");
            response.put("admin_id", admin_id);
            response.put("isHave", true);
        }
        return response.toJSONString();
    }

}
