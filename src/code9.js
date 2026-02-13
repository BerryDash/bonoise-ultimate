gdjs.BSRank2Code = {};
gdjs.BSRank2Code.localVariables = [];
gdjs.BSRank2Code.idToCallbackMap = new Map();
gdjs.BSRank2Code.GDNewTextObjects1= [];
gdjs.BSRank2Code.GDNewTextObjects2= [];
gdjs.BSRank2Code.GDNewText2Objects1= [];
gdjs.BSRank2Code.GDNewText2Objects2= [];
gdjs.BSRank2Code.GDNewText3Objects1= [];
gdjs.BSRank2Code.GDNewText3Objects2= [];
gdjs.BSRank2Code.GDRedButtonObjects1= [];
gdjs.BSRank2Code.GDRedButtonObjects2= [];
gdjs.BSRank2Code.GDbackgroundObjects1= [];
gdjs.BSRank2Code.GDbackgroundObjects2= [];


gdjs.BSRank2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BSRank2Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.BSRank2Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs.BSRank2Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.BSRank2Code.GDNewText2Objects1[i].getBehavior("Text").setText("Time: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.BSRank2Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.BSRank2Code.GDNewText3Objects1[i].getBehavior("Text").setText("Final Health: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.BSRank2Code.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BSRank2Code.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.BSRank2Code.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BSRank2Code.GDRedButtonObjects1[k] = gdjs.BSRank2Code.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.BSRank2Code.GDRedButtonObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.BSRank2Code.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.BSRank2Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.BSRank2Code.GDbackgroundObjects1[i].setXOffset(gdjs.BSRank2Code.GDbackgroundObjects1[i].getXOffset() + (1));
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.BSRank2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BSRank2Code.GDNewTextObjects1.length = 0;
gdjs.BSRank2Code.GDNewTextObjects2.length = 0;
gdjs.BSRank2Code.GDNewText2Objects1.length = 0;
gdjs.BSRank2Code.GDNewText2Objects2.length = 0;
gdjs.BSRank2Code.GDNewText3Objects1.length = 0;
gdjs.BSRank2Code.GDNewText3Objects2.length = 0;
gdjs.BSRank2Code.GDRedButtonObjects1.length = 0;
gdjs.BSRank2Code.GDRedButtonObjects2.length = 0;
gdjs.BSRank2Code.GDbackgroundObjects1.length = 0;
gdjs.BSRank2Code.GDbackgroundObjects2.length = 0;

gdjs.BSRank2Code.eventsList0(runtimeScene);
gdjs.BSRank2Code.GDNewTextObjects1.length = 0;
gdjs.BSRank2Code.GDNewTextObjects2.length = 0;
gdjs.BSRank2Code.GDNewText2Objects1.length = 0;
gdjs.BSRank2Code.GDNewText2Objects2.length = 0;
gdjs.BSRank2Code.GDNewText3Objects1.length = 0;
gdjs.BSRank2Code.GDNewText3Objects2.length = 0;
gdjs.BSRank2Code.GDRedButtonObjects1.length = 0;
gdjs.BSRank2Code.GDRedButtonObjects2.length = 0;
gdjs.BSRank2Code.GDbackgroundObjects1.length = 0;
gdjs.BSRank2Code.GDbackgroundObjects2.length = 0;


return;

}

gdjs['BSRank2Code'] = gdjs.BSRank2Code;
