({
    handleUploadFinished: function(cmp, evt, helper) {
        let uploadedFiles = event.getParam('files');
        console.log('Files Uploaded: ', JSON.stringify(uploadedFiles));
    },

    handleRecordUpdated: function(cmp, evt, helper) {

    }
})