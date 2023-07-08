import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface BooksCreationsAttr{
    id?: number;
    name: string;
    
}


@Table({ tableName: 'books' })
export class Books extends Model<Books, any> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
  @Column({
    type: DataType.STRING,

    allowNull: false,
  })
  author: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  aboutAuthor: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  yearPublish: number;
}
