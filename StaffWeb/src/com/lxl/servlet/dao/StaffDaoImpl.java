package com.lxl.servlet.dao;

import com.lxl.servlet.model.*;

import java.sql.*;
import java.util.*;

/**
 * Created by xiangleiliu on 2017/5/4.
 */
public class StaffDaoImpl implements StaffDao {
    Connection conn;

    private static final String ACCOUNT_TABLE = "account_table";
    private static final String ADMIN_TABLE = "admin_table";

    public StaffDaoImpl() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/staff?useUnicode=true&characterEncoding=utf8&autoReconnect=true";
            String user = "admin1";
            String password = "lxl301lxl";
            conn = DriverManager.getConnection(url, user, password);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public boolean insertOrUpdateAccountBean(AccountBean accountBean) {
        StringBuilder sql = new StringBuilder();


        if (accountBean.accountId == 0) {
            //插入
            sql.append("INSERT INTO " + ACCOUNT_TABLE + " ( job_id,account, entry_data,position,describes,img_url,remark )" +
                    "VALUES " +
                    "(?,?,?,?,?,?,?);");
        } else {
            //修改
            sql.append("UPDATE " + ACCOUNT_TABLE + " SET ");
            sql.append(" job_id =?,");
            sql.append(" account =?,");
            sql.append(" entry_data =?,");
            sql.append(" position =?,");
            sql.append(" describes =?,");
            sql.append(" img_url =?,");
            sql.append(" remark =?");
            sql.append(" where account_id = ").append(accountBean.accountId);
        }

        PreparedStatement pstmt = null;
        try {
            pstmt = conn.prepareStatement(sql.toString());
            pstmt.setString(1, accountBean.jobId);
            pstmt.setString(2, accountBean.account);
            pstmt.setString(3, accountBean.entryDate);
            pstmt.setString(4, accountBean.position);
            pstmt.setString(5, accountBean.describes);
            pstmt.setString(6, accountBean.imgUrl);
            pstmt.setString(7, accountBean.remark);
            return pstmt.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();

            return false;
        } finally {
            if (pstmt != null) {
                try {
                    pstmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public boolean deleteShopModel(int accountId) {
        String sql = "delete from " + ACCOUNT_TABLE + " where account_id =" + accountId;
        Statement stmt = null;
        try {
            stmt = conn.createStatement();
            return stmt.executeUpdate(sql) > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        } finally {
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public List<AccountBean> selectAccountBen(String accountIdList, int start, int maxNum) {
        StringBuilder sql = new StringBuilder();
        if (accountIdList == null || accountIdList.length() == 0) {
            sql.append( "select * from account_table limit " + maxNum + ";");
        } else {
            sql.append("select * from account_table where account_id in (" + accountIdList + ") limit " + maxNum + ";");
        }
        PreparedStatement preStmt = null;
        List<AccountBean> list = new ArrayList<>();
        try {
            preStmt = conn.prepareStatement(sql.toString());
            ResultSet rs = preStmt.executeQuery();

            while (rs.next()) {
                int account_id = rs.getInt("account_id");
                String job_id = rs.getString("job_id");
                String account = rs.getString("account");
                String password = rs.getString("password");
                String entry_data = rs.getString("entry_data");
                String position = rs.getString("position");
                String describes = rs.getString("describes");
                String img_url = rs.getString("img_url");
                String remark = rs.getString("remark");
                Timestamp createTime = rs.getTimestamp("create_time");
                Timestamp updateTime = rs.getTimestamp("update_time");

                AccountBean accountBean = new AccountBean();
                accountBean.accountId = account_id;
                accountBean.jobId = job_id;
                accountBean.account = account;
//                accountBean.password = password;
                accountBean.entryDate = entry_data;
                accountBean.position = position;
                accountBean.describes = describes;
                accountBean.imgUrl = img_url;
                accountBean.remark = remark;
                accountBean.createTime = createTime;
                accountBean.updateTime = updateTime;

                list.add(accountBean);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (preStmt != null) {
                try {
                    preStmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return list;
    }


    @Override
    public Integer hasAdminBean(AdminBean adminBean) {
        String sql = "select * from " + ADMIN_TABLE + " where account = \'" + adminBean.account + "\' and password =\'" + adminBean.password + "\'";
        PreparedStatement preStmt = null;
        try {
            preStmt = conn.prepareStatement(sql);
            ResultSet rs = preStmt.executeQuery();
            while (rs.next()) {
                int admin_id = rs.getInt("admin_id");
                return admin_id;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (preStmt != null) {
                try {
                    preStmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    @Override
    public boolean insertImageModel(ImageModel imageModel) {
        return false;
    }

    @Override
    public boolean updateImageModel(ImageModel imageModel) {
        return false;
    }

    @Override
    public boolean deleteImageModel(int imgId) {
        return false;
    }

    @Override
    public ImageModel selectImageModel(int imgId) {
        return null;
    }


}
