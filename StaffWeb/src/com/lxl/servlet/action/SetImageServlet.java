package com.lxl.servlet.action;

import com.alibaba.fastjson.JSONObject;
import com.lxl.servlet.model.ImageModel;
import com.lxl.servlet.service.InputService;
import com.lxl.servlet.service.Logger;
import com.lxl.servlet.util.ServletUtil;
import org.apache.commons.fileupload.FileItem;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by xiangleiliu on 2017/5/29.
 */
@WebServlet(name = "InputImageServlet")
public class SetImageServlet extends HttpServlet {
    InputService inputService = new InputService();
    Logger logger = Logger.getLogger();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String realPath = request.getSession().getServletContext().getRealPath("");
        PrintWriter writer = response.getWriter();
        try {
            //解析请求参数
            List<FileItem> list = inputService.readAllParams(request);

            //转换为ImageModel
            ImageModel imageModel = inputService.readImageModel(list);

            //主线程保存图片信息

            //线程    保存图片
            JSONObject data = inputService.saveImage(imageModel,realPath);
            String s = ServletUtil.buildReponse(response, data);
            writer.write(s);
        } catch (Exception e) {
            writer.write("error");
            e.printStackTrace();
            logger.showMessage(e.getMessage());
        }
        //成功+连接
        writer.flush();
    }
}
