import { UserEntity } from 'src/user/entity/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from '../../task/entity/task.entity';

@Entity('todos')
export class TodoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => UserEntity)
  userID: number;

  @OneToMany(() => TaskEntity, (task) => task.list)
  tasks: TaskEntity[];
}
