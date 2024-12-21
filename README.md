# Geodata Sidebar

This plugin registers custom fields and creates custom interface elements related to managing geographic data in WordPress. By registering the standard values defined in the [WP Geodata documentation](https://codex.wordpress.org/Geodata) the feature set is very specific and limited.

### Editing Interface
<img src="_assets/edit-geodata-small.gif"/>

### Attachment Interface
<img src="_assets/attachment-meta-sidebar.jpg"/>

### Metadata Values

This table shows a breakdown of the metadata values that the plugin stores:

<table>
    <tr>
        <th>Field</th>
        <th>Meta value</th>
        <th>Example</th>
    </tr>
    <tr>
       <td>Public</td>
       <td>`geo_public`</td>
        <td>1</td>
    </tr>
    <tr>
       <td>Address</td>
       <td>`geo_address`</td>
        <td>123 Front Street Portland OR</td>
    </tr>
    <tr>
       <td>Latitude</td>
       <td>`geo_latitude`</td>
        <td>45</td>
    </tr>
        <tr>
       <td>Longitude</td>
       <td>`geo_longitude`</td>
        <td>122</td>
    </tr>
    <tr>
       <td>Heading</td>
       <td>`geo_heading`</td>
        <td>120</td>
    </tr>
</table>

## Features
- modern Gutenberg based editing interface allows users to manage geodata fields, with inputs restricted to only allow valid data.
- when the Google Maps API is enabled (and properly accredited) the user will also have access to a visual interface for choosing locations.
- The modal can be opened using the Options panel or the Command Palette (`cmd + k`). The full commands are `Edit Geolocation data` and `Toggle Geolocation Panel` - for practical purposes typing "geo" in the search field will surface both uptions.
- options page includes an option to choose where the interface appears: `publishing sidebar`, `plugin sidebar`, or `secondary menu`
- Attachment data is automatically extracted upon upload and can be manually retrieved at any point.

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

