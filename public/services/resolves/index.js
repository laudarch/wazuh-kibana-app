/*
 * Wazuh app - Load all the "resolve" functions.
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import { checkTimestamp } from './check-timestamp';
import { healthCheck } from './health-check';
import { settingsWizard } from './settings-wizard';
import { getSavedSearch } from './get-saved-search';
import { goToKibana } from './go-to-kibana';
import { getIp } from './get-ip';
import { getWzConfig } from './get-config';
import { apiCount } from './api-count';

export {
  checkTimestamp,
  healthCheck,
  settingsWizard,
  getSavedSearch,
  goToKibana,
  getIp,
  getWzConfig,
  apiCount
};
