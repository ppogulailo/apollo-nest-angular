import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { UserResolver } from './resolvers/user.resolver'
import { UserService } from './services/user.service'



@Module({
    imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
    providers: [ UserService, UserResolver ],
})
export class UsersModule {
}