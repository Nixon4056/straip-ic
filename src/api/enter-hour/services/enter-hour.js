'use strict';

/**
 * enter-hour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enter-hour.enter-hour');
