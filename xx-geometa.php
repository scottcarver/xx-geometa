<?php
/**
 * Plugin Name:       Geodata Sidebar
 * Plugin URI:      https://github.com/scottcarver/xx-geometa
 * Description:       A sidebar plugin used for managing geographic metadata within a post/page or attachment.
 * Version:           1.0.1
 * Author:            Scott Carver
 */

// Register Fields
require_once('xx-geometa_registerfields.php');
// Settings Page
require_once('xx-geometa_settings.php');
// Enqueue Block Assets
require_once('xx-geometa_enqueueassets.php');
// Attachment UI
require_once('xx-geometa_attachmentsidebar.php');
// Image GPS Extraction
require_once('xx-geometa_imageupload.php');