import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Component.scss';

/**
 * This is the multiview component to handle the multiple item views
 * @property {Array} items to iterate upon
 * @property {Array} selected represents the array of selected Items (for multi)
 * @property {String} identificationKey representing the key in @prop items enumerable
 * property to be identified as unique entity
 * @property {String} valueKey representing the key in @prop items enumerable property
 * to be shown as value to the checklist.
 * @property {Function} onSelect a callback to handle things when an item is selcted
 * The callback will have the function definition as function(item[identificationKey])
 * @property {Function} onUnSelect a callback to handle things when an item is unselected.
 * The callback will have the function defiinition as function(item[identificationKey]) 
 * @property {String} activeValue representing the identifier for active select value.
 * The value will be checked again the @property identificationKey passed
 * @property {Boolean} multi indicating whether the viwe is multi select or not
 * @property {String} classes a comma separated string to represent the custom classes for styling
 */
export const MultiSelect = ({
	items = [],
	selected = [],
	identificationKey = 'id',
	valueKey = 'value',
	onSelect = () => { alert('define a custom function or undefined.') },
	onUnselect = () => { alert('define a custom function or undefined.') },
	activeValue,
	multi = true,
	classes,
}) => <section className={`${classes} scrollabble-multi-select`}>
		{items && items.map((item, index) => {
			return <span key={`item-${index}-${item[valueKey]}`} className='selection-block'>
				{(multi ? selected.includes(item[identificationKey]) : activeValue === item[identificationKey]) ?
					<FontAwesome className='fa-icon' name='check-square' onClick={() => onUnselect(item[identificationKey])} style={{ cursor: 'pointer' }} />
					: <FontAwesome className='fa-icon' name='square-o' onClick={() => onSelect(item[identificationKey])} style={{ cursor: 'pointer' }} />}
				&nbsp;&nbsp;{item[valueKey]}
			</span>
		})}
	</section>;
