public with sharing class LWCExampleController {
    
    @AuraEnabled
    public static void saveAccountRecord(Account objAcc){
        try{
            insert objAcc;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}