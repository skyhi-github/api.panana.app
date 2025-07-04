import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const config = new DocumentBuilder()
    .setTitle('Panana')
    .setDescription('Panana API documentation')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCssUrl: '/swagger-custom.css',
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Panana',
    customfavIcon: '/panana.ico',
  });
  await app.listen(4000);
}
bootstrap();
