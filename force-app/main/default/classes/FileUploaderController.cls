public with sharing class FileUploaderController {
   @AuraEnabled
   public static boolean associateFilesWithRecord(List<Id> documentIds, Id selectedRecordId ){
       return true;
   }
}
