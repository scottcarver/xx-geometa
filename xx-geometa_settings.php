<?php
// Register the settings
function register_geo_sidebar_settings() {
    register_setting('geo_sidebar_settings', 'opt_geoallowedtypes', array(
        'type' => 'array', // Ensure it's saved as an array
        'sanitize_callback' => 'geoallowedtypes_sanitize',
    ));
    register_setting('geo_sidebar_settings', 'opt_geoapikey');
    register_setting('geo_sidebar_settings', 'opt_geoplacement');
    register_setting('geo_sidebar_settings', 'opt_geointerface');
    register_setting('geo_sidebar_settings', 'opt_geoproprietary');
    
}

// Sanitize the input to ensure it's an array
function geoallowedtypes_sanitize($input) {
    return is_array($input) ? $input : array();
}

add_action('admin_init', 'register_geo_sidebar_settings');

// Callback function to render the checkbox inputs
function opt_geoallowedtypes_callback() {
    $post_types = get_post_types(array('public' => true));
    $saved_post_types = get_option('opt_geoallowedtypes', array());

    // Ensure $saved_post_types is an array
    if (!is_array($saved_post_types)) {
        $saved_post_types = array($saved_post_types);
    }
    echo('When should Geodata Editing be available? <br /><br />');
    foreach ($post_types as $post_type) {
        $checked = in_array($post_type, $saved_post_types) ? 'checked' : '';
        echo '<label>';
        echo '<input type="checkbox" name="opt_geoallowedtypes[]" value="' . esc_attr($post_type) . '" ' . $checked . '> ' . esc_html($post_type);
        echo '</label><br>';
    }
}

function geo_sidebar_api_key_callback() {
    $api_key = get_option('opt_geoapikey', '');
    echo('Add a Google API Secret Key:<br /><br />');
    echo '<input type="password" name="opt_geoapikey" value="' . esc_attr($api_key) . '" class="regular-text">';
    echo('<br /><br /><p style="max-width:600px;margin-left:0;padding-left:0;">In the <a href="https://console.cloud.google.com/">Google API Console</a> 1) create a Service Account 2) Grant it access to the [Places, Streetview, Maps] APIs and 3) generate a Secret Key which you will 4) Enter in this field.</p>');
}

