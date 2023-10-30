import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { User } from './user/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: './db/sqlite.db',
  entities: [User],
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
