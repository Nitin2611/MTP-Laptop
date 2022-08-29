public without sharing class mtp_SigninController {

    @AuraEnabled
    public static string login(String username, String password){
        try {
            String starturl = 'https://inspiration-drive-1434-dev-ed.my.site.com/s/';
            ApexPages.PageReference pageRef = Site.login(username, password, startUrl);
            if(pageRef != null){
                return pageRef.getUrl();
            } 
            return null;
        } catch (Exception e) {
            System.debug(e);
            return e.getMessage();
        }
    }
}