package com.lxl.servlet.model;

import com.alibaba.fastjson.annotation.JSONField;
import org.apache.commons.fileupload.FileItem;

public class ImgFile {
    @JSONField(serialize = false)
    public FileItem fileItem;

    public String imgName;
    public String imgPath;//相对于本机的地址
    public String imgUrl;//网络连接
}
