#!/usr/bin/env node
'use es6';

import CliExecutor from './cli/CliExecutor';

let cli = new CliExecutor();
cli.execute();
