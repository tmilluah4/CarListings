/*
 * File: app/view/CarListings.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.CarListings', {
    extend: 'Ext.panel.Panel',

    frame: true,
    height: 250,
    width: 400,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Car Listing',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    store: 'CarDataStore',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'manufacturer',
                            text: 'Manufacturer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'model',
                            text: 'Model'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'price',
                            text: 'Price'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'wiki',
                            text: 'Wiki'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'quality',
                            text: 'Quality'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});