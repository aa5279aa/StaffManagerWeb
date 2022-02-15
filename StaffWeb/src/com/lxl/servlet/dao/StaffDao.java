package com.lxl.servlet.dao;

import com.lxl.servlet.model.*;

import java.util.List;

/**
 * Created by xiangleiliu on 2017/5/25.
 */
public interface StaffDao {

    //员工信息
    public boolean insertOrUpdateAccountBean(AccountBean accountBean);

    public boolean deleteShopModel(int accountId);

    public List<AccountBean> selectAccountBen(String accountId, int start, int maxNum);


    //管理员信息
    public Integer hasAdminBean(AdminBean adminBean);


    //图片
    public boolean insertImageModel(ImageModel imageModel);

    public boolean updateImageModel(ImageModel imageModel);//以ImageModel中的mImgId为准更新

    public boolean deleteImageModel(int imgId);

    public ImageModel selectImageModel(int imgId);


}
