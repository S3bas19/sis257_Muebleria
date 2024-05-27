import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 50 })
  nombre: string;
  @Column('varchar', { length: 50 })
  apellido: string;
  @UpdateDateColumn({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;
  @Column('varchar', { length: 8 })
  telefono: number;
  @Column('varchar', { length: 100 })
  direccion: number;
}
