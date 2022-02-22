package com.lxl.servlet.model;

import com.alibaba.fastjson.annotation.JSONField;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by xiangleiliu on 2017/5/25.
 */
public class ImageModel {
    @JSONField(serialize = false)
    public String name = "aaa";

    public List<ImgFile> fileItems = new ArrayList<>();

}
