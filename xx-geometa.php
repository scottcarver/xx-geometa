<?php
/**
 * Plugin Name:       Geodata Sidebar
 * Requires at least: 6.3
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

// Register Fields
require_once('xx-geometa_registerfields.php');
// Settings Page
require_once('xx-geometa_settings.php');
// Enqueue Block Assets
require_once('xx-geometa_enqueueassets.php');