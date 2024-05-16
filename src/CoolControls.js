// import React, { useCallback } from 'react';
import { useState, useCallback } from '@wordpress/element';
import { TextControl, RadioControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
function CoolControls(){
    const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	return (
		<>
			  <TextControl
                label={__('Address', 'block-development-examples')}
                value={meta?.post_meta_modal_2502fb_text_field || ''}
                onChange={useCallback(function(newValue) {
                    console.log("boop", newValue);
                    setMeta(function(prevMeta) {
                        return {
                            ...prevMeta,
                            post_meta_modal_2502fb_text_field: newValue,
                        };
                    });
                }, [setMeta])}
            />
			<RadioControl
				label={ __('Radio Field', 'block-development-examples') }
				selected={ meta?.post_meta_modal_2502fb_radio_field || '' }
				options={[
					{ label: 'Visible', value: '1' },
					{ label: 'Hidden', value: '0' },
					{ label: 'Option C', value: 'c' },
				]}
				onChange={ useCallback(
					(newValue) =>
						setMeta((prevMeta) => ({
							...prevMeta,
							post_meta_modal_2502fb_radio_field: newValue,
						})),
					[setMeta]
				)}
			/>
			<SelectControl
				label={ __('Select Field', 'block-development-examples') }
				value={ meta?.post_meta_modal_2502fb_select_field || '' }
				options={[
					{ disabled: true, label: 'Select an Option', value: '' },
					{ label: 'Option A', value: 'a' },
					{ label: 'Option B', value: 'b' },
					{ label: 'Option C', value: 'c' },
				]}
				onChange={ useCallback(
					(newValue) =>
						setMeta((prevMeta) => ({
							...prevMeta,
							post_meta_modal_2502fb_select_field: newValue,
						})),
					[setMeta]
				)}
			/>
		</>
	);
};

export default CoolControls;