gdjs.sgCode = {};
gdjs.sgCode.localVariables = [];
gdjs.sgCode.idToCallbackMap = new Map();
gdjs.sgCode.GDNewTextObjects1= [];
gdjs.sgCode.GDNewTextObjects2= [];
gdjs.sgCode.GDNewTextObjects3= [];
gdjs.sgCode.GDSmallGreyButtonObjects1= [];
gdjs.sgCode.GDSmallGreyButtonObjects2= [];
gdjs.sgCode.GDSmallGreyButtonObjects3= [];
gdjs.sgCode.GDsettingsObjects1= [];
gdjs.sgCode.GDsettingsObjects2= [];
gdjs.sgCode.GDsettingsObjects3= [];
gdjs.sgCode.GDNewTiledSpriteObjects1= [];
gdjs.sgCode.GDNewTiledSpriteObjects2= [];
gdjs.sgCode.GDNewTiledSpriteObjects3= [];
gdjs.sgCode.GDNewText2Objects1= [];
gdjs.sgCode.GDNewText2Objects2= [];
gdjs.sgCode.GDNewText2Objects3= [];
gdjs.sgCode.GDSmallGreyButton2Objects1= [];
gdjs.sgCode.GDSmallGreyButton2Objects2= [];
gdjs.sgCode.GDSmallGreyButton2Objects3= [];


gdjs.sgCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects2[i].getBehavior("Text").setText("yall ready");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects2[i].getBehavior("Text").setText("cool things");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects2[i].getBehavior("Text").setText("King Carlos is coming...");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects2[i].getBehavior("Text").setText("sneaky carlos");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects2[i].getBehavior("Text").setText("insertion of text in this place");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sgCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.sgCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.sgCode.GDNewText2Objects1[i].getBehavior("Text").setText("berey dahs");
}
}
}

}


};gdjs.sgCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MenuMusic (1).wav", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.sgCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sgCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.sgCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sgCode.GDSmallGreyButtonObjects1[k] = gdjs.sgCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.sgCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton2"), gdjs.sgCode.GDSmallGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sgCode.GDSmallGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.sgCode.GDSmallGreyButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sgCode.GDSmallGreyButton2Objects1[k] = gdjs.sgCode.GDSmallGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.sgCode.GDSmallGreyButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.sgCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.sgCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.sgCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.sgCode.GDNewTiledSpriteObjects1[i].getXOffset() + (2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 6));
}

{ //Subevents
gdjs.sgCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.sgCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sgCode.GDNewTextObjects1.length = 0;
gdjs.sgCode.GDNewTextObjects2.length = 0;
gdjs.sgCode.GDNewTextObjects3.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.sgCode.GDsettingsObjects1.length = 0;
gdjs.sgCode.GDsettingsObjects2.length = 0;
gdjs.sgCode.GDsettingsObjects3.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.sgCode.GDNewText2Objects1.length = 0;
gdjs.sgCode.GDNewText2Objects2.length = 0;
gdjs.sgCode.GDNewText2Objects3.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects2.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects3.length = 0;

gdjs.sgCode.eventsList1(runtimeScene);
gdjs.sgCode.GDNewTextObjects1.length = 0;
gdjs.sgCode.GDNewTextObjects2.length = 0;
gdjs.sgCode.GDNewTextObjects3.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.sgCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.sgCode.GDsettingsObjects1.length = 0;
gdjs.sgCode.GDsettingsObjects2.length = 0;
gdjs.sgCode.GDsettingsObjects3.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.sgCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.sgCode.GDNewText2Objects1.length = 0;
gdjs.sgCode.GDNewText2Objects2.length = 0;
gdjs.sgCode.GDNewText2Objects3.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects2.length = 0;
gdjs.sgCode.GDSmallGreyButton2Objects3.length = 0;


return;

}

gdjs['sgCode'] = gdjs.sgCode;
