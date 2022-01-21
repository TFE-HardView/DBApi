package com.gitee.freakchicken.dbapi;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

@SpringBootApplication
@ComponentScan(value = "com.gitee.freakchicken.dbapi.basic", excludeFilters = {
        @ComponentScan.Filter(type = FilterType.REGEX, pattern = {
                "com.gitee.freakchicken.dbapi.basic.filter.*"
        })
})
//@ComponentScan(value = "com.gitee.freakchicken.dbapi",
//        excludeFilters = {@ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {APIFilter.class})})  //filter会自动注册
@MapperScan("com.gitee.freakchicken.dbapi.basic.dao")
@EnableCaching
//@PropertySource("application-manager.properties")
@EnableDiscoveryClient
public class DBApiManager {
    public static void main(String[] args) {
        System.setProperty("spring.profiles.active","manager");
        SpringApplication.run(DBApiManager.class, args);
    }

}
