import * as migration_20250901_032745 from './20250901_032745';
import * as migration_20250901_053948 from './20250901_053948';
import * as migration_20250901_152853 from './20250901_152853';
import * as migration_20250901_215403 from './20250901_215403';
import * as migration_20250907_163932 from './20250907_163932';
import * as migration_20250908_201112 from './20250908_201112';
import * as migration_20250911_054254 from './20250911_054254';
import * as migration_20250914_070516 from './20250914_070516';
import * as migration_20250917_162658 from './20250917_162658';
import * as migration_20250917_173907 from './20250917_173907';

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
    name: '20250908_201112',
  },
  {
    up: migration_20250911_054254.up,
    down: migration_20250911_054254.down,
    name: '20250911_054254',
  },
  {
    up: migration_20250914_070516.up,
    down: migration_20250914_070516.down,
    name: '20250914_070516',
  },
  {
    up: migration_20250917_162658.up,
    down: migration_20250917_162658.down,
    name: '20250917_162658',
  },
  {
    up: migration_20250917_173907.up,
    down: migration_20250917_173907.down,
    name: '20250917_173907'
  },
];
