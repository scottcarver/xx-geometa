<?php // Reference https://chatgpt.com/c/66fc21a3-77b8-800a-8ae8-762a04cf8b22

function handle_image_exif_data($post_ID) {
    $file_path = get_attached_file($post_ID); // Get the file path of the uploaded attachment
    $file_type = wp_check_filetype($file_path);
    
    // Check if the uploaded file is an image
    if (strpos($file_type['type'], 'image') !== false) {
        // Read EXIF data from the image
        $exif_data = @exif_read_data($file_path);
        
        if ($exif_data && isset($exif_data['GPSLatitude'], $exif_data['GPSLongitude'])) {
            // Convert EXIF GPS data to decimal
            $latitude = convert_gps_to_decimal($exif_data['GPSLatitude'], $exif_data['GPSLatitudeRef']);
            $longitude = convert_gps_to_decimal($exif_data['GPSLongitude'], $exif_data['GPSLongitudeRef']);
            
            // Store lat/long as post meta
            update_post_meta($post_ID, 'geo_latitude', $latitude);
            update_post_meta($post_ID, 'geo_longitude', $longitude);
        }
    }
}
add_action('add_attachment', 'handle_image_exif_data');

function convert_gps_to_decimal($coordinate, $hemisphere) {
    // Convert GPS coordinates (degrees, minutes, seconds) into decimal format
    $degrees = count($coordinate) > 0 ? gps_value_to_number($coordinate[0]) : 0;
    $minutes = count($coordinate) > 1 ? gps_value_to_number($coordinate[1]) : 0;
    $seconds = count($coordinate) > 2 ? gps_value_to_number($coordinate[2]) : 0;

    $decimal = $degrees + ($minutes / 60) + ($seconds / 3600);

    // If the hemisphere is south or west, make it negative
    if ($hemisphere == 'S' || $hemisphere == 'W') {
        $decimal *= -1;
    }

    return $decimal;
}

function gps_value_to_number($coords) {
    // Convert GPS coordinate fraction to a float
    $parts = explode('/', $coords);
    if (count($parts) == 2) {
        return floatval($parts[0]) / floatval($parts[1]);
    }
    return floatval($coords);
}







/**
 * Returns an array of latitude and longitude from the Image file
 * @param image $file
 * @return multitype:number |boolean
 */
/*
function read_gps_location($file){
    if (is_file($file)) {
        $info = exif_read_data($file);
        if (isset($info['GPSLatitude']) && isset($info['GPSLongitude']) &&
            isset($info['GPSLatitudeRef']) && isset($info['GPSLongitudeRef']) &&
            in_array($info['GPSLatitudeRef'], array('E','W','N','S')) && in_array($info['GPSLongitudeRef'], array('E','W','N','S'))) {

            $GPSLatitudeRef  = strtolower(trim($info['GPSLatitudeRef']));
            $GPSLongitudeRef = strtolower(trim($info['GPSLongitudeRef']));

            $lat_degrees_a = explode('/',$info['GPSLatitude'][0]);
            $lat_minutes_a = explode('/',$info['GPSLatitude'][1]);
            $lat_seconds_a = explode('/',$info['GPSLatitude'][2]);
            $lng_degrees_a = explode('/',$info['GPSLongitude'][0]);
            $lng_minutes_a = explode('/',$info['GPSLongitude'][1]);
            $lng_seconds_a = explode('/',$info['GPSLongitude'][2]);

            $lat_degrees = $lat_degrees_a[0] / $lat_degrees_a[1];
            $lat_minutes = $lat_minutes_a[0] / $lat_minutes_a[1];
            $lat_seconds = $lat_seconds_a[0] / $lat_seconds_a[1];
            $lng_degrees = $lng_degrees_a[0] / $lng_degrees_a[1];
            $lng_minutes = $lng_minutes_a[0] / $lng_minutes_a[1];
            $lng_seconds = $lng_seconds_a[0] / $lng_seconds_a[1];

            $lat = (float) $lat_degrees+((($lat_minutes*60)+($lat_seconds))/3600);
            $lng = (float) $lng_degrees+((($lng_minutes*60)+($lng_seconds))/3600);

            //If the latitude is South, make it negative. 
            //If the longitude is west, make it negative
            $GPSLatitudeRef  == 's' ? $lat *= -1 : '';
            $GPSLongitudeRef == 'w' ? $lng *= -1 : '';

            return array(
                'lat' => $lat,
                'lng' => $lng
            );
        }           
    }
    return false;
}
*/