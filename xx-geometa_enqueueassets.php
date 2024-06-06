<?php
/**
 * Enqueue the Editor scripts and styles.
 */
function xx_geometa_enqueueassets() {
	global $pagenow, $typenow;
	$xx_geometa_script_assets = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	$post_types = get_post_types( array('public' => true) );


	// Determine if the current type is allowed
	$isAllowedType = in_array($typenow, $post_types);


	// Check if we are on the Post Editor and the post type is "post".
	if ('post.php' === $pagenow && $isAllowedType && file_exists( $xx_geometa_script_assets )) {

		$assets = include $xx_geometa_script_assets;

		wp_enqueue_script(
			'xx_geometa_scripts',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		wp_enqueue_style(
			'xx_geometa_styles',
			plugin_dir_url( __FILE__ ) . 'build/index.css',
			array(),
			$assets['version']
		);

        wp_localize_script('xx_geometa_scripts', 'GeometaPluginSettings', array(
            'apiKey' => get_option('opt_geoapikey'),
            'supportedPostTypes' => get_option('opt_geoallowedtypes', array()),
            'interfacePlacement' => get_option('opt_geoplacement'),
            'interfaceMaps' => get_option('opt_geointerface')
        ));
    
	}
}
add_action( 'enqueue_block_editor_assets', 'xx_geometa_enqueueassets' );
