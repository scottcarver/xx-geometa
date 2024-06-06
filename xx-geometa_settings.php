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
    echo('When should Geolocation Editing be available? <br /><br />');
    foreach ($post_types as $post_type) {
        $checked = in_array($post_type, $saved_post_types) ? 'checked' : '';
        echo '<label>';
        echo '<input type="checkbox" name="opt_geoallowedtypes[]" value="' . esc_attr($post_type) . '" ' . $checked . '> ' . esc_html($post_type);
        echo '</label><br>';
    }
}

function geo_sidebar_api_key_callback() {
    $api_key = get_option('opt_geoapikey', '');
    echo('Add a Google  API key, which can be obtained in the <a href="https://console.cloud.google.com/">Google API Console</a>. The <a href="#">Places</a> &amp; <a href="#">Map</a> APIs must be enabled.<br /><br />');
    echo '<input type="password" name="opt_geoapikey" value="' . esc_attr($api_key) . '" class="regular-text">';
    
}

function geo_sidebar_placement_callback() {
    $placement = get_option('opt_geoplacement', 'publish panel');
    $options = array(
        'publish' => 'Publish Panel',
        'sidebar' => 'Sidebar',
        'quicklink' => 'Quick Link'
    );
    echo('Where should the Geolocation Editing interface be placed?<br /><br />');
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
        // 'map_static' => 'Static Preview',
        'map_selector' => 'Interactive Map',
        // 'map_both' => 'Both Maps',
    );
    // echo('Using Static and Interactive maps makes use of the Google Maps API, which must be managed in the Google API Console. <br /><br />');
    echo('How should maps display? <br /><br />');
    echo '<select name="opt_geointerface">';
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
        <h1>Geolocation Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('geo_sidebar_settings');
            do_settings_sections('geo-sidebar-settings');
            submit_button();
            ?>
        </form>
    </div>
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

    add_settings_field(
        'opt_geoallowedtypes',
        __('Supported Post Types', 'textdomain'),
        'opt_geoallowedtypes_callback',
        'geo-sidebar-settings',
        'geo_sidebar_settings_section'
    );



    // Placement
    add_settings_field(
        'opt_geoplacement',            // ID
        'Placement',                   // Title
        'geo_sidebar_placement_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );

    // Map Features
    add_settings_field(
        'opt_geointerface',            // ID
        'Map Interface',                   // Title
        'geo_sidebar_interface_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );
    
    add_settings_field(
        'opt_geoapikey',               // ID
        'Google API Key',              // Title
        'geo_sidebar_api_key_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );
}

add_action('admin_menu', function() {
    add_options_page('Geolocation Settings', 'Geolocation', 'manage_options', 'geo-sidebar-settings', 'geo_sidebar_settings_page');
});

add_action('admin_init', 'geo_sidebar_settings_init');

// Section description callback
function geo_sidebar_settings_section_callback() {
    return false;
//    echo '<p>' . __('Select the post types that are allowed to have geolocation data.', 'textdomain') . '</p>';
}
?>