<?php
/**
 * Register custom post meta fields.
 */
function xx_geometa_registerfields() {

	// This should only be for a custom plucked list
	$post_types = get_post_types( array('public' => true) );
	// error_log("boop!");
	// var_dump($post_types);
	// $post_types = array ( 'post', 'page', 'styled', 'wp_block');

	// Iterate over available post_types, registering a metafield for each
    foreach( $post_types as $post_type ){

        // Public
		register_post_meta(
			$post_type,
			'geo_public',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'integer',
			)
		);

		// Latitude
		register_post_meta(
			$post_type,
			'geo_latitude',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'number',
			)
		);

		// Longitudee
		register_post_meta(
			$post_type,
			'geo_longitude',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'number',
			)
		);

	

		// Address
		register_post_meta(
			$post_type,
			'geo_address',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
    }
}

// Priority allows any other posttypes to be predefined
add_action( 'init', 'xx_geometa_registerfields', 1000 );
