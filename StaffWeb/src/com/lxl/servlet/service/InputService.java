package com.lxl.servlet.service;

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
        String fileName = "temp.png";
        for (FileItem fileItem : list) {
            String fieldName = fileItem.getFieldName();
            if ("input_type".equals(fieldName)) {
                String type = IOHelper.readStrByCode(fileItem.getInputStream(), "utf-8").trim();
                imageModel.mType = type.startsWith("商区") ? ImageModel.IMAGE_MODEL_TYPE_TRADING : ImageModel.IMAGE_MODEL_TYPE_SHOP;
            } else if ("input_nameId".equals(fieldName)) {
                imageModel.mRelationName = IOHelper.readStrByCode(fileItem.getInputStream(), "utf-8").trim();
            } else if ("input_img".equals(fieldName) && fileItem instanceof DiskFileItem) {
                fileName = fileItem.getName();
                imageModel.fileItem = fileItem;
            }
        }
        //重新整理imgName
        imageModel.mImgName = "SW_" + imageModel.mType + "_" + imageModel.mRelationName + "_" + fileName;
        imageModel.mImgPath = Config.Save_Path;
        imageModel.mImgUrl = imageModel.mImgPath + File.separator + imageModel.mImgName;
        return imageModel;
    }


    //请求转化为Discountodel
    public ImageModel readDiscountodel(HttpServletRequest request) throws FileUploadException {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        List<FileItem> fileItems = upload.parseRequest(request);
        ImageModel imageModel = new ImageModel();
        if (fileItems.size() > 0) {
            FileItem fileItem = fileItems.get(0);
            String name = fileItem.getName();
            imageModel.mImgName = fileItem.getFieldName();
            //名称

            //存储地址

            //mType

            //mRelationId 关联值

            //mImgId自动生成

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
    public String saveImage(ImageModel imageModel) throws Exception {
        //转存图片
        File saveImgFile = new File(imageModel.mImgUrl);
        if (!saveImgFile.getParentFile().exists()) {
            saveImgFile.getParentFile().mkdirs();
        }
        if (imageModel.fileItem != null) {
            imageModel.fileItem.write(saveImgFile);
        } else {
            File error = new File(saveImgFile.getAbsolutePath() + ".fail");
            saveImgFile.renameTo(error);
        }
        return saveImgFile.getAbsolutePath();
    }
}
