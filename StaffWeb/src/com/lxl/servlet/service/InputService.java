package com.lxl.servlet.service;

import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.config.Config;
import com.lxl.servlet.model.ImageModel;
import com.lxl.servlet.model.AccountBean;
import com.lxl.servlet.util.IOHelper;
import com.lxl.servlet.util.NumberUtil;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by xiangleiliu on 2017/5/25.
 * 输入转化层
 */
public class InputService {

    public InputService() {

    }

    //请求转化为ImgeModel
    public ImageModel readImageModel(List<FileItem> list) throws FileUploadException, IOException {
        ImageModel imageModel = new ImageModel();
        for (FileItem fileItem : list) {
            if (!(fileItem instanceof DiskFileItem)) {
                continue;
            }
            String name = fileItem.getName();
            if (name == null || name.length() == 0) {
                continue;
            }
            imageModel.mImgName = "Img_" + System.currentTimeMillis() + "_" + name;
            imageModel.fileItem = fileItem;
            break;
        }
        return imageModel;
    }

    public List<FileItem> readAllParams(HttpServletRequest request) throws Exception {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        List<FileItem> fileItems = upload.parseRequest(request);
        return fileItems;
    }

    //开个线程去存储
    public JSONObject saveImage(ImageModel imageModel, String realPath) throws Exception {
        JSONObject data = new JSONObject();

        if (realPath.contains("out")) {
            //开发环境
            System.out.println("debug,realPath:"+realPath);
            ///Users/liuxl1/develop/git_ware/waibao/StaffManagerWeb/StaffWeb/out/artifacts/staff/
            imageModel.mImgPath = realPath + "img/" + imageModel.mImgName;
            imageModel.mImgUrl = Config.SERVE_URL_DEBUG + "/img/" + imageModel.mImgName;
        } else {
            //服务器部署
            System.out.println("release,realPath:"+realPath);
            imageModel.mImgPath = realPath + "img/" + imageModel.mImgName;
            imageModel.mImgUrl = Config.SERVE_URL_RELEASE + "/img/" + imageModel.mImgName;
        }

        //转存图片
        File saveImgFile = new File(imageModel.mImgPath);
        if (!saveImgFile.getParentFile().exists()) {
            saveImgFile.getParentFile().mkdirs();
        }
        if (imageModel.fileItem != null) {
            imageModel.fileItem.write(saveImgFile);
            data.put("status", 200);
            data.put("imgPath", imageModel.mImgPath);
            data.put("imgUrl", imageModel.mImgUrl);
        } else {
            File error = new File(saveImgFile.getAbsolutePath() + ".fail");
            saveImgFile.renameTo(error);
            data.put("status", 500);
        }
        return data;
    }
}
