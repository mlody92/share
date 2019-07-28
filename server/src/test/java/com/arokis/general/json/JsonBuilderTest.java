package com.arokis.general.json;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class JsonBuilderTest {

    @Test
    public void checkJsonBuilder() {
        JsonBuilder json = JsonBuilder.create().add("user",
                JsonBuilder.create().add("name", "John")
                        .add("email", "email@gmail.com")
                        .add("warning", "email to short", "name to short")
        );


        Assert.assertEquals(json.toString(), "{\"user\":{\"name\":\"John\",\"email\":\"email@gmail.com\",\"warning\":[email to short,name to short]}}");
    }

}
