import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule,MulterModule.registerAsync({
    useFactory: () => ({
      dest: 'src/upload',
    }),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
