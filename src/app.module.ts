import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: './db/sqlite.db',
  entities: [UserEntity],
  synchronize: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(config),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
