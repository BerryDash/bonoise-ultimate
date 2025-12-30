gdjs.InfoCode = {};
gdjs.InfoCode.localVariables = [];
gdjs.InfoCode.idToCallbackMap = new Map();
gdjs.InfoCode.GDNewTextObjects1= [];
gdjs.InfoCode.GDNewTextObjects2= [];
gdjs.InfoCode.GDNewTiledSpriteObjects1= [];
gdjs.InfoCode.GDNewTiledSpriteObjects2= [];
gdjs.InfoCode.GDNewSpriteObjects1= [];
gdjs.InfoCode.GDNewSpriteObjects2= [];
gdjs.InfoCode.GDjsisbObjects1= [];
gdjs.InfoCode.GDjsisbObjects2= [];
gdjs.InfoCode.GDksbsbpart2Objects1= [];
gdjs.InfoCode.GDksbsbpart2Objects2= [];
gdjs.InfoCode.GDRedButtonObjects1= [];
gdjs.InfoCode.GDRedButtonObjects2= [];


gdjs.InfoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.InfoCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.InfoCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.InfoCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.InfoCode.GDNewTiledSpriteObjects1[i].getXOffset() + (1));
}
}
{for(var i = 0, len = gdjs.InfoCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.InfoCode.GDNewTiledSpriteObjects1[i].setYOffset(gdjs.InfoCode.GDNewTiledSpriteObjects1[i].getYOffset() + (1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Space Termites.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.InfoCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InfoCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.InfoCode.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InfoCode.GDRedButtonObjects1[k] = gdjs.InfoCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.InfoCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title gamejam", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.InfoCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InfoCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.InfoCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InfoCode.GDNewSpriteObjects1[k] = gdjs.InfoCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.InfoCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Secret", false);
}
}

}


};

gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDNewTextObjects1.length = 0;
gdjs.InfoCode.GDNewTextObjects2.length = 0;
gdjs.InfoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InfoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InfoCode.GDNewSpriteObjects1.length = 0;
gdjs.InfoCode.GDNewSpriteObjects2.length = 0;
gdjs.InfoCode.GDjsisbObjects1.length = 0;
gdjs.InfoCode.GDjsisbObjects2.length = 0;
gdjs.InfoCode.GDksbsbpart2Objects1.length = 0;
gdjs.InfoCode.GDksbsbpart2Objects2.length = 0;
gdjs.InfoCode.GDRedButtonObjects1.length = 0;
gdjs.InfoCode.GDRedButtonObjects2.length = 0;

gdjs.InfoCode.eventsList0(runtimeScene);
gdjs.InfoCode.GDNewTextObjects1.length = 0;
gdjs.InfoCode.GDNewTextObjects2.length = 0;
gdjs.InfoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InfoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InfoCode.GDNewSpriteObjects1.length = 0;
gdjs.InfoCode.GDNewSpriteObjects2.length = 0;
gdjs.InfoCode.GDjsisbObjects1.length = 0;
gdjs.InfoCode.GDjsisbObjects2.length = 0;
gdjs.InfoCode.GDksbsbpart2Objects1.length = 0;
gdjs.InfoCode.GDksbsbpart2Objects2.length = 0;
gdjs.InfoCode.GDRedButtonObjects1.length = 0;
gdjs.InfoCode.GDRedButtonObjects2.length = 0;


return;

}

gdjs['InfoCode'] = gdjs.InfoCode;
