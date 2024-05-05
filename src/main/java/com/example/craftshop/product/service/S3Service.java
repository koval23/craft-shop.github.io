package com.example.craftshop.product.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class S3Service {

    private final S3Client s3Client;

    public String uploadFile(MultipartFile file) {
        // Оригинальное имя файла
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.isEmpty()) {
            throw new IllegalArgumentException("Invalid file name");
        }

        // Ключ для хранения файла на S3
        String fileKey = "products/" + originalFilename;

        // Установите корректный путь к временной директории на вашем компьютере
        // Замените на свой путь в `Documents` или другое доступное место
        String userHome = System.getProperty("user.home");
        String tempDir = userHome + "\\Documents\\uploads\\";

        // Создаем директорию, если её нет
        File tempDirectory = new File(tempDir);
        if (!tempDirectory.exists()) {
            boolean created = tempDirectory.mkdirs();
            if (!created) {
                System.err.println("Failed to create the temporary directory: " + tempDir);
                return null;
            }
        }

        // Полный путь к файлу на диске
        String filePath = tempDir + originalFilename;

        // Настройте запрос на загрузку файла на S3
        PutObjectRequest putRequest = PutObjectRequest.builder()
                .bucket("craftshop")
                .key(fileKey)
                .build();

        File tempFile = new File(filePath);
        try {
            // Сохраняем файл во временной директории
            file.transferTo(tempFile);

            // Загружаем файл на S3
            s3Client.putObject(putRequest, Paths.get(filePath));

            // Удаляем временный файл после успешной загрузки
            tempFile.delete();
            // Возвращаем успех, если все прошло гладко
            return String.format("https://%s.s3.%s.amazonaws.com/%s", "craftshop", "eu-north-1", fileKey);

        } catch (IOException e) {
            // Логирование ошибки для лучшего анализа
            e.printStackTrace();
            return null; // Возвращаем неуспех при ошибке
        }
    }

}
