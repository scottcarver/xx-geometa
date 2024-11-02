<?php
// Add metabox for geodatas
function add_geodata_metabox() {
    // Make sure it's an audio attachment
    $mime_type = get_post_mime_type(get_the_ID());
    echo($mime_type);
    if (str_contains($mime_type, 'image')) {
        add_meta_box(
            'geodata_metabox',
            'Attachment Geodata',
            'render_geodata_metabox',
            'attachment',
            'normal',
            'high'
        );
    }

}
add_action('add_meta_boxes', 'add_geodata_metabox');

// Render the content of the geodata metabox
function render_geodata_metabox($post) {


    /* Values Are:
        'geo_public',
        'geo_latitude',
        'geo_longitude',
        'geo_address',
        'geo_map',
    */



 

    // Get existing values
    $geo_public = get_post_meta($post->ID, 'geo_public', true);
    $geo_latitude = get_post_meta($post->ID, 'geo_latitude', true);
    $geo_longitude = get_post_meta($post->ID, 'geo_longitude', true);
    $geo_heading = get_post_meta($post->ID, 'geo_heading', true);
    $geo_address = get_post_meta($post->ID, 'geo_address', true);
    // $geo_map = get_post_meta($post->ID, 'geo_map', true); // not relevant
    $api_key = get_option('opt_geoapikey', '');
    $geodata_exists = $geo_longitude && $geo_longitude;

    // Output form fields
    wp_nonce_field(basename(__FILE__), 'geodata_metabox_nonce');

    ?>


    <table>
    <tr>
        <td><label for="geo_public">Public?</label></td>
        <td><input type="checkbox" id="geo_public" name="geo_public" value="1" <?php checked($geo_public, '1'); ?>></td>
    </tr>
    <tr>
        <td><label for="geo_address">Address:</label></td>
        <td> <input type="text" id="geo_address" name="geo_address" value="<?php echo esc_attr($geo_address); ?>" /></td>
    </tr>
    <tr>
        <td><label for="geo_latitude">Latitude:</label></td>
        <td><input type="text" id="geo_latitude" name="geo_latitude" value="<?php echo esc_attr($geo_latitude); ?>" /><br /></td>
    </tr>
    <tr>
        <td><label for="geo_longitude">Longitude:</label></td>
        <td><input type="text" id="geo_longitude" name="geo_longitude" value="<?php echo esc_attr($geo_longitude); ?>" /><br />
        </td>
    </tr>
    <tr>
        <td><label for="geo_heading">Heading:</label></td>
        <td><input type="text" id="geo_heading" name="geo_heading" value="<?php echo esc_attr($geo_heading); ?>" /><br />
        </td>
    </tr>
    <tr>
        <td colspan="2">
         <button id="resetgeo">Get Geodata from Image</button>
        </td>
    </tr>
    <tr>
        <td colspan="2">
        <div id="map" style="aspect-ratio:1;width: 100%;"></div>
        </td>
    </tr>
    <?php /*
    <tr>
        <td><label for="geo_map">Map:</label></td>
        <td> <input type="text" id="geo_map" name="geo_map" value="<?php echo esc_attr($geo_map); ?>" /></td>
    </tr>
 
    <tr>
        <td colspan="2">
        <details style="background:#2271b1;color:white;padding:5px;margin-top:5px;">
            <summary style="text-align:center;">Need Help and Information?</summary>
            <p>
                Requires a computer running an operating system. The computer must have some
                memory and ideally some kind of long-term storage. An input device as well
                as some form of output device is recommended.
            </p>
            <button id="resetgeo">Reset Geodata</button>
        </details>
        </td>
     
    </tr>
       */ ?>
    </table>
    <script>

            jQuery('#resetgeo').on("click", function(event){
                event.preventDefault();
                // alert("boop");
                resetGeoData(<?php echo(get_the_ID()); ?>)
            });

            function resetGeoData(attachmentID) {
                jQuery.post(ajaxurl, {
                    action: 'reset_geo_data',
                    attachment_id: attachmentID
                }, function(response) {
                    console.log("response");
                    if (response.success) {
                        jQuery('#geo_latitude').val(response.data.latitude);
                        jQuery('#geo_longitude').val(response.data.longitude);
                        jQuery('#geo_heading').val(response.data.heading);
                    } else {
                        alert('Failed to reset GeoData: ' + response.data);
                    }
                });
            }

        </script>
    <script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "<?php echo esc_attr($api_key); ?>",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
</script>
    <?php /* 
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo($api_key); ?>&loading=async&libraries=maps,marker&v=beta&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284" defer>
</script>
*/ ?>
<?php /*
<gmp-map center="<?php echo($geo_latitude); ?>,<?php echo($geo_longitude); ?>" zoom="10" map-id="DEMO_MAP_ID" style="height: 400px" gestureHandling="none" fullscreenControl="false">
<gmp-advanced-marker
    position="<?php echo($geo_latitude); ?>,<?php echo($geo_longitude); ?>"
    title="<?php echo($geo_address); ?>"
  ></gmp-advanced-marker>
</gmp-map>
   */ ?>
   <?php if($geodata_exists){ ?>
   <script>
      let map;

        async function initMap() {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
          
            map = new Map(document.getElementById("map"), {
                center: { lat: <?php echo esc_attr($geo_latitude); ?>, lng: <?php echo esc_attr($geo_longitude); ?> },
                zoom: 8,
                draggable: false,
                mapId: "geometa_map_preview",
            });
            const marker = new AdvancedMarkerElement({
                map,
                position: { lat: <?php echo esc_attr($geo_latitude); ?>, lng: <?php echo esc_attr($geo_longitude); ?> },
            });
            
        }

        initMap();
    </script>
    
<?php } ?>




<?php }

