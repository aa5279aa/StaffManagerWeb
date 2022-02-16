package com.lxl.servlet.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by xiangleiliu on 2017/5/3.
 * <p>
 * * 编号:account_id
 * * 工号:job_id
 * * 账号:name
 * * 部门:password
 * * 入职日期:entry_data
 * * 职位:position
 * * 个人简介:describes
 * * 照片:img_url
 * * 备注:remark
 * * 最后修改时间:timestamp
 */
public class AccountBean {

    public int accountId;
    public String jobId;
    public String account;
    public String entryDate;
    public String position;//
    public String describes;
    public String imgUrl;
    public String remark;
    public Timestamp createTime;
    public Timestamp updateTime;
}
