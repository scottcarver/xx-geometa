### Geodata Manager

## Overview
This plugin registers custom fields related to managing geographic data in WordPress. 

<img src="https://github.com/WordPress/block-development-examples/blob/trunk/plugins/post-meta-modal-2502fb/_assets/post-meta-modal.gif"/>

## Features
- registers the standard `geo_latitude` / `geo_longitude` / `geo_public` / `geo_address` values defined in the [WP Geodata documentation](https://codex.wordpress.org/Geodata)
- modern Gutenberg based editing interface allows users to manage these fields, with inputs restricted to only allow valid data.
- when the Google API is enabled (and properly accredited) the user will also have access to a high-end interface for choosing your own locations.
- The modal can be opened using the Options panel or the Command Palette (`cmd + k`). The full commands are "Edit Geolocation data" and "Toggle Geolocation Panel" - for practical purposes typing "geo" in the search field will surface these uptions.

## Todo:
- Optimize aspects of the plugin to your preferences from an options page.
- include preference for optional/required fields which reflect the spec, and potentially W3C fields
- add an animated gif under the overview section
- instead of using secrets.js, adopt a standardized approach
- make the preview sidebar look nicer
- design and add custom iconography for sidebar and commands


## Related resources

- This plugin is built using code from this [Starter Repo](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/post-meta-modal-2502fb)

- [SlotFills Reference](https://developer.wordpress.org/block-editor/reference-guides/slotfills/) ([`PluginMoreMenuItem`](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/))
- [Component Reference](https://developer.wordpress.org/block-editor/reference-guides/components/) (`Modal`, `RadioControl`, `SelectControl`, `TextControl` ) 
- [@wordpress/commands](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand) package reference ([`useCommand`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand))
- [`register_post_meta`](https://developer.wordpress.org/reference/functions/register_post_meta/) documentation