function geo_sidebar_placement_callback() {
    $placement = get_option('opt_geoplacement', 'publish panel');
    $options = array(
        'publish' => 'Publish Panel',
        'sidebar' => 'Sidebar',
        'quicklink' => 'Quick Link'
    );
    echo('Where should the Geodata Editing interface be placed?<br /><br />');
    echo '<select name="opt_geoplacement">';
    foreach ($options as $value => $label) {
        $selected = ($placement === $value) ? 'selected' : '';
        echo '<option value="' . esc_attr($value) . '" ' . $selected . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}

function geo_sidebar_interface_callback() {
    $placement = get_option('opt_geointerface', 'publish panel');
    $options = array(
        'map_none' => 'No Maps',
        'map_selector' => 'Interactive Map',
    );
  
    echo('How should maps display? <br /><br />');
    echo '<select name="opt_geointerface">';
    foreach ($options as $value => $label) {
        $selected = ($placement === $value) ? 'selected' : '';
        echo '<option value="' . esc_attr($value) . '" ' . $selected . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}

function geo_sidebar_proprietary_callback() {
    $placement = get_option('opt_geoproprietary', 'publish panel');
    $options = array(
        'yes' => 'Yes',
        'no' => 'No',
    );
  
    echo('<p style="max-width:70ch;">This displays a custom field saved as "geo_map" - The default map can be set as a PHP constant "GEOMETA_SETTINGS_DEFAULTMAP", which is recommended to be a starter URL.</p><br />');
    echo '<select name="opt_geoproprietary">';
    foreach ($options as $value => $label) {
        $selected = ($placement === $value) ? 'selected' : '';
        echo '<option value="' . esc_attr($value) . '" ' . $selected . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}



// Render the settings page
function geo_sidebar_settings_page() {
    ?>
    <div class="wrap">
        <h1>Geodata Settings</h1>
        <?php /*
        <nav class="nav-tab-wrapper">
            <a href="?page=geo-sidebar-settings" class="nav-tab<?php echo (!isset($_GET['tab']) ? ' nav-tab-active' : ''); ?>">Settings</a>
            <a href="?page=geo-sidebar-settings&tab=help" class="nav-tab<?php echo (isset($_GET['tab']) && $_GET['tab'] == 'help' ? ' nav-tab-active' : ''); ?>">Help</a>
            <a href="?page=geo-sidebar-settings&tab=pro" class="nav-tab<?php echo (isset($_GET['tab']) && $_GET['tab'] == 'pro' ? ' nav-tab-active' : ''); ?>">Pro</a>
        </nav>
        */ ?>
        <?php
        // Display content based on the tab
        if (isset($_GET['tab'])) {
            switch ($_GET['tab']) {
                case 'help': geo_sidebar_help_page(); break;
                case 'pro': geo_sidebar_pro_page(); break;
                default: geo_sidebar_main_page(); break;
            }
        } else {
            geo_sidebar_main_page();
        }
        ?>
  
    </div>
    <?php
}

function geo_sidebar_main_page() {
    ?>
    <form method="post" action="options.php">
        <?php
            settings_fields('geo_sidebar_settings');
            do_settings_sections('geo-sidebar-settings');
            submit_button();
        ?>
    </form>
    <?php
}

// Help page content
function geo_sidebar_help_page() {
    ?>
    <h2>Help</h2>
    <p>contact scottcarver@gmail.com with questions.</p>
    <?php
}

// Pro page content
function geo_sidebar_pro_page() {
    ?>
    <h2>Pro Features</h2>
    <p>There are multiple additional features which are available to pro users.</p>
    <ul>
        <li>Allows the editor to be visible on any public custom post type</li>
        <li>Control allows specific application per-post-type.</li>
        <li>Additional Sidebar and Publish Panel Option makes data more visible</li>
        <li>Additional Fields for managing Heading, Altitude, Accuracy and Speed</li>
        <li>CopyPaste Handler works with Google Mas URLs and LatLng Coordinate Pairs.</li>
        <li>Make use of the Google Map API with Search Field.</li>
        <li>Make use of the Google Street View</li>
        <li>Useful "Set Position to Map Center" feature on maps and street view<li>
    </ul>
    <?php
}

// Initialize the settings and add the section and field
function geo_sidebar_settings_init() {
    
    // Section
    add_settings_section(
        'geo_sidebar_settings_section',
        __('', 'textdomain'),
        'geo_sidebar_settings_section_callback',
        'geo-sidebar-settings'
    );

    // Field: Supported Post Types
    add_settings_field(
        'opt_geoallowedtypes',
        __('Supported Post Types', 'textdomain'),
        'opt_geoallowedtypes_callback',
        'geo-sidebar-settings',
        'geo_sidebar_settings_section'
    );

    // Field: Placement
    add_settings_field(
        'opt_geoplacement',            // ID
        'Placement',                   // Title
        'geo_sidebar_placement_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );

    // Field: Map Features
    add_settings_field(
        'opt_geointerface',            // ID
        'Map Interface',                   // Title
        'geo_sidebar_interface_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );
    

    // Field: Map Features
    add_settings_field(
        'opt_geoapikey',               // ID
        'Google API Key',              // Title
        'geo_sidebar_api_key_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );

    // Field: Proprietary Features
    add_settings_field(
        'opt_geoproprietary',            // ID
        'Proprietary Features?',                   // Title
        'geo_sidebar_proprietary_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );
    

}

add_action('admin_menu', function() {
    add_options_page('Geodata Settings', 'Geodata', 'manage_options', 'geo-sidebar-settings', 'geo_sidebar_settings_page');
});

add_action('admin_init', 'geo_sidebar_settings_init');

// Section description callback
function geo_sidebar_settings_section_callback() {
    return false;
//    echo '<p>' . __('Configure the settings for the geolocation data plugin based on your use case.', 'textdomain') . '</p>';
}
?>