import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Blokslot {
  @PrimaryGeneratedColumn('uuid')
  blokslot_id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  slotName: string;

  @Column({ type: 'varchar', length: 255, nullable: false, default: false })
  isStatus: boolean;

  @Column()
  blok_id: string;
}

@Entity()
export class Blok {
  @PrimaryGeneratedColumn('uuid')
  blok_id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  blokName: string;

  @OneToMany(() => Blokslot, (blokslot) => blokslot.blok_id)
  blokslot: Blokslot[];
}
