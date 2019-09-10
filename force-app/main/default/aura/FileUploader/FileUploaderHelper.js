({
    getContactTemplate: function(cmp, evt) {
        cmp.find('forceRecordCmp').getNewRecord("Contact", null, false,
            $A.getCallback(function() {
                let newContact = cmp.get('v.newContact');
                let error = cmp.get('v.contactError');

                if (error)
                    console.error('Error in fetching contact template: ', JSON.stringify(error));
                if (newContact) {
                    console.log('Template for new contact retrieved: ', JSON.stringify(newContact));
                }
            }));
    }
})