import * as migration_20250901_032745 from './20250901_032745';

export const migrations = [
  {
    up: migration_20250901_032745.up,
    down: migration_20250901_032745.down,
    name: '20250901_032745'
  },
];
