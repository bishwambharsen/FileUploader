({
    handleUploadFinished: function(cmp, evt, helper) {
        let uploadedFiles = event.getParam('files');
        console.log('Files Uploaded: ', JSON.stringify(uploadedFiles));
    },

    handleRecordUpdated: function(cmp, evt, helper) {

    },

    doInit: function(cmp, evt, helper) {
        //Get a template for contact
        helper.getContactTemplate(cmp, evt);
    },

    handleUploadError: function(cmp, evt, helper) {
        console.log('Error: ', JSON.stringify(event.getParams()));
    }
})