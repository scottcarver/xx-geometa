<?php
// Hook to add admin menu
add_action('admin_menu', 'geo_sidebar_settings_menu');

// Hook to register settings
add_action('admin_init', 'geo_sidebar_register_settings');

function geo_sidebar_settings_menu() {
    // Add a new submenu under Settings
    add_options_page(
        'Geodata Sidebar Settings',  // Page title
        'Geodata Sidebar Settings',  // Menu title
        'manage_options',            // Capability
        'geo-sidebar-settings',      // Menu slug
        'geo_sidebar_settings_page'  // Callback function
    );
}

function geo_sidebar_register_settings() {
    // Register settings
    register_setting('geo_sidebar_settings_group', 'opt_geoallowedtypes');
    register_setting('geo_sidebar_settings_group', 'opt_geoapikey');
    register_setting('geo_sidebar_settings_group', 'opt_geoplacement');

    // Add settings section
    add_settings_section(
        'geo_sidebar_settings_section', // ID
        'Geodata Sidebar Settings',     // Title
        'geo_sidebar_settings_section_callback', // Callback
        'geo-sidebar-settings'          // Page
    );

    // Add settings fields
    add_settings_field(
        'opt_geoallowedtypes',         // ID
        'Allowed Post Types',          // Title
        'geo_sidebar_post_types_callback', // Callback
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

    add_settings_field(
        'opt_geoplacement',            // ID
        'Placement',                   // Title
        'geo_sidebar_placement_callback', // Callback
        'geo-sidebar-settings',        // Page
        'geo_sidebar_settings_section' // Section
    );
}

function geo_sidebar_settings_section_callback() {
    echo 'Configure the Geodata Sidebar Settings below.';
}

function geo_sidebar_post_types_callback() {
    $post_types = get_post_types(array('public' => true));
    $saved_post_types = get_option('opt_geoallowedtypes', array());

    foreach ($post_types as $post_type) {
        $checked = in_array($post_type, $saved_post_types) ? 'checked' : '';
        echo '<label>';
        echo '<input type="checkbox" name="opt_geoallowedtypes[]" value="' . esc_attr($post_type) . '" ' . $checked . '> ' . esc_html($post_type);
        echo '</label><br>';
    }
}

function geo_sidebar_api_key_callback() {
    $api_key = get_option('opt_geoapikey', '');
    echo '<input type="text" name="opt_geoapikey" value="' . esc_attr($api_key) . '" class="regular-text">';
}

function geo_sidebar_placement_callback() {
    $placement = get_option('opt_geoplacement', 'publish panel');
    $options = array(
        'publish panel' => 'Publish Panel',
        'sidebar' => 'Sidebar',
        'quick link' => 'Quick Link'
    );
    echo '<select name="opt_geoplacement">';
    foreach ($options as $value => $label) {
        $selected = ($placement === $value) ? 'selected' : '';
        echo '<option value="' . esc_attr($value) . '" ' . $selected . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}

function geo_sidebar_settings_page() {
    ?>
    <div class="wrap">
        <h1>Geodata Sidebar Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('geo_sidebar_settings_group');
            do_settings_sections('geo-sidebar-settings');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}
?>