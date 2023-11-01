import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TodoEntity } from '../../todo/entity/todo.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  isComplete: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => TodoEntity, (list) => list.id)
  list: TodoEntity;
}
