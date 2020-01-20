package com.arokis.general.json;

public class ResponseJson {

    public static String success(String message) {
        return JsonBuilder.create()
                .add("success", true)
                .add("message", message)
                .toString();
    }

    public static String success(String message, String token) {
        return JsonBuilder.create()
                .add("success", true)
                .add("message", message)
                .add("token", token)
                .toString();
    }

    public static String failure(String error) {
        return JsonBuilder.create()
                .add("success", false)
                .add("error", error)
                .toString();
    }
}
