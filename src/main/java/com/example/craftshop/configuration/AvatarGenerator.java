package com.example.craftshop.configuration;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class AvatarGenerator {

    public static byte[] generateAvatar(String initials) throws IOException {
        int width = 100;
        int height = 100;

        // Создаём пустое изображение с цветом фона
        BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics = bufferedImage.createGraphics();

        // Заполняем цветом фона (например, синий)
        graphics.setColor(Color.BLUE);
        graphics.fillRect(0, 0, width, height);

        // Настраиваем текстовые свойства
        Font font = new Font("SansSerif", Font.BOLD, 40);
        graphics.setFont(font);
        graphics.setColor(Color.WHITE);

        // Выводим инициалы на изображении
        int x = (width - graphics.getFontMetrics().stringWidth(initials)) / 2;
        int y = (height - graphics.getFontMetrics().getHeight()) / 2 + graphics.getFontMetrics().getAscent();
        graphics.drawString(initials, x, y);

        graphics.dispose();

        // Конвертируем изображение в массив байтов
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        boolean success = ImageIO.write(bufferedImage, "png", outputStream);

        // Проверка успешности записи изображения
        if (!success || outputStream.size() == 0) {
            throw new IOException("Failed to generate avatar image");
        }

        return outputStream.toByteArray();
    }
}
