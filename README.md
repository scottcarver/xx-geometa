### Geodata Manager

## Overview
This plugin registers custom fields related to managing geographic data in WordPress. 

<img src="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/post-meta-modal-2502fb/_assets/post-meta-modal.gif"/>

<img src="_assets/edit-geodata-small.gif"/>

<img src="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/post-meta-modal-2502fb/_assets/post-meta-modal.gif"/>


### Metadata Values

This table shows a breakdown of the values that the plugin stores.

<table>
    <tr>
        <th>Field</th>
        <th>Meta value</th>
        <th>Type</th>
        <th>Example</th>
    </tr>
    <tr>
       <td>Latitude</td>
       <td>`geo_latitude`</td>
         <td>Type</td>
        <td>Example</td>
    </tr>
        <tr>
       <td>Longitude</td>
       <td>`geo_longitude`</td>
         <td>Type</td>
        <td>Example</td>
    </tr>
    <tr>
       <td>Address</td>
       <td>`geo_address`</td>
         <td>Type</td>
        <td>Example</td>
    </tr>
        <tr>
       <td>Public</td>
       <td>`geo_public`</td>
         <td>Type</td>
        <td>Example</td>
    </tr>
    <!-- <tr>
        <td>Map</td>
       <td>`geo_map`</td>
        <td>String</td>
        <td>Example</td>
     </tr> -->
</table>

## Features
- registers the standard `geo_latitude` / `geo_longitude` / `geo_public` / `geo_address` / values defined in the [WP Geodata documentation](https://codex.wordpress.org/Geodata)


- modern Gutenberg based editing interface allows users to manage these fields, with inputs restricted to only allow valid data.
- when the Google Maps API is enabled (and properly accredited) the user will also have access to a visual interface for choosing locations.
- The modal can be opened using the Options panel or the Command Palette (`cmd + k`). The full commands are `Edit Geolocation data` and `Toggle Geolocation Panel` - for practical purposes typing "geo" in the search field will surface both uptions.
- options page includes an option to choose where the interface appears: `publishing sidebar`, `plugin sidebar`, or `secondary menu`

## Todo:
- make the attachment preview sidebar look nicer
- design and add custom iconography for sidebar and commands


## Related resources

- This plugin is uses techniques from this [Starter Repo](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/post-meta-modal-2502fb)

- [SlotFills Reference](https://developer.wordpress.org/block-editor/reference-guides/slotfills/) ([`PluginMoreMenuItem`](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/))
- [Component Reference](https://developer.wordpress.org/block-editor/reference-guides/components/) (`Modal`, `RadioControl`, `SelectControl`, `TextControl` ) 
- [@wordpress/commands](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand) package reference ([`useCommand`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand))
- [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) documentation
- the embedded map on attachment pages is from here https://developers.google.com/maps/documentation/maps-static/overview

