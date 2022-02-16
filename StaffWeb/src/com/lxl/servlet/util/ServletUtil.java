package com.lxl.servlet.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.http.HttpServletResponse;

public class ServletUtil {

    public static String buildReponse(HttpServletResponse response, JSONObject data) {
        /* 允许跨域的主机地址 */
        response.setHeader("Access-Control-Allow-Origin", "*");
        /* 允许跨域的请求方法GET, POST, HEAD 等 */
        response.setHeader("Access-Control-Allow-Methods", "*");
        /* 重新预检验跨域的缓存时间 (s) */
        response.setHeader("Access-Control-Max-Age", "3600");
        /* 允许跨域的请求头 */
        response.setHeader("Access-Control-Allow-Headers", "*");
        /* 是否携带cookie */
        response.setHeader("Access-Control-Allow-Credentials", "true");
        /*还需要设置允许OPTIONS请求*/
//        if ("OPTIONS".equals(request.getMethod())) {
        response.setStatus(200);
//        }
        JSONObject res = new JSONObject();
        res.put("data", data);
        return res.toJSONString();
    }
}
