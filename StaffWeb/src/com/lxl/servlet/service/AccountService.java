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

    public JSONObject saveOrUpdateAccount(AccountBean accountBean) throws Exception {
        //插入酒店基础信息
        boolean flag = dao.insertOrUpdateAccountBean(accountBean);
        JSONObject data = new JSONObject();
        data.put("message", flag ? "添加成功" : "添加失败");
        data.put("status", flag ? 200 : 500);
        return data;
    }

    public JSONObject deleteAccount(int accountId) throws Exception {
        boolean flag = dao.deleteShopModel(accountId);
        JSONObject data = new JSONObject();
        data.put("message", flag ? "删除成功" : "删除失败");
        data.put("status", flag ? 200 : 500);
        return data;
    }

    public JSONObject selectAccount(String accountIdList, int start, int maxNum) throws Exception {
        List<AccountBean> accountBeans = dao.selectAccountBen(accountIdList, start, maxNum);
        JSONObject data = new JSONObject();
        data.put("accountList", accountBeans);
        data.put("result", "success");
        data.put("status", 200);
        return data;
    }

    public JSONObject selectAdmin(AdminBean adminBean) {
        Integer admin_id = dao.hasAdminBean(adminBean);
        JSONObject data = new JSONObject();
        if (admin_id == null) {
            data.put("status", 500);
            data.put("result", "fail");
            data.put("isSuccess", false);
        } else {
            data.put("status", 200);
            data.put("result", "success");
            data.put("admin_id", admin_id);
            data.put("isSuccess", true);
        }
        return data;
    }

}
