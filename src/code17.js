gdjs.loadingCode = {};
gdjs.loadingCode.localVariables = [];
gdjs.loadingCode.idToCallbackMap = new Map();
gdjs.loadingCode.GDNewSpriteObjects1= [];
gdjs.loadingCode.GDNewSpriteObjects2= [];
gdjs.loadingCode.GDNewSpriteObjects3= [];
gdjs.loadingCode.GDloadingObjects1= [];
gdjs.loadingCode.GDloadingObjects2= [];
gdjs.loadingCode.GDloadingObjects3= [];


gdjs.loadingCode.asyncCallback25032348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title official", false);
}
gdjs.loadingCode.localVariables.length = 0;
}
gdjs.loadingCode.idToCallbackMap.set(25032348, gdjs.loadingCode.asyncCallback25032348);
gdjs.loadingCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.loadingCode.asyncCallback25032348(runtimeScene, asyncObjectsList)), 25032348, asyncObjectsList);
}
}

}


};gdjs.loadingCode.asyncCallback25031844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadingCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.loadingCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.loadingCode.GDloadingObjects2);
{for(var i = 0, len = gdjs.loadingCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.loadingCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.2, true);
}
}
{for(var i = 0, len = gdjs.loadingCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.loadingCode.GDloadingObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 0.2, true);
}
}

{ //Subevents
gdjs.loadingCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.loadingCode.localVariables.length = 0;
}
gdjs.loadingCode.idToCallbackMap.set(25031844, gdjs.loadingCode.asyncCallback25031844);
gdjs.loadingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadingCode.asyncCallback25031844(runtimeScene, asyncObjectsList)), 25031844, asyncObjectsList);
}
}

}


};gdjs.loadingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game");
}

{ //Subevents
gdjs.loadingCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GDNewSpriteObjects1.length = 0;
gdjs.loadingCode.GDNewSpriteObjects2.length = 0;
gdjs.loadingCode.GDNewSpriteObjects3.length = 0;
gdjs.loadingCode.GDloadingObjects1.length = 0;
gdjs.loadingCode.GDloadingObjects2.length = 0;
gdjs.loadingCode.GDloadingObjects3.length = 0;

gdjs.loadingCode.eventsList2(runtimeScene);
gdjs.loadingCode.GDNewSpriteObjects1.length = 0;
gdjs.loadingCode.GDNewSpriteObjects2.length = 0;
gdjs.loadingCode.GDNewSpriteObjects3.length = 0;
gdjs.loadingCode.GDloadingObjects1.length = 0;
gdjs.loadingCode.GDloadingObjects2.length = 0;
gdjs.loadingCode.GDloadingObjects3.length = 0;


return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
