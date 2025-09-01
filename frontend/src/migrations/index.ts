import * as migration_20250901_032745 from './20250901_032745';
import * as migration_20250901_053948 from './20250901_053948';
import * as migration_20250901_152853 from './20250901_152853';

export const migrations = [
  {
    up: migration_20250901_032745.up,
    down: migration_20250901_032745.down,
    name: '20250901_032745',
  },
  {
    up: migration_20250901_053948.up,
    down: migration_20250901_053948.down,
    name: '20250901_053948',
  },
  {
    up: migration_20250901_152853.up,
    down: migration_20250901_152853.down,
    name: '20250901_152853'
  },
];
