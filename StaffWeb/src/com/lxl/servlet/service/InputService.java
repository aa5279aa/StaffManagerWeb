package com.lxl.servlet.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.config.Config;
import com.lxl.servlet.model.ImageModel;
import com.lxl.servlet.model.ImgFile;
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
        int i = 0;
        for (FileItem fileItem : list) {
            if (!(fileItem instanceof DiskFileItem)) {
                continue;
            }
            String name = fileItem.getName();

            if (name == null || name.length() == 0) {
                name = "IMG" + i++;
            }
            ImgFile imgFile = new ImgFile();
            imgFile.imgName = "Img_" + System.currentTimeMillis() + "_" + name;
            imgFile.fileItem = fileItem;
            imageModel.fileItems.add(imgFile);
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

        String path = realPath + "img/";
        String url = Config.SERVE_URL_RELEASE + "/img/";
        if (realPath.contains("out")) {
            //开发环境
            path = realPath + "img/";
            url = Config.SERVE_URL_DEBUG + "/img/";
        }
        if (imageModel.fileItems.size() > 0) {
            for (ImgFile imgFile : imageModel.fileItems) {
                imgFile.imgPath = path + imgFile.imgName;
                imgFile.imgUrl = url + imgFile.imgName;
                File saveImgFile = new File(imgFile.imgPath);
                if (!saveImgFile.getParentFile().exists()) {
                    saveImgFile.getParentFile().mkdirs();
                }
                imgFile.fileItem.write(saveImgFile);
            }
            JSONArray imgList = new JSONArray();
            for (ImgFile imgFile : imageModel.fileItems) {
                JSONObject imgJson = new JSONObject();
                imgJson.put("imgName", imgFile.imgName);
                imgJson.put("imgPath", imgFile.imgPath);
                imgJson.put("imgUrl", imgFile.imgUrl);
                imgList.add(imgJson);
            }
            data.put("status", 200);
            data.put("imgList", imgList);
        } else {
            data.put("status", 500);
        }
        return data;
    }
}
