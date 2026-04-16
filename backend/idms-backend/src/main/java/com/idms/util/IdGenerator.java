package com.idms.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class IdGenerator {

    public static String generateInternId(String type, LocalDate doj, int count) {

        String prefix = type.equalsIgnoreCase("Premium") ? "EMP" : "TDA";

        String date = doj.format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        return prefix + date + "-" + String.format("%03d", count);
    }
}