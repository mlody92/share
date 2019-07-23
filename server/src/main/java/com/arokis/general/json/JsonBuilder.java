package com.arokis.general.json;

import java.util.ArrayList;
import java.util.Collection;

public class JsonBuilder {

    private Collection<Param> list = new ArrayList<>();
    private boolean asArray = false;

    public static JsonBuilder create() {
        return new JsonBuilder();

    }

    public static JsonBuilder createAsArray() {
        JsonBuilder jsonBuilder = new JsonBuilder();
        jsonBuilder.asArray();
        return jsonBuilder;
    }

    public JsonBuilder add(String name, boolean value) {
        list.add(new Param(name, String.valueOf(value)));
        return this;
    }

    public JsonBuilder add(String name, String value) {
        list.add(new Param(name, "\"" + value + "\""));
        return this;
    }

    //todo
    public <T> JsonBuilder add(String name, Collection<T> value) {
        return this;
    }

    public JsonBuilder add(String name, String... value) {
        list.add(new Param(name, value));
        return this;
    }

    public JsonBuilder add(String name, JsonBuilder value) {
        list.add(new Param(name, value.toString()));
        return this;
    }

    public String toString() {
        String result = asArray ? "[" : "{";
        result += String.join(",", listToString());
        return result + (asArray ? "]" : "}");
    }

    private Collection<String> listToString() {
        Collection<String> result = new ArrayList<>();
        list.forEach(x -> result.add(x.toString()));
        return result;
    }

    private void asArray() {
        asArray = true;
    }

    class Param {
        private String param;
        private String[] value;

        public Param(String param, String... value) {
            this.param = param;
            this.value = value;
        }

        @Override
        public String toString() {
            String valueString;
            if (value.length > 1) {
                valueString = "[" + String.join(",", value) + "]";
            } else {
                valueString = value[0];
            }
            return "\"" + param + "\":" + valueString;
        }
    }
}
