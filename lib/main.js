var ActionButton = require('sdk/ui/button/action').ActionButton,
    Tabs = require('sdk/tabs'),
    Data = require('sdk/self').data;


/* add button for visiting the microblog's index */
var btnOpenIndex = ActionButton({
    id: 'open-index',
    label: 'open-index',
    icon: {
        '16': './action-button/16.png',
        '32': './action-button/32.png',
    },
    onClick: function(){
        Tabs.open(Data.url('./index.html'));
    },
});
