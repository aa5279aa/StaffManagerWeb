package com.lxl.servlet.util;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by xiangleiliu on 2017/8/5.
 */
public class StringUtil {
    public static boolean emptyOrNull(String str) {
        return str == null || str.length() == 0;
    }

    public static boolean equals(String str1, String str2) {
        return str1 == null ? str2 == null : str1.equals(str2);
    }

    public static boolean equalsIgnoreCase(String str1, String str2) {
        return str1 == null ? str2 == null : str1.equalsIgnoreCase(str2);
    }

    public static boolean emptyOrNull(String... arrStr) {
        String[] arr$ = arrStr;
        int len$ = arrStr.length;

        for (int i$ = 0; i$ < len$; ++i$) {
            String str = arr$[i$];
            if (emptyOrNull(str)) {
                return true;
            }
        }

        return false;
    }

    public static String replaceBlank(String str) {
        return emptyOrNull(str) ? "" : str.replace(" ", "");
    }

    public static int toInt(String s) {
        boolean i = false;

        int i1;
        try {
            i1 = Integer.parseInt(s);
        } catch (Exception var3) {
            i1 = -1;
        }

        return i1;
    }

    public static int toInt(String str, int defaultValue) {
        int i;
        try {
            i = Integer.parseInt(str);
        } catch (Exception var4) {
            i = defaultValue;
        }

        return i;
    }


    public static Boolean isNotBlank(String text) {
        return text != null && !"".equals(text) ? Boolean.TRUE : Boolean.FALSE;
    }

    public static String ifBlankDefault(String text, String defaultString) {
        return text != null && !"".equals(text) ? text : defaultString;
    }

    public static boolean isDate(String date) {
        if (emptyOrNull(date)) {
            return false;
        } else {
            String regex = "(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)";
            Pattern p = Pattern.compile(regex);
            Matcher m = p.matcher(date);
            return m.matches();
        }
    }

    public static String trimXSSString(String string) {
        return string.replace("<", "").replace(">", "");
    }

    public static String getSplitTextWithinPosition(String content,
                                                    String splitContent, int position) {
        String result = null;
        if (!emptyOrNull(content) && !emptyOrNull(splitContent)) {
            String[] temp = content.split(splitContent);
            if (temp != null && temp.length >= position + 1) {
                result = temp[position];
            }
        }

        return result;
    }

    public static boolean isIntegerString(String input) {
        Matcher mer = Pattern.compile("^[+-]?[0-9]+$").matcher(input);
        return mer.find();
    }

    public static String getDescriptionFromException(Exception e) {
        if (e == null) {
            return "";
        } else {
            try {
                StringWriter e2 = new StringWriter();
                PrintWriter pw = new PrintWriter(e2);
                e.printStackTrace(pw);
                String ret = e2.toString();
                return ret;
            } catch (Exception var4) {
                return "Bad getDescriptionFromException:" + var4.toString();
            }
        }
    }

    public static String escapeSql(String str) {
        if (emptyOrNull(str)) {
            return "";
        } else {
            str = str.replaceAll("\'", "\'\'");
            str = str.replaceAll("\"", "\"\"");
            str = str.replaceAll("\\\\", "");
            return str;
        }
    }

    public static boolean isEmpty(String source) {
        return source == null || source.length() == 0;
    }

    public static boolean isNotEmpty(String str) {
        return str != null && str.length() > 0;
    }


    public static List<String> string2List(String s) {
        List<String> list = new ArrayList<>();
        if (emptyOrNull(s)) {
            return list;
        }
        String[] split = s.split("\n");
        List<String> strings = Arrays.asList(split);
        list.addAll(strings);
        return list;
    }
}
