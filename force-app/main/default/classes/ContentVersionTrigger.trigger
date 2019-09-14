trigger ContentVersionTrigger on ContentVersion (before insert) {

if(Trigger.isInsert && Trigger.isBefore){
    for(ContentVersion cv:Trigger.new){
        cv.addError('Cant upload this file sorry....');
    }
}

}