import {Definition} from '../lib/types';
import extend from '../lib/extend';
import * as tuya from '../lib/tuya';

const definitions: Definition[] = [
    {
        zigbeeModel: ['AJ-RGBCCT 5 in 1'],
        model: 'Aj_Zigbee_Led_Strip',
        vendor: 'Ajax Online',
        description: 'LED Strip',
        extend: extend.light_onoff_brightness_colortemp_color(),
    },
    {
        zigbeeModel: ['AJ_ZB30_GU10', 'AJ_ZB120_GU10'],
        model: 'AJ_ZB_GU10',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee pro GU10 spotlight bulb',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [158, 495], disableEffect: true}),
    },
    {
        zigbeeModel: ['AJ_ZBPROA60', 'AJ_ZBPROA6'],
        model: 'AJ_ZIGPROA60',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee pro 12W A60 bulb',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [158, 495]}),
        meta: {turnsOffAtBrightness1: true},
    },
    {
        zigbeeModel: ['ZB_A60_RGBCW'],
        model: 'ZB_A60_RGBCW',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee pro 12W A60 RGBCW bulb',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 500]}),
    },
    {
        fingerprint: [{modelID: 'TS0505B', manufacturerName: '_TZ3210_hzy4rjz3'}],
        model: 'AJ_RGBCCT_CTRL',
        vendor: 'Ajax Online',
        description: 'Smart Zigbee LED strip RGB+CCT',
        extend: tuya.extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 500]}),
        meta: {applyRedFix: true, supportsEnhancedHue: false},
    },
    {
        fingerprint: [{modelID: 'CCT Light', manufacturerName: 'ZB/Ajax Online', manufacturerID: 4137}],
        model: 'ZB-CCT_Filament',
        vendor: 'Ajax Online',
        description: 'Zigbee LED filament light dimmable E27, edison ST64, flame 2200K',
        extend: extend.light_onoff_brightness_colortemp({colorTempRange: [153, 454]}),
    },
];

export default definitions;
module.exports = definitions;
