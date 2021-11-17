import {Module} from "@nestjs/common";
import { DatabaseModule } from './database/database.module';
// import {SequelizeModule} from "@nestjs/sequelize";
// import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
// import {User} from "./users/users.model";
// import { RolesModule } from './roles/roles.module';
// import {Role} from "./roles/roles.model";
// import {UserRoles} from "./roles/user-roles.model";
// import { AuthModule } from './auth/auth.module';
// import { PostsModule } from './posts/posts.module';
// import {Post} from "./posts/posts.model";
// import { FilesModule } from './files/files.module';
// import {ServeStaticModule} from "@nestjs/serve-static";
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import * as path from 'path';

@Module({
    controllers: [],
    providers: [],
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // ServeStaticModule.forRoot({
        //     rootPath: path.resolve( __dirname, 'static'),
        // }),
        CatsModule,     
        // UsersModule,
        // RolesModule,
        // AuthModule,
        // PostsModule,
        // FilesModule,
    ]
})

export class AppModule {}