// Save the geodata metabox data
function save_geodata_metabox($post_id) {

    // Verify nonce
    if (!isset($_POST['geodata_metabox_nonce']) || !wp_verify_nonce($_POST['geodata_metabox_nonce'], basename(__FILE__))) {
        return $post_id;
    }
   
    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check post type and permissions
    if ('attachment' === get_post_type($post_id) && current_user_can('edit_post', $post_id)) {
        // Save data
        update_post_meta($post_id, 'geo_latitude', sanitize_text_field($_POST['geo_latitude']));
        update_post_meta($post_id, 'geo_longitude', sanitize_text_field($_POST['geo_longitude']));
        update_post_meta($post_id, 'geo_heading', sanitize_text_field($_POST['geo_heading']));
        update_post_meta($post_id, 'geo_public', sanitize_text_field($_POST['geo_public']));
        update_post_meta($post_id, 'geo_address', sanitize_text_field($_POST['geo_address']));

        // Intentionally Disabled, not relevant
        // update_post_meta($post_id, 'geo_map', sanitize_text_field($_POST['geo_map']));
    }
}
add_action( 'edit_attachment', 'save_geodata_metabox', 10, 1 );




/** HERRE WO GO */
// AJAX handler to return geo data for a given attachment
function reset_geo_data_ajax() {
    // Check if attachment ID is passed
    if (!isset($_POST['attachment_id'])) {
        wp_send_json_error('No attachment ID provided.');
    }

    $attachment_id = intval($_POST['attachment_id']);
    // $file_path = get_attached_file($attachment_id);
    $file_path = wp_get_original_image_url($attachment_id);
    $file_type = wp_check_filetype($file_path);

    if (strpos($file_type['type'], 'image') !== false) {
        // Read EXIF data
        $exif_data = @exif_read_data($file_path);

        if ($exif_data && isset($exif_data['GPSLatitude'], $exif_data['GPSLongitude'])) {
            $latitude = convert_gps_to_decimal($exif_data['GPSLatitude'], $exif_data['GPSLatitudeRef']);
            $longitude = convert_gps_to_decimal($exif_data['GPSLongitude'], $exif_data['GPSLongitudeRef']);
            $heading = getGpsDirection($exif_data['GPSImgDirection']); 

            // Return the geo data as JSON
            wp_send_json_success([
                'latitude' => $latitude,
                'longitude' => $longitude,
                'heading' => $heading
            ]);
        } else {
            wp_send_json_error('No GPS data found in this image.');
           // wp_send_json_error('No GPS data found in this image.');
        }
    } else {
        wp_send_json_error('This file is not an image.');
    }
}
add_action('wp_ajax_reset_geo_data', 'reset_geo_data_ajax');






function getGpsDirection($direction, $directionRef="T") {
    // Convert the direction to a number (if it's a fraction, calculate the actual number)
    if (strpos($direction, '/') !== false) {
        list($numerator, $denominator) = explode('/', $direction);
        $directionValue = $numerator / $denominator;
    } else {
        $directionValue = (float) $direction;
    }

    // If the reference is Magnetic North ('M'), adjust for declination (simplified)
    // This is a placeholder since true declination adjustment depends on location and time.
    // For now, let's assume magnetic and true north are aligned (0 adjustment).
    if ($directionRef === 'M') {
        // Placeholder for magnetic declination adjustment (usually small adjustment is required)
        $declinationAdjustment = 0; // You can adjust based on location if you have that data.
        $directionValue += $declinationAdjustment;
    }

    // Ensure the direction is between 0 and 360 degrees
    $directionValue = fmod($directionValue, 360);
    if ($directionValue < 0) {
        $directionValue += 360;
    }

    return $directionValue;
}