gdjs.BSRankCode = {};
gdjs.BSRankCode.localVariables = [];
gdjs.BSRankCode.idToCallbackMap = new Map();
gdjs.BSRankCode.GDNewTextObjects1= [];
gdjs.BSRankCode.GDNewTextObjects2= [];
gdjs.BSRankCode.GDNewText2Objects1= [];
gdjs.BSRankCode.GDNewText2Objects2= [];
gdjs.BSRankCode.GDNewText3Objects1= [];
gdjs.BSRankCode.GDNewText3Objects2= [];
gdjs.BSRankCode.GDRedButtonObjects1= [];
gdjs.BSRankCode.GDRedButtonObjects2= [];
gdjs.BSRankCode.GDNewSpriteObjects1= [];
gdjs.BSRankCode.GDNewSpriteObjects2= [];
gdjs.BSRankCode.GDbackgroundObjects1= [];
gdjs.BSRankCode.GDbackgroundObjects2= [];


gdjs.BSRankCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BSRankCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.BSRankCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.BSRankCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.BSRankCode.GDNewText2Objects1[i].getBehavior("Text").setText("Time: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.BSRankCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.BSRankCode.GDNewText3Objects1[i].getBehavior("Text").setText("Final Health: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.BSRankCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BSRankCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.BSRankCode.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BSRankCode.GDRedButtonObjects1[k] = gdjs.BSRankCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.BSRankCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title official", false);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Space Termites.mp3", true, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.BSRankCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.BSRankCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.BSRankCode.GDbackgroundObjects1[i].setXOffset(gdjs.BSRankCode.GDbackgroundObjects1[i].getXOffset() + (1));
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.BSRankCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BSRankCode.GDNewTextObjects1.length = 0;
gdjs.BSRankCode.GDNewTextObjects2.length = 0;
gdjs.BSRankCode.GDNewText2Objects1.length = 0;
gdjs.BSRankCode.GDNewText2Objects2.length = 0;
gdjs.BSRankCode.GDNewText3Objects1.length = 0;
gdjs.BSRankCode.GDNewText3Objects2.length = 0;
gdjs.BSRankCode.GDRedButtonObjects1.length = 0;
gdjs.BSRankCode.GDRedButtonObjects2.length = 0;
gdjs.BSRankCode.GDNewSpriteObjects1.length = 0;
gdjs.BSRankCode.GDNewSpriteObjects2.length = 0;
gdjs.BSRankCode.GDbackgroundObjects1.length = 0;
gdjs.BSRankCode.GDbackgroundObjects2.length = 0;

gdjs.BSRankCode.eventsList0(runtimeScene);
gdjs.BSRankCode.GDNewTextObjects1.length = 0;
gdjs.BSRankCode.GDNewTextObjects2.length = 0;
gdjs.BSRankCode.GDNewText2Objects1.length = 0;
gdjs.BSRankCode.GDNewText2Objects2.length = 0;
gdjs.BSRankCode.GDNewText3Objects1.length = 0;
gdjs.BSRankCode.GDNewText3Objects2.length = 0;
gdjs.BSRankCode.GDRedButtonObjects1.length = 0;
gdjs.BSRankCode.GDRedButtonObjects2.length = 0;
gdjs.BSRankCode.GDNewSpriteObjects1.length = 0;
gdjs.BSRankCode.GDNewSpriteObjects2.length = 0;
gdjs.BSRankCode.GDbackgroundObjects1.length = 0;
gdjs.BSRankCode.GDbackgroundObjects2.length = 0;


return;

}

gdjs['BSRankCode'] = gdjs.BSRankCode;
