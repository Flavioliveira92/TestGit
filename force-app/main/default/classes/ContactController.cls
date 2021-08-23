public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {

    string key = '%' + searchKey + '%';

        return [Select id, name From Contact Where name LIKE :key];
    }
}