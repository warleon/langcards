import * as migration_20250901_032745 from './20250901_032745';
import * as migration_20250901_053948 from './20250901_053948';
import * as migration_20250901_152853 from './20250901_152853';
import * as migration_20250901_215403 from './20250901_215403';
import * as migration_20250907_163932 from './20250907_163932';
import * as migration_20250908_201112 from './20250908_201112';

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
    name: '20250901_152853',
  },
  {
    up: migration_20250901_215403.up,
    down: migration_20250901_215403.down,
    name: '20250901_215403',
  },
  {
    up: migration_20250907_163932.up,
    down: migration_20250907_163932.down,
    name: '20250907_163932',
  },
  {
    up: migration_20250908_201112.up,
    down: migration_20250908_201112.down,
    name: '20250908_201112'
  },
];
