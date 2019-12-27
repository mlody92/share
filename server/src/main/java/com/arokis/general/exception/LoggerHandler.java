package com.arokis.general.exception;

import java.util.logging.ConsoleHandler;
import java.util.logging.Logger;

public class LoggerHandler {
    public static void main(String[] args) {
        // Create Logger instance
        Logger logger = Logger.getLogger(LoggerHandler.class.getName());

        // Add ConsoleHandler
        ConsoleHandler consoleHandler = new ConsoleHandler();
        logger.addHandler(consoleHandler);

    }
}
